function toggleForm(event) {
    event.preventDefault();
    var formContainer = document.getElementById("formContainer");
    var applyButton = document.querySelector(".apply-btn1");

    if (formContainer.style.display === "none" || formContainer.style.display === "") {
        formContainer.style.display = "flex";
        applyButton.textContent = "Close";
    } else {
        formContainer.style.display = "none";
        applyButton.textContent = "Apply";
    }
}

function sendEmail() {
    // Implement your email sending logic here
    alert("Email sent successfully!");
}

function reset() {
    // Reset form fields after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("company").value = "";
    document.getElementById("message").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const checkbox = document.getElementById('chk1');

    menuToggle.addEventListener('click', function () {
        checkbox.checked = !checkbox.checked;
    });
});
function startGame() {
    window.location.href = "p2.html"; // Redirect to p2.html
}