const motDePasse = prompt("Mot de passe pour accéder à l'administration :");
  if (motDePasse !== "1234") {
    alert("Mot de passe incorrect !");
    window.location.href = "index.html"; // ou une autre page
  }

function sanitizeInput(input) {
  return input.replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/["']/g, "")
              .replace(/&/g, "&amp;");
}



window.addEventListener("DOMContentLoaded", function () {
  const formulairePdj = document.querySelector("form")
  const resetLocalStorage = document.getElementById("reset")
  

  formulairePdj.addEventListener("submit", function (e) {
    e.preventDefault();

    const jour = sanitizeInput(document.getElementById("jour").value) ;
    const entree = sanitizeInput(document.getElementById("entree").value) ;
    const plat = sanitizeInput(document.getElementById("plat").value) ;
  
    const platsDuJour = JSON.parse(localStorage.getItem("platsDuJour") || "{}");

    platsDuJour[jour] = { entree, plat };

    localStorage.setItem("platsDuJour", JSON.stringify(platsDuJour));
    alert(`Plat du jour pour ${jour} enregistré !`);
    this.reset();
    console.log(platsDuJour);

  });
  
  resetLocalStorage.addEventListener("click", function() {
    localStorage.removeItem("platsDuJour");
  });
})


const reload = document.querySelector("#reload");

const API_KEY = "live_PeZJ564McjPA1Z5n6JJ62FmBu8ByoVb5LnYqOlblTbLZZXxnKQYvxNmJs7MC6JBG";

function getCat() {
  fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", {
    headers: {
      "x-api-key": API_KEY
    }
  })
    .then(response => response.json())
    .then(result => {
      const chats = document.querySelector(".chats");
      chats.innerHTML = "";
      const catData = result[0];
      const img = document.createElement("img");
      img.src = catData.url;
      img.alt = "Photo de chat aléatoire";

      if (catData.breeds && catData.breeds.length > 0) {
        const breedInfo = catData.breeds[0];
        const breedName = document.createElement("h3");
        breedName.textContent = `Race : ${breedInfo.name}`;

        const temperament = document.createElement("p");
        temperament.textContent = `Tempérament : ${breedInfo.temperament}`;

        chats.appendChild(img);
        chats.appendChild(breedName);
        chats.appendChild(temperament);
      } else {
        chats.appendChild(img);
        const noInfo = document.createElement("p");
        noInfo.textContent = "Aucune information sur la race.";
        chats.appendChild(noInfo);
      }
    })
    .catch(error => console.log('error', error));
}

window.addEventListener("DOMContentLoaded", getCat);
reload.addEventListener("click", getCat);

const platsDuJour = JSON.parse(localStorage.getItem("platsDuJour"));
console.log(platsDuJour);
