const form = document.querySelector(".newsletter-form");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");
const formScreen = document.getElementById("form-screen");
const thankyouScreen = document.getElementById("thankyou-screen");
const dismissBtn = document.querySelector(".dismiss-btn");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!isValidEmail(email)) {
        errorMsg.style.display = "block";
    } else {
        errorMsg.style.display = "none";
        formScreen.classList.add("hidden");
        thankyouScreen.classList.remove("hidden")
    }
});

dismissBtn.addEventListener("click", function() {
    thankyouScreen.classList.add("hidden");
    formScreen.classList.remove("hidden");
    emailInput.value = "";
});

function isValidEmail(email) {
    // Basic email regex pattern
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
