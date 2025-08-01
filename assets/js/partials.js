// // Chargement du header
function loadHeader() {
  if (document.querySelector("header")) {
    console.warn("Header already exists. Skipping dynamic load.");
    return;
  }
  const header = document.createElement("header");
  document.body.insertBefore(header, document.body.firstChild);

  fetch("./assets/partials/header.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("header").innerHTML = data;
 
      const img = header.querySelector("img")
      
        if (img.complete) {
          menuMobile();
          updateHeaderHeight();
          updateBurgerHeight();
        } else {
          img.addEventListener("load", () => {
            menuMobile();
            setTimeout(() => { updateHeaderHeight(); }, 100);
            updateBurgerHeight();
          });
          img.addEventListener("error", () => {
            menuMobile();
            updateHeaderHeight();
            updateBurgerHeight();
          });
        }

    })
    .catch((error) => console.error("Erreur lors du chargement du header :", error));
}

// Chargement du footer
function loadFooter() {
  const footer = document.createElement("footer");
  document.body.appendChild(footer);

  fetch('./assets/partials/footer.html')
    .then(response => response.text())
    .then(data => {
      footer.innerHTML = data;
    })
    .catch(error => console.error("Erreur lors du chargement du footer :", error));
}

window.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    loadFooter();
    }
);

