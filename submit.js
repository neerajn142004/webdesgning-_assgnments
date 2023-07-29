document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const loginId = document.getElementById("login-id").value;
        const password = document.getElementById("password").value;

        // Replace the following conditional statement with your login logic.
        if (loginId === "exampleUser" && password === "examplePassword") {
            alert("Login successful!");
            // You can redirect the user to another page here.
        } else {
            alert("Invalid login credentials. Please try again.");
        }
    });
});
