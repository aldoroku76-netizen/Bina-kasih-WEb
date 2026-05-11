<?php
include 'config.php';

$noTransaksi = $_GET['no'] ?? '';

$sql = "SELECT p.nama_produk, pj.qty, pj.harga_jual, pj.total_harga 
        FROM penjualan pj 
        JOIN products p ON pj.produk_id = p.id 
        WHERE pj.nomor_transaksi = :no";
$stmt = $pdo->prepare($sql);
$stmt->execute([':no' => $noTransaksi]);
$items = $stmt->fetchAll(PDO::FETCH_ASSOC);

$total = array_sum(array_column($items, 'total_harga'));
?>
<!DOCTYPE html>
<html>
<head>
    <title>Struk - <?php echo $noTransaksi; ?></title>
    <style>
        * { margin: 0; padding: 0; font-family: 'Courier New', monospace; }
        body { 
            width: 80mm; 
            margin: 0 auto; 
            padding: 20px; 
            background: white; 
            color: black;
            font-size: 12px;
        }
        .header { text-align: center; margin-bottom: 20px; }
        .logo { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
        .info { font-size: 11px; margin-bottom: 20px; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
        th, td { padding: 5px; text-align: left; border-bottom: 1px dashed #ccc; }
        th { font-weight: bold; }
        .total { font-size: 14px; font-weight: bold; }
        .footer { margin-top: 30px; text-align: center; font-size: 10px; }
        @media print { body { margin: 0; } }
    </style>
</head>
<body onload="window.print()">
    <div class="header">
        <div class="logo">🧪 VAPE SHOP</div>
        <div>Sistem Kasir Modern</div>
        <div class="info">
            <?php echo date('d/m/Y H:i:s'); ?><br>
            No. Transaksi: <?php echo $noTransaksi; ?>
        </div>
    </div>

    <table>
        <thead>
            <tr><th>QTY</th><th>Produk</th><th>Harga</th><th>Total</th></tr>
        </thead>
        <tbody>
            <?php foreach ($items as $item): ?>
            <tr>
                <td><?php echo $item['qty']; ?></td>
                <td><?php echo $item['nama_produk']; ?></td>
                <td style="text-align: right;">Rp <?php echo number_format($item['harga_jual'], 0, ',', '.'); ?></td>
                <td style="text-align: right;">Rp <?php echo number_format($item['total_harga'], 0, ',', '.'); ?></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>

    <div style="text-align: right; margin-top: 20px;">
        <div class="total">TOTAL: Rp <?php echo number_format($total, 0, ',', '.'); ?></div>
    </div>

    <div class="footer">
        Terima kasih telah berbelanja!<br>
        Toko Vape Premium #1
    </div>
</body>
</html>