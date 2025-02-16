<?php
include 'db.php';

$sql = "SELECT * FROM products";
$result = $conn->query($sql);

while ($row = $result->fetch_assoc()) {
    echo "
    <div class='product'>
        <img src='" . $row['image'] . "' alt='" . $row['name'] . "'>
        <h3>" . $row['name'] . "</h3>
        <p class='price'>$" . $row['price'] . "</p>
        <button class='add-to-cart' onclick=\"addToCart('" . $row['name'] . "', " . $row['price'] . ", '" . $row['image'] . "')\">Add to Cart</button>
    </div>";
}
?>
<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "your_database";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM products";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo '<div class="product">
                <img src="'.$row["image"].'" alt="'.$row["name"].'">
                <h3>'.$row["name"].'</h3>
                <p class="price">$'.$row["price"].'</p>
                <button class="add-to-cart" onclick="addToCart(\''.$row["name"].'\', '.$row["price"].')">Add to Cart</button>
              </div>';
    }
} else {
    echo "No products available.";
}
$conn->close();
?>
