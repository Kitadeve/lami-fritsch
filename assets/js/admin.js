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

document.getElementById("form-pdj").addEventListener("submit", function (e) {
  e.preventDefault();

  const jour = sanitizeInput(document.getElementById("jour").value) ;
  const entree = sanitizeInput(document.getElementById("entree").value) ;
  const plat = sanitizeInput(document.getElementById("plat").value) ;

  const platsDuJour = JSON.parse(localStorage.getItem("platsDuJour") || "{}");

  platsDuJour[jour] = { entree, plat };

  localStorage.setItem("platsDuJour", JSON.stringify(platsDuJour));
  alert(`Plat du jour pour ${jour} enregistré !`);
  
  this.reset();
});