const form = document.querySelector("form");
const message = document.querySelector(".message");
let inputLastNameIsValid = false;
let inputFirstNameIsValid = false;
let inputEmailIsValid = false;
// let inputSelectIsValid = false;

// Nettoie les entrées utilisateur
function sanitizeInput(input) {
  return input.replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/["']/g, "")
              .replace(/&/g, "&amp;");
}

// Autorise uniquement lettres, espaces, tirets et apostrophes
function isValidName(name) {
  return /^[a-zA-ZÀ-ÿ '-]+$/.test(name);
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    // Nettoyage des entrées
    const lastName = sanitizeInput(form.lastName.value.trim());
    const firstName = sanitizeInput(form.firstName.value.trim());
    const email = sanitizeInput(form.email.value.trim());
    // const select = sanitizeInput(form.subject.value);

    // Réinitialisation des flags
    inputLastNameIsValid = false;
    inputFirstNameIsValid = false;
    inputEmailIsValid = false;

    // Validation des champs
    if (lastName !== "" && isValidName(lastName)) {
        inputLastNameIsValid = true;
    }

    if (firstName !== "" && isValidName(firstName)) {
        inputFirstNameIsValid = true;
    }

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        inputEmailIsValid = true;
    }

    if (inputLastNameIsValid && inputFirstNameIsValid && inputEmailIsValid) {
        // alert("Formulaire envoyé")
        message.innerText = "Formulaire envoyé";
        message.classList.add("message-succes");
        message.classList.remove("message-error");
        // Ici, tu peux envoyer le formulaire via AJAX si besoin
    } else {
        // alert("Formulaire invalide")
        message.innerText = "Formulaire invalide";
        message.classList.add("message-error");
        message.classList.remove("message-succes");
    }

    setTimeout(function () {
        message.innerText = ""
        message.classList.remove("message-error")
        message.classList.remove("message-succes")
    }, 3000)

});
