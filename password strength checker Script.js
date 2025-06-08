const passwordInput = document.getElementById("passwordInput");
const passwordText = document.getElementById("passwordText");

passwordInput.addEventListener("input", function () {

    const password = passwordInput.value;

    let strength = "";

    if (password.length === 0) {
        strength = "strength:";
        strengthText.style.color = "black";
    }
    else if (password.length < 6) {
        strength = "weak";
        strengthText.style.color = "red";
    }
    else if (password.length < 10) {
        strength = "medium";
        strengthText.style.color = "orange";
    }
    else if (/[A-Z]/.test(password) && /[0-9]/.test(password) && /[\W]/.test(password)) {
        strength = "strong";
        strengthText.style.color = "green";
    }
    else {
        strength = "medium";
        strengthText.style.color = "orange";
    }
    strengthText.textContent = `strength:${strength}`;

});







