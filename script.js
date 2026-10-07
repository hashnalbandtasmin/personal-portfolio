// Interactive welcome message
function showWelcome() {
    document.getElementById("welcomeMessage").innerHTML =
        "Thank you for visiting my portfolio! 😊";
}

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.innerHTML = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        formMessage.innerHTML = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    formMessage.innerHTML =
        "Thank you, " + name + "! Your message has been submitted successfully.";
    formMessage.style.color = "green";

    document.getElementById("contactForm").reset();
});