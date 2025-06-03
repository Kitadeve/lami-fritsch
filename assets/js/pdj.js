  window.addEventListener("DOMContentLoaded", () => {
    const platsDuJour = JSON.parse(localStorage.getItem("platsDuJour") || "{}");
    const cards = document.querySelectorAll(".card-jour");

    /* on parcourt chaque card-jour (il y en a trois dans ce cas), 
    pour chacune d'entre elle on va chercher le jour, en ciblant le text content
    de l'élément h3 de classe jour*/
    cards.forEach(card => {
      const jour = card.querySelector("h3.jour").textContent.trim();
      /* si le le jour existe dans l'objet platDuJour, 
      stocké dans le localStorage, on remplace le contenu de la 
      frame (entrée + trait + plat) par le html écrit ici et les valeurs
      récupérée dans le localStorage.  */
      if (platsDuJour[jour]) {

        // //destructuration d'objet, créé 2 variables, en une seule ligne. J'ai préféré l'écrire en détails en dessous carr mieux maitrisé
        // const { entree, plat } = platsDuJour[jour];

        const entree = platsDuJour[jour].entree; 
        const plat = platsDuJour[jour].plat;
        const frame = card.querySelector(".frame");        
        frame.innerHTML = `
          <div class="entree">${entree}</div>
          <div class="trait"></div>
          <p class="plat">${plat}</p>
        `;
      }
    });
  });

// version en fetch, pour chercher le menu écrit en dur dans le json et simuler la recherche dans une bdd//

// fetch('./assets/json/menus-jour.json')
//   .then(response => response.json())
//   .then(data => {
//     afficherPlatsDuJour(data.platsDuJour);
//   });


// function afficherPlatsDuJour(plats) {
//   const container = document.querySelector('.cards-pdj');
//   container.innerHTML = ''; // Vide les anciens plats

//   plats.forEach(plat => {
//     container.innerHTML += `
//       <div class="card-jour">
//         <h3 class="jour">${plat.jour}</h3>
//         <div class="frame">
//           <div class="entree">${plat.entree}</div>
//           <div class="trait"></div>
//           <p class="plat">${plat.plat}</p>
//         </div>
//       </div>
//     `;
//   });
// }

