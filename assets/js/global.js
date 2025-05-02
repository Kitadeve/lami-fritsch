// // appel du header

// function loadHeader() {
//   const headerPlaceholder = document.createElement("div");
//   headerPlaceholder.id = "header-placeholder";
//   document.body.insertBefore(headerPlaceholder, document.body.firstChild);

//   fetch("./assets/partials/header.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.getElementById("header-placeholder").innerHTML = data;
//     })
//     .catch((error) => console.error("Erreur lors du chargement du header :", error));
// }

// window.addEventListener("DOMContentLoaded", loadHeader);

// // appel du footer

// function loadFooter() {
//   const footerPlaceholder = document.createElement("div");
//   footerPlaceholder.id = "footer-placeholder";
//   document.body.appendChild(footerPlaceholder);

//   fetch('./assets/partials/footer.html')
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById('footer-placeholder').innerHTML = data;

//       // Réinitialisez les événements ou animations ici
//       initializePastilleEvents();
//     })
//     .catch(error => console.error("Erreur lors du chargement du footer :", error));
// }

// function initializePastilleEvents() {
//   const pastilles = document.querySelectorAll('.pastille');
//   pastilles.forEach(pastille => {
//     pastille.addEventListener('click', () => {
//       console.log('Pastille clicked!');
//     });
//   });
// }

// function initializeFooterScripts() {
//   // Exemple : Ajouter des événements ou vérifier les styles des pastilles
//   const socialLinks = document.querySelectorAll(".pastille a");
//   socialLinks.forEach((link) => {
//     link.addEventListener("mouseover", () => {
//       console.log("Lien survolé :", link.href);
//     });
//   });
// }

window.addEventListener("DOMContentLoaded", loadFooter);


function updateHeaderHeight() {
    const header = document.querySelector("header");
    const root = document.documentElement;

    // Set the header height as a CSS variable
    root.style.setProperty("--header-height", `${header.offsetHeight}px`);
}

function menuMobile () {
    const btn = document.querySelector(".burger");
    const header = document.querySelector("header");
    const links = document.querySelectorAll(".burger-overlap a");
    const body = document.body;
  
    btn.addEventListener("click", () => {
        header.classList.toggle("show-overlap");
        body.classList.toggle("no-scroll");
      });

      links.forEach(link => {
        link.addEventListener("click", () =>{
          header.classList.remove("show-overlap");
          body.classList.remove("no-scroll");
      });
    })
   
    
  }

    window.addEventListener("load", updateHeaderHeight);
    window.addEventListener("resize", updateHeaderHeight);

  menuMobile();

  const burger = document.getElementById("burger");
  burger.addEventListener("click", () => {
    const expanded = burger.getAttribute("aria-expanded") === "true";
    burger.setAttribute("aria-expanded", !expanded);
  });

  // fonction pour gérer dynamiquement la hauteur de l'overlap
  
  function updateBurgerHeight() {
    const headerHeight = document.querySelector("header").offsetHeight;
    const burgerOverlap = document.querySelector(".burger-overlap");
  
    // Calculer la hauteur restante pour le menu burger
    const burgerHeight = window.innerHeight - headerHeight;
    burgerOverlap.style.height = `${burgerHeight}px`;
  }
  
  // Mettre à jour la hauteur au chargement et au redimensionnement
  window.addEventListener("load", updateBurgerHeight);
  window.addEventListener("resize", updateBurgerHeight);