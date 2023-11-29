function toggleFields() {
    const reason = document.getElementById("reason");
    const jobFields = document.getElementById("jobFields");
    const codeFields = document.getElementById("codeFields");

    // Hide all fields
    jobFields.classList.add("hidden");
    codeFields.classList.add("hidden");

    const selectedReason = reason.value;

    if (selectedReason === "job") {
        jobFields.classList.remove("hidden");
    } else if (selectedReason === "code") {
        codeFields.classList.remove("hidden");
    }
}
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const messageError = document.getElementById("message-error");

        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        if (nameInput.value.trim().length < 3){
            nameError.textContent = "Name is required and must be 3 or more characters."; 
            event.preventDefault(); 
        }

        const emailRegex = /\w+@\w+\.\w+/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = "Email is required and must be in the format user@example.com.";
            event.preventDefault();
        }

        if (!emailInput.checkValidity()) {
            emailError.textContent = "Email is required and must be in the format user@example.com.";
            event.preventDefault();
        }

        if (messageInput.value.trim().length < 10) {
            messageError.textContent = "Message is required and must be 10 or more characters.";
            event.preventDefault();
        }
    });

