// profile.js

function updateProfile() {
    // Fetch values from the profile form
    var age = $('#age').val();
    var dob = $('#dob').val();
    var contact = $('#contact').val();

    // AJAX request to profile.php
    $.ajax({
        type: 'POST',
        url: 'php/profile.php', // Adjust the path to your profile.php file
        data: {
            age: age,
            dob: dob,
            contact: contact
        },
        success: function(response) {
            // Handle success response
            console.log(response);

            // You can handle the response here, such as displaying a success message
            // or updating the UI based on the updated profile information.

            // Example: Show a success message
            alert('Profile updated successfully!');
        },
        error: function(error) {
            // Handle error response
            console.error(error);

            // You can show an error message to the user if needed.
            // Example: Show an error alert
            alert('Error updating profile. Please try again.');
        }
    });
}
