let inputElem = document.querySelectorAll('.input')
let usernameElem = document.querySelector('.usernameInput')
let loginButton = document.querySelector('.LoginMainButton')
let rememberMeBox = document.querySelector('.checkboxInput')

loginButton.addEventListener('click', function () {

    inputElem.forEach(function (event) {


        if (event.value === "") {
            event.classList.add('Error')
            console.log("empty box");
        } else {
            event.classList.remove('Error')
            console.log("full box");
            event.value = ""

        }

        event.addEventListener('keyup', () => {
            event.classList.remove('Error')
        })
    })

    console.log(rememberMeBox.checked);

    if (rememberMeBox.checked === true) {
        setCookie("login-token", usernameElem.value, 365)
    }


})

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let kei01 = document.querySelector('.myName')
let liElems = document.querySelectorAll('li')
kei01.addEventListener('click', function () {

    liElems.forEach(function (lis) {
        lis.classList.toggle('liVisible')
    })

})





/////////////////////////////////////////////////set cookie////////////////////////////////////////////////////

function setCookie(cookieName, cookieValue, cookieEx) {
    const now = new Date()
    console.log(now);

    let expiredDay = now.setTime(now.getTime + cookieEx * 24 * 60 * 60 * 1000)

    console.log(now);

    document.cookie = `${cookieName}=${cookieValue};path=/;userPassword=nnn55dd6s;expired=${now}`

}

function getCookie(cookieName) {
    let cookieArray = document.cookie.split(";")

    let mainCookie = null;

    cookieArray.some(cookie => {
        if (cookie.includes(cookieName)) {
            mainCookie = cookie.substring(cookie.indexOf("=") + 1)
            return true

        } else {
            console.log("wrong name");
        }
    })
    return mainCookie
}



























































