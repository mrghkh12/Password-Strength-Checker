const $ = document

const passwordInput = $.querySelector('#passwordInput')
const messageBox = $.querySelector('#messageBox')


passwordInput.addEventListener('keyup' , () =>{
    let value = passwordInput.value
    let msgElem = messageBox.querySelector('.message')
    let passCounter = messageBox.querySelector('.passLength')
    passCounter.innerHTML = passwordInput.value.length

    isHaveLowerCase(value)
    isHaveUpperCase(value)
    isHaveNumberCase(value)

     if (isHaveLowerCase(value)) {
        msgElem.innerHTML = "Weak"
        msgElem.style.color = 'red'
    }
     if (isHaveUpperCase(value)) {
        msgElem.innerHTML = "Medium"
        msgElem.style.color = 'yellow'
    }
     if (isHaveNumberCase(value)) {
        msgElem.innerHTML = "Strong"
        msgElem.style.color = 'rgb(3, 214, 3)'
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
    if (value.length < 8) {
        msgElem.innerHTML = "Your password must be at least 8 characters"
        msgElem.style.color = '#fff'
    }
})

function isHaveLowerCase(value){
    let haveLower = messageBox.querySelector('.lower')
    if (value.search(/[a-z]/) != -1) {
        haveLower.style.color = 'green'
        return true
    }else{
        haveLower.style.color = 'red'
        return false
    }
}
function isHaveUpperCase(value){
    let haveUpper = messageBox.querySelector('.upper')
    if (value.search(/[A-Z]/) != -1) {
        haveUpper.style.color = 'green'
        return true
    }else{
        haveUpper.style.color = 'red'
        return false
    }
}
function isHaveNumberCase(value){
    let haveNumber = messageBox.querySelector('.num')
    if (value.search(/[0-9]/) != -1) {
        haveNumber.style.color = 'green'
        return true
    }else{
        haveNumber.style.color = 'red'
        return false
    }
}