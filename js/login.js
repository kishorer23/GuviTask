$(document).ready(function() {
    // Submit form using AJAX
    $('#loginForm').submit(function(e) {
        e.preventDefault();

        // Fetch values from the form
        var username = $('#username').val();
        var password = $('#password').val();

        // AJAX request to login.php
        $.ajax({
            type: 'POST',
            url: 'php/login.php',
            data: {
                username: username,
                password: password
            },
            dataType: 'json', // Expect JSON response
            success: function(response) {
                // Handle success response
                console.log(response);

                if (response.status === 'success') {
                    // Show alert for successful login
                    alert(response.message);
                    // Redirect to profile.php
                    window.location.href = 'profile.html';
                } else {
                    // Show alert for error
                    alert(response.message);
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
