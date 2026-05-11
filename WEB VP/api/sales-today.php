<?php
header('Content-Type: application/json');
include '../config.php';

try {
    $sql = "SELECT COALESCE(SUM(total_harga), 0) as total 
            FROM penjualan 
            WHERE DATE(tanggal_transaksi) = CURDATE()";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode(['total' => (float)$result['total']]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['total' => 0, 'error' => 'Failed to fetch sales']);
}
?>
