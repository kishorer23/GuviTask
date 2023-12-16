<?php
// Include your database connection file
include_once 'db_connect.php';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve form data
    $username = $_POST['username'];
    $enteredPassword = $_POST['password'];

    // Retrieve hashed password from the database
    $stmt = $conn->prepare("SELECT password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($hashed_password);
        $stmt->fetch();

        // Verify password
        if (password_verify($enteredPassword, $hashed_password)) {
            // Start the session (if not started already)
            session_start();

            // Store user information in the session if needed
            $_SESSION['username'] = $username;

            // Send a success message to the client
            echo json_encode(['status' => 'success', 'message' => 'Login successful']);
        } else {
            // Send an error message to the client
            echo json_encode(['status' => 'error', 'message' => 'Incorrect password']);
        }
    } else {
        // Send an error message to the client
        echo json_encode(['status' => 'error', 'message' => 'User not found']);
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>
