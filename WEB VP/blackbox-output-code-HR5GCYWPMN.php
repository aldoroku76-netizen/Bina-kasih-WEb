<?php
header('Content-Type: application/json');
include '../config.php';

try {
    $search = $_GET['search'] ?? '';
    $kategori = $_GET['kategori'] ?? '';

    $sql = "SELECT * FROM products WHERE 1=1";
    $params = [];

    if ($search) {
        $sql .= " AND nama_produk LIKE :search";
        $params[':search'] = "%$search%";
    }

    if ($kategori) {
        $sql .= " AND kategori = :kategori";
        $params[':kategori'] = $kategori;
    }

    $sql .= " ORDER BY nama_produk ASC";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $products = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($products);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to fetch products']);
}
?>