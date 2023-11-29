// TODO
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const select = document.getElementById("contact-kind"); 

// check if an input meets length requirement

const validLength = (input, min) => {
    return (input.value.trim().length > min)
}; 

const validateEmail = (input) => {
    const emailRegex = /\w+@\w+\.\w+/;
    return emailRegex.test(input.value.trim());
};


const handleSelect = (slectElement) => {
    const selectedValue = slectElement.value;

    if (selectedValue == "business"){
        employees.parentElement.classList.remove("hidden");
        os.parenetElement.classList.add("hidden");
    }else if (selectedValue == "technical"){
        os.parentElement.classList.add('hidden'); 
        employees.parentElement.classList.add("hidden");
    }
};

select.addEventListener("change", () => {
    handleSelect(select)
}); 



form.addEventListener("submit", (e) => {
    if (!validLength(firstName, 3) || !validLength(lastName, 3)) {
        e.preventDefault();
        displayErrorMessage("Please fill out the form correctly.");
    }

    if (validLength(firstName, 3) && validLength(lastName, 3) && validateEmail(email)) {
        valid = true;
    } else {
        valid = false;
        e.preventDefault();
        displayErrorMessage("Form was not filled out properly");
    }
});

const displayErrorMessage = (message) => {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach((errorElement) => {
        errorElement.textContent = message;
    });
};