const $ = document

const passwordInput = $.querySelector('#passwordInput')
const messageBox = $.querySelector('#messageBox')
const showPassBtn = $.querySelector('.showPassBtn')


showPassBtn.addEventListener('click' , () =>{
    let showPassIcon = showPassBtn.querySelector('i')

    if(showPassIcon.classList.contains('fa-square')){
        passwordInput.type = 'text'
        showPassIcon.className = 'fa-solid fa-square-check'
        showPassIcon.style.color = 'rgb(3, 214, 3)'
    }else{
        passwordInput.type = 'password'
        showPassIcon.className = 'fa-regular fa-square'
        showPassIcon.style.color = '#fff'
    }
})

passwordInput.addEventListener('keyup' , () =>{
    let value = passwordInput.value
    let msgElem = messageBox.querySelector('.message')
    let passCounter = messageBox.querySelector('.passLength')
    passCounter.innerHTML = passwordInput.value.length

    isHaveLowerCase(value)
    isHaveUpperCase(value)
    isHaveNumberCase(value)
    isHaveSymbolCase(value)

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
        msgElem.style.color = 'greenyellow'
    }
     if (isHaveSymbolCase(value)) {
        msgElem.innerHTML = "Very Strong"
        msgElem.style.color = 'rgb(3, 214, 3)'
    }

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
function isHaveSymbolCase(value){
    let haveSymbol = messageBox.querySelector('.Symbol')
    if (value.search(/[!@#\$%\^&\*_]/) != -1) {
        haveSymbol.style.color = 'green'
        return true
    }else{
        haveSymbol.style.color = 'red'
        return false
    }
}