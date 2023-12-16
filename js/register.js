$(document).ready(function() {
    // Submit form using AJAX
    $('#registerForm').submit(function(e) {
        e.preventDefault();
        
        // Fetch values from the form
        var username = $('#username').val();
        var password = $('#password').val();
        var confirmPassword = $('#confirmPassword').val();

        console.log(username, password, confirmPassword); // Check if values are fetched correctly

        // Validate password matching
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // AJAX request to register.php
        $.ajax({
            type: 'POST',
            url: 'php/register.php',
            data: {
                username: username,
                password: password
            },
            success: function(response) {
                // Handle success response
                console.log(response);
            
                // Check if the response contains the expected success message
                if (response.trim() === "Registration successful!") {
                    alert("Registration successful!");
                    // You can redirect or perform additional actions here
                } else {
                    alert("Unexpected response from the server");
                }
            },
            error: function(error) {
                // Handle error response
                console.error(error);
                // You can show an error message here
            }
        });
    });
});
