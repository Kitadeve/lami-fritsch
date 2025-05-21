const form = document.querySelector("form");
const validation = document.querySelector(".validation");
const btn = document.querySelector(".validation-confirm");
let validationTimeout = null

// Fonction de nettoyage des entrées utilisateur
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

function isValidPhoneNumber(phone) {
  return /^(\+33|0)[1-9](?:[\s.-]?\d{2}){4}$/.test(phone);
}

function isValidEmail (email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    // On récupère les valeurs brutes
    const lastNameRaw = form.lastName.value.trim();
    const firstNameRaw = form.firstName.value.trim();
    const emailRaw = form.email.value.trim();
    const phoneNumberRaw = form.phoneNumber.value.trim();
    const dateTimeRaw = form.dateTime.value.trim();
    const groupSizeRaw = form.groupSize.value.trim();
    const eventTypeRaw = form.eventType.value.trim();
    const messageRaw = form.message.value.trim();
    const subsribeNews = form.subscribeNews.checked;

    const groupSize = parseInt(groupSizeRaw, 10);

    // Réinitialisation des flags
    // let inputLastNameIsValid = false;
    // let inputFirstNameIsValid = false;
    // let inputEmailIsValid = false;
    // let inputGroupSizeIsValid = false;

    let errorMessage = "";

    // Validation des champs sur la donnée brute
    if (lastNameRaw === "" || !isValidName(lastNameRaw)) {
        errorMessage = "Veuillez entrer un nom valide (lettres, espaces, tirets, apostrophes).";
    } 
    else if (firstNameRaw === "" || !isValidName(firstNameRaw)) {
        errorMessage = "Veuillez entrer un prénom valide (lettres, espaces, tirets, apostrophes).";
    }
    else if (!isValidEmail(emailRaw)) {
        errorMessage = "Veuillez entrer une adresse e-mail valide.";
    }
    else if (!isValidPhoneNumber(phoneNumberRaw)) {
        errorMessage = "Veuillez entrer un numéro de téléphone valide."
    }
    else if (isNaN(groupSize) || groupSize < 16 || groupSize > 100) {
        errorMessage = "Le nombre de convives doit être compris entre 16 et 100.";
        console.log(groupSize); 
    }

    if (errorMessage === "") {
        form.classList.add("active")
        validation.innerText = "Formulaire envoyé, merci !";
        // validation.classList.add("validation-succes");
        // validation.classList.remove("validation-error");
        // Ici, tu peux envoyer le formulaire via AJAX si besoin

          // On sanitize uniquement pour l'affichage ou l'envoi
        

        const contact = {
             lastName: sanitizeInput(lastNameRaw),
             firstName: sanitizeInput(firstNameRaw),
             email: sanitizeInput(emailRaw),
             phoneNumber: sanitizeInput(phoneNumberRaw),
             dateTime: new Date(dateTimeRaw).toLocaleString(),
             eventType: sanitizeInput(eventTypeRaw),
             message: sanitizeInput(messageRaw)
        };

        // Récupérer les messages existants ou initialiser un tableau vide
        const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];

        // Ajouter le nouveau message
        messages.push(contact);

        // Enregistrer dans le localStorage
        localStorage.setItem('contactMessages', JSON.stringify(messages));
        console.log(contact);
        
        // Réinitialiser le formulaire
        form.reset();
    } 
    else {
        form.classList.add("active")
        validation.innerText = errorMessage;
        // validation.classList.add("validation-error");
        // validation.classList.remove("validation-succes");
    }

  

   
    // Logs pour debug
    console.log(lastName, firstName, email, phoneNumber, dateTime, groupSize, eventType, message, subsribeNews);


    if (validationTimeout) {
        clearTimeout(validationTimeout);
    }

    validationTimeout = setTimeout(function () {
        validation.innerText = "";
        validation.classList.remove("validation-error");
        validation.classList.remove("validation-succes");
        form.classList.remove("active");
    }, 4000);
});


// Bouton pour fermer la fenêtre de message d'information et réinitialiser le timeout

btn.addEventListener("click", function(){
    form.classList.remove("active");
    validation.innerText = "";
    validation.classList.remove("validation-error");
    validation.classList.remove("validation-succes");
    console.log(btn, validationTimeout)
    if (validationTimeout) {
        clearTimeout(validationTimeout);
    }
});


// Affichage de la date d'aujourd'hui dans le formulaire

document.addEventListener("DOMContentLoaded", function() {
  const dateTimeInput = form.querySelector('input[type="datetime-local"]');
  if (dateTimeInput) {
    const now = new Date();
    // Format : YYYY-MM-DDTHH:MM (sans les secondes)
    const pad = n => n.toString().padStart(2, '0');
    const formatted = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
    dateTimeInput.value = formatted;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const messageList = document.getElementById('messageList');
  const messages = JSON.parse(localStorage.getItem('contactMessages')) || [];

  messages.forEach(msg => {
    const li = document.createElement('li');
    li.textContent = `${msg.dateTime} - ${msg.lastName} ${msg.firstName} (${msg.email}) : ${msg.subject}`;
    messageList.appendChild(li);
  });
});