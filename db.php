<?php
$servername = "localhost";  // Change this to your server's name if using online hosting
$username = "root";         // Default for XAMPP (change for real hosting)
$password = "";             // Default for XAMPP (change for real hosting)
$database = "shopping_cart"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
