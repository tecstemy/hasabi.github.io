function checkPassword() {
    var passwordInput = document.getElementById("password").value;
    var encodedPassword = btoa(passwordInput);
    var errorMessage = document.getElementById("error-message");

    if (encodedPassword === "aGFzYWJpNzc2") {
        window.location.href = "home.html";
    } else if (encodedPassword === "aGFzYWJpNzc3") { 
        errorMessage.textContent = "Essa senha foi descartada. Nova senha no grupo."
    } else {
        errorMessage.textContent = "Senha incorreta. Tente novamente.";
    }
}

function logout() {
    window.location.href = "login.html";
}