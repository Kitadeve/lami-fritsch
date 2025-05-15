const form = document.querySelector("form");
const message = document.querySelector(".message");
console.log('hello');
let inputLastNameIsValid = false;
let inputFirstNameIsValid = false;
let inputEmailIsValid = false;
let inputSelectIsValid = false;

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    //1. accés à l'élément input name
    const lname = form.lname.value;
    const fname = form.fname.value;
    const email = form.email.value;
    const select = form.subject;

    //2. Vérifier qu le champ est valide


    if (lname != ""){
        inputLastNameIsValid = true
    }

    if (fname != ""){
        inputFirstNameIsValid = true
    }

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        inputEmailIsValid = true;
    }

    if (select != "") {
        inputSelectIsValid = true
    }


    if (inputNameIsValid && inputEmailIsValid && inputSelectIsValid){
        message.innerText = "Formulaire envoyé"
        message.classList.add("message-succes")
        message.classList.remove("message-error")
    }

    else {
        message.innerText = "Formulaire invalide"
        message.classList.add("message-error")
        message.classList.remove("message-succes")
    }

});

console.log('hello');
