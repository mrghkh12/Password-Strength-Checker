const $ = document

const passwordInput = $.querySelector('#passwordInput')
const messageBox = $.querySelector('#messageBox')


passwordInput.addEventListener('keyup' , () =>{
    let value = passwordInput.value
    let msgElem = messageBox.querySelector('.message')
    let passCounter = messageBox.querySelector('.passLength')
    passCounter.innerHTML = passwordInput.value.length
    
    isHaveLowerCase(value)

    if (value.length < 8) {
        msgElem.innerHTML = "Your password must be at least 8 characters"
    }
    else if (isHaveLowerCase(value)) {
        msgElem.innerHTML = "good"
    }
//     if (value.search(/[A-Z]/) < 0) {
//         console.log("Your password must contain at least one upper case letter."); 
//     }
//     if (value.search(/[0-9]/) < 0) {
//         console.log("Your password must contain at least one digit.");
//     }
//    if (value.search(/[!@#\$%\^&\*_]/) < 0) {
//         console.log("Your password must contain at least special char from -[ ! @ # $ % ^ & * _ ]"); 
//     }
})

function isHaveLowerCase(value){
    let haveLower = messageBox.querySelector('.lower')
    if (value.search(/[a-z]/) != -1) {
        haveLower.style.color = 'green'
        return true
    }else{
        haveLower.style.color = 'green'
        return false
    }
}