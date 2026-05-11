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
    }

    $pdo->commit();
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