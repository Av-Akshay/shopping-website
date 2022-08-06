
var loginform = document.getElementById("loginform");
var registration = document.getElementById("registration");;
var indicater = document.getElementById("indicater");

function register() {
    registration.style.transform = "translateX(0)";
    loginform.style.transform = "translateX(0)";
    indicater.style.transform = "translateX(10rem)"
}

function login() {
    registration.style.transform = "translateX(30rem)";
    loginform.style.transform = "translateX(30rem)";
    indicater.style.transform = "translate(0)"
}