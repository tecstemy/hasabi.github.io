function checkPassword() {
    var passwordInput = document.getElementById("password").value;
    var encodedPassword = btoa(passwordInput);
    var errorMessage = document.getElementById("error-message");

    if (encodedPassword === "aGFzYWJpNzc3") {
        window.location.href = "index.html";
    } else {
        errorMessage.textContent = "Senha incorreta. Tente novamente.";
    }
}

function logout() {
    window.location.href = "login.html";
}