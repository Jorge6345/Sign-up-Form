const createAccountButton = document.querySelector(".create-account-button");
const signUpForm = document.getElementById("sign-up-form");
const passMismatchMessage = document.querySelector(".password-mismatch-message");
const password = document.getElementById("user_password");
const passwordConfirmation = document.getElementById("confirm_password");
const emailInput = document.getElementById("user_email");

signUpForm.addEventListener("submit", function(event) {
    if (password.value !== passwordConfirmation.value) {
        event.preventDefault();
        password.value = null;
        passwordConfirmation.value = null;
        passMismatchMessage.textContent = "Make sure the passwords match";
        password.style.border = '2px solid rgb(255, 17, 0)';
        passwordConfirmation.style.border = '2px solid rgb(255, 17, 0)';
    }
});

emailInput.addEventListener("input", function() {
    if (!emailInput.validity.valid) {
        emailInput.style.border = '2px solid rgb(255, 17, 0)';
    }
    else {
        emailInput.style.border = '2px solid rgb(0, 0, 255)';
    }
});

emailInput.addEventListener("blur", function() {
    if (emailInput.validity.valid) {
        emailInput.style.border = '1px solid rgb(175, 175, 175)';
    }
});

emailInput.addEventListener("click", function() {
    if (emailInput.validity.valid) {
        emailInput.style.border = '2px solid rgb(0, 0, 255)';
    }
});