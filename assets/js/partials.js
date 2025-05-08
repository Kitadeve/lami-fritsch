// // Chargement du header
function loadHeader() {
  if (document.querySelector("header")) {
    console.warn("Header already exists. Skipping dynamic load.");
    return;
  }
  const headerPlaceholder = document.createElement("div");
  headerPlaceholder.id = "header-placeholder";
  document.body.insertBefore(headerPlaceholder, document.body.firstChild);

  fetch("./assets/partials/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;

      // Re-initialize header-related scripts after the header is loaded
      menuMobile(); // Initialize the burger menu
      updateHeaderHeight(); // Update the header height
      updateBurgerHeight(); // Update the burger height
    })
    .catch((error) => console.error("Erreur lors du chargement du header :", error));
}

// Chargement du footer
function loadFooter() {
  const footerPlaceholder = document.createElement("div");
  footerPlaceholder.id = "footer-placeholder";
  document.body.appendChild(footerPlaceholder);

  fetch('./assets/partials/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error("Erreur lors du chargement du footer :", error));
}

window.addEventListener("DOMContentLoaded", () => {
    loadHeader();
    loadFooter();
    }
);

