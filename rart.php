<?php
session_start();

// Initialize the cart if not already set
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = [];
}

// Check if a product is added to the cart
if (isset($_POST['product_id']) && isset($_POST['product_name']) && isset($_POST['product_price'])) {
    $product_id = $_POST['product_id'];
    $product_name = $_POST['product_name'];
    $product_price = $_POST['product_price'];

    // Add the product to the cart session
    $_SESSION['cart'][] = [
        'id' => $product_id,
        'name' => $product_name,
        'price' => $product_price
    ];

    echo json_encode(['success' => true, 'cart_count' => count($_SESSION['cart'])]);
    exit;
}

// Display the cart items (for testing or debugging)
if (isset($_GET['view_cart'])) {
    echo json_encode($_SESSION['cart']);
    exit;
}
?>
