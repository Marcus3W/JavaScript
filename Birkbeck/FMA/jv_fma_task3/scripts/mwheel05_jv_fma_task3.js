// Function to check that username follows pre-determined rules
function usernameValidation(registerForm) {
    let originalUsername = registerForm.username.value; // get entered username
    // the below RegEx checks the email address matches the industry standard checker.
    let check = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    // Check username against above reg.ex. format
    if (check.test(String(originalUsername).toLowerCase())) {
        return true;
    } else {
        handleErrors("usernameError");
        return false;
    }
}

// Function to check that password follows pre-determined rules
function checkPassword(registerForm) {
    let originalPassword = registerForm.password.value;
    // the below RegEx checks the following - Min. 8 characters, one number, at least one uppercase letter, one lowercase letter
    let check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i;
    // Check password against above reg.ex. format
    if (check.test(String(originalPassword).toLowerCase())) {
        return true;
    } else {
        handleErrors("passwordError");
        return false;
    }
}

// Function to check that passwords match
function checkPasswordMatch (registerForm) {
    let originalPassword = registerForm.password.value;
    // check if 2nd password matches the first - continue if true, else display error.
    let retypedPassword = registerForm.retypedpassword.value;
    if (originalPassword === retypedPassword) {
        return true;
    } else {
        handleErrors("passwordmatcherror");
        return false;
    }
}

// Function to return correct error message depending on input - switch used for this. (Similar to class example)
function handleErrors(input) { // Takes input field as parameter
    let error = document.getElementById(input);
    error.setAttribute("class", "error");
    switch (input) { // check input value to switch-case list & set value to currencyValue
        case "usernameError":
            error.innerHTML = ("Invalid username. Please try again");
            break;
        case "passwordError":
            error.innerHTML = ("Must be 8 characters and include one uppercase, one lowercase and one numeric");
            break;
        case "passwordmatcherror":
            error.innerHTML = ("Passwords must match. Please try again");
            break;
    }
}


window.onload = () => {
    let registerForm = document.getElementById("registerdetails");	// Get the form and add event listener to it

    // SHOW PASSWORD CHECK BOX EVENT LISTENER
    registerForm.addEventListener('click',
        (event) => {
            if (event.target.id !== 'showpasswords')
                return;
            // set variables
            let password = document.querySelector('#password');
            let retypedpassword = document.querySelector('#retypedpassword');
            if (!password)
                return;
            if (event.target.checked) {
                password.type = "text";
                retypedpassword.type = "text";
            } else {
                password.type = 'password';
                retypedpassword.type = "password";
            }
        }, false);

    // SUBMIT BUTTON EVENT LISTENER
    registerForm.addEventListener("submit",
        (event) => {
            if (!usernameValidation(registerForm)) {
                event.preventDefault(); // If no match stop form submitting
            }
            if (!checkPassword(registerForm)) {
                event.preventDefault(); // If no match stop form submitting
            }
            if (!checkPasswordMatch(registerForm)) {
                event.preventDefault(); // If no match stop form submitting
            }
        }, false);
}
