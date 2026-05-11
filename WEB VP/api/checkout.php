<?php
header('Content-Type: application/json');
include '../config.php';

$cart = json_decode($_POST['cart'] ?? '[]', true);
$total = floatval($_POST['total'] ?? 0);
$paymentMethod = $_POST['payment_method'] ?? 'tunai';

if (empty($cart)) {
    echo json_encode(['success' => false, 'message' => 'Keranjang kosong']);
    exit;
}

try {
    $pdo->beginTransaction();

    $nomorTransaksi = 'TRX-' . date('Ymd-His') . '-' . strtoupper(substr(uniqid(), -4));

    foreach ($cart as $item) {
        $sql = "INSERT INTO penjualan (produk_id, qty, harga_jual, total_harga, nomor_transaksi) 
                VALUES (:produk_id, :qty, :harga_jual, :total_harga, :nomor_transaksi)";
        
        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            ':produk_id' => $item['id'],
            ':qty' => $item['qty'],
            ':harga_jual' => $item['harga'],
            ':total_harga' => $item['harga'] * $item['qty'],
            ':nomor_transaksi' => $nomorTransaksi
        ]);

        // Kurangi stok produk
        $sqlStock = "UPDATE products SET stock = GREATEST(0, stock - :qty) WHERE id = :produk_id";
        $stmtStock = $pdo->prepare($sqlStock);
        $stmtStock->execute([
            ':qty' => $item['qty'],
            ':produk_id' => $item['id']
        ]);
    }

    $pdo->commit();

    // Otomatis update ke file CSV lokal (Excel)
    try {
        $csvFile = '../Log_Transaksi.csv';
        $isNewFile = !file_exists($csvFile);
        $fp = fopen($csvFile, 'a');
        
        if ($fp) {
            // Jika file baru, tambahkan BOM (untuk UTF-8 Excel) dan Header
            if ($isNewFile) {
                fwrite($fp, "\xEF\xBB\xBF");
                fputcsv($fp, ['Waktu Transaksi', 'Kategori', 'Produk', 'Qty', 'Harga', 'Total'], ';');
            }
            
            $waktu = date('d/m/Y, H.i.s');
            foreach ($cart as $item) {
                $kategori = $item['kategori'] ?? '-';
                $produk = $item['nama'] ?? '';
                $qty = $item['qty'] ?? 0;
                $harga = $item['harga'] ?? 0;
                $totalItem = $qty * $harga;
                
                fputcsv($fp, [$waktu, $kategori, $produk, $qty, $harga, $totalItem], ';');
            }
            fclose($fp);
        }
    } catch (Exception $ex) {
        // Abaikan error penulisan file agar tidak membatalkan checkout
    }

    echo json_encode([
        'success' => true,
        'message' => 'Transaksi berhasil',
        'nomor_transaksi' => $nomorTransaksi,
        'total' => $total
    ]);

} catch (Exception $e) {
    $pdo->rollBack();
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Transaksi gagal: ' . $e->getMessage()]);
}
?>