// Function to display error message :
function displayError(elemId, errorMsg) {
    document.getElementById(elemId).innerHTML = errorMsg;
}

// Function to validate form : 
function validateForm() {
    var firstName = document.myForm.fname.value;
    var lastName = document.myForm.lname.value;
    var email = document.myForm.email.value;
    var pwd = document.myForm.pwd.value;

    // Defining error variables with a default value
    var nameErr = fnameErr = lnameErr = emailErr = pwdErr = true;

    // Validate first name
    if (firstName == "") {
        displayError("fnameErr", "First Name cannot be empty");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(firstName) === false) {
            displayError ("fnameErr", "Please enter a valid first name");
        } else {
            displayError("fnameErr", "");
            fnameErr = false;
        }
    }

    // Validate last name
    if (lastName == "") {
        displayError("lnameErr", "Last Name cannot be empty");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(lastName) === false) {
            displayError ("lnameErr", "Please enter a valid last name");
        } else {
            displayError("lnameErr", "");
            lnameErr = false;
        }
    }

    // Validate email
    if (email == "") {
        displayError("emailErr", "Email cannot be empty");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            displayError ("emailErr", "Looks like this is not an email");
        } else {
            displayError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate password
    if (pwd == "") {
        displayError("pwdErr", "Password cannot be empty");
    } else {
        var regex = /^[A-Za-z]\w{7,15}$/;
        if ((regex.test(pwd) === false) && (pwd.length < 8)) {
            displayError ("pwdErr", "Please enter a password which contain at least 8 digits");
        } else {
            displayError("pwdErr", "");
            pwdErr = false;
        }
    }

    // Prevent the form from being submitted if there are any errors
    if ((fnameErr || lnameErr || emailErr || pwdErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                        "First Name: " + firstName + "\n" + 
                        "Last Name: " + lastName + "\n" +
                        "Email: " + email + "\n" +
                        "Password: " + pwd + "\n";
    }
    alert(dataPreview);
};