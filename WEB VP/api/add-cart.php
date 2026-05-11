<?php
header('Content-Type: application/json');
include '../config.php';

$id = $_POST['id'] ?? 0;
$qty = $_POST['qty'] ?? 1;

try {
    // Update stock (simulasi)
    $sql = "UPDATE products SET stock = stock - :qty WHERE id = :id AND stock >= :qty";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([':id' => $id, ':qty' => $qty]);

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
?>