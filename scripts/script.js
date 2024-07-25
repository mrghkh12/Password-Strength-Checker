const $ = document

const passwordInput = $.querySelector('#passwordInput')
const messageBox = $.querySelector('#messageBox')


passwordInput.addEventListener('keyup' , () =>{
    let value = passwordInput.value

    if (value.length < 8) {
        console.log("Your password must be at least 8 characters");
    }
    if (value.length > 32) {
        console.log("Your password must be at max 32 characters");
    }
    if (value.search(/[a-z]/) < 0) {
        console.log("Your password must contain at least one lower case letter."); 
    }
    if (value.search(/[A-Z]/) < 0) {
        console.log("Your password must contain at least one upper case letter."); 
    }
    if (value.search(/[0-9]/) < 0) {
        console.log("Your password must contain at least one digit.");
    }
   if (value.search(/[!@#\$%\^&\*_]/) < 0) {
        console.log("Your password must contain at least special char from -[ ! @ # $ % ^ & * _ ]"); 
    }
})