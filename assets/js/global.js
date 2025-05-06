// Chargement du header
function loadHeader() {
  const headerPlaceholder = document.createElement("div");
  headerPlaceholder.id = "header-placeholder";
  document.body.insertBefore(headerPlaceholder, document.body.firstChild);

  fetch("./assets/partials/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    })
    .catch((error) => console.error("Erreur lors du chargement du header :", error));
}

// // Chargement du footer
// function loadFooter() {
//   const footerPlaceholder = document.createElement("div");
//   footerPlaceholder.id = "footer-placeholder";
//   document.body.appendChild(footerPlaceholder);

//   fetch('./assets/partials/footer.html')
//     .then(response => response.text())
//     .then(data => {
//       document.getElementById('footer-placeholder').innerHTML = data;
//       initializePastilleEvents();
//     })
//     .catch(error => console.error("Erreur lors du chargement du footer :", error));
// }


// Gestion du menu mobile
function menuMobile() {
  const btn = document.querySelector(".burger");
  const header = document.querySelector("header");
  const links = document.querySelectorAll(".burger-overlap a");
  const body = document.body;

  btn.addEventListener("click", () => {
    header.classList.toggle("show-overlap");
    body.classList.toggle("no-scroll");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      header.classList.remove("show-overlap");
      body.classList.remove("no-scroll");
    });
  });
}

// Mise à jour de la hauteur du menu burger
function updateBurgerHeight() {
  const headerHeight = document.querySelector("header").offsetHeight;
  const burgerOverlap = document.querySelector(".burger-overlap");
  const burgerHeight = window.innerHeight - headerHeight;
  burgerOverlap.style.height = `${burgerHeight}px`;
}

// Mise à jour de la hauteur du header
function updateHeaderHeight() {
  const header = document.querySelector("header");
  const root = document.documentElement;
  root.style.setProperty("--header-height", `${header.offsetHeight}px`);
}

// Écouteurs d'événements
window.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  // loadFooter();
  menuMobile();
});
window.addEventListener("load", () => {
  updateHeaderHeight();
  updateBurgerHeight();
});
window.addEventListener("resize", () => {
  updateHeaderHeight();
  updateBurgerHeight();
});