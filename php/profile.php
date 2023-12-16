<?php
// Include your database connection file
include_once 'db_connect.php';

// Start the session (if not started already)
session_start();

// Check if the user is logged in
if (isset($_SESSION['username'])) {
    $username = $_SESSION['username'];

    // Check if the form is submitted
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        // Retrieve form data
        $age = $_POST['age'];
        $dob = $_POST['dob'];
        $contact = $_POST['contact'];

        // Update user profile in the database
        $stmt = $conn->prepare("UPDATE users SET age = ?, dob = ?, contact = ? WHERE username = ?");
        $stmt->bind_param("ssss", $age, $dob, $contact, $username);

        if ($stmt->execute()) {
            echo "Profile updated successfully!";
        } else {
            echo "Error updating profile: " . $stmt->error;
        }

        // Close statement
        $stmt->close();
    } else {
        echo "Invalid request. Please submit the form.";
    }
} else {
    echo "User not logged in. Please log in first.";
}

// Close database connection
$conn->close();
?>
