<?php
// Include the Composer autoload file
require_once '../raceconnect-api-with-composer/raceconnectapi/vendor/autoload.php';

// Include the database connection script
include '../raceconnect-api-with-composer/raceconnectapi/db_connect.php';

//Start login session
session_start();

// Get form data
$email = $_POST['email'];
$password = $_POST['password'];
$remember_me = isset($_POST['remember_me']) ? true : false;

// Prepare and bind
$stmt = $conn->prepare("SELECT username, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);

// Execute statement
$stmt->execute();
$result = $stmt->get_result();

// Check if user exists
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $username = $row['username'];
    $hashed_password = $row['password'];

    // Verify the password
    if (password_verify($password, $hashed_password)) {
        // Set session variables
        $_SESSION['email'] = $email;
        $_SESSION['username'] = $username;

        // Set cookie if remember me is checked
        if ($remember_me) {
            setcookie('email', $email, time() + (86400 * 30), "/");//30 for 30 days
            setcookie('username', $username, time() + (86400 * 30), "/");
        }else{
            // Clear cookies if remember me is not ticked
            setcookie('email', '', time() - 3600, "/");
            setcookie('username', '', time() - 3600, "/");
        }

        // Redirect to main index page
        header("Location: index.php");
        exit();
    } else {
        echo "Invalid email or password";
    }
} else {
    echo "Invalid email or password";
}

// Close connection
$stmt->close();
$conn->close();
?>