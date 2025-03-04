document.getElementById("loginForm").addEventListener("submit", function(event) {
    let valid = true;

    // Validasi Email
    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.style.display = "block";
        valid = false;
    } else {
        emailError.style.display = "none";
    }

    // Validasi Password
    let password = document.getElementById("password").value;
    let passwordError = document.getElementById("passwordError");

    if (password.length < 6) {
        passwordError.style.display = "block";
        valid = false;
    } else {
        passwordError.style.display = "none";
    }

    if (!valid) {
        event.preventDefault();
    }
});
