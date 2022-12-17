// SELECTED THIS TO GET IN "INSIDE VALUE" FOR WHATEVER USER HAS PUT INSIDE THE INPUT SECTION WITH (.value).
let email = document.getElementById("emailCheck");
let password = document.getElementById("passwordCheck");
let allGood = document.getElementById("allGood");
let button = document.getElementById("submit");

// INITIALIZED FALSE TO GET TRUE AND "ALL GOOD TO GO"(in green color) SHOULD PRINT WHEN EMAIL AND PASSWORD VALIDATION BECOMES TRUE.
let emailvalidate=false;
let passwordvalidate=false;


// FUNCTION FOR EMAIL VALIDATION. 
function emailValidate() {
    let emailValue = email.value;

    if (!(emailValue.length > 3 && emailValue.includes("@") && emailValue.includes("."))) {
        document.getElementById("idMessage").innerText = "Make sure email is more than 3 characters and has @ and a ."
        document.getElementById("idMessage").style.color = "red";
        emailvalidate = false;
    }
    else {
        document.getElementById("idMessage").innerText = "";
        emailvalidate = true;
    }
    checkValidate();
}

// FUNCTION FOR PASSWORD VALIDATION. 
function passwordValidate() {
    let passwordValue = password.value;

    if (!(passwordValue.length > 8)) {
        document.getElementById("passwordMessage").innerText = "Make sure password is more than 8 characters."
        document.getElementById("passwordMessage").style.color = "#FF0000";
        passwordvalidate = false;
    }
    else {
        document.getElementById("passwordMessage").innerText = "";
        passwordvalidate = true;
    }
    checkValidate();
}


// FUNCTION FOR CHECK VALIDATION.(IF TRUE THEN SHOW "ALL GOOD TO GO" TEXT IN GREEN COLOR)
function checkValidate() {
    document.getElementById("allGood").innerHTML = "";
    if (emailvalidate && passwordvalidate) {
        document.getElementById("allGood").innerHTML = "All Good to go";
    }
}


// SUBMIT BUTTON FUNCTION.
function submitForm() {
    if (emailvalidate == true && passwordvalidate == true) {
        if (confirm("Are you Sure! You Want to Submit?")) {
            alert("successful signup!");
        }
        // else {
        //   email.value = "";
        //   password.value = "";
        //   allGood.innerHTML = "";
        //   emailvalidate = false;
         //  passwordvalidate = false;
        // }
    }
}
