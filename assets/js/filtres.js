function filters() {
    const platsSection = document.querySelector(".plats-filtre");
    const tartesSection = document.querySelector(".tartes-flambees");
    const dessertsSection = document.querySelector(".desserts");
    const filterTitles = document.querySelectorAll(".filtre button");
    const platsBtn = document.querySelector(".filtre-plats");
    const tartesFlambeesBtn = document.querySelector(".filtre-tartes-flambees");
    const dessertesBtn = document.querySelector(".filtre-desserts");




    // Fonction pour afficher la section sélectionnée et masquer les autres
    function showSection(sectionToShow, activeFilterClass) {
      // Masquer toutes les sections
      platsSection.classList.add("hide");
      tartesSection.classList.add("hide");
      dessertsSection.classList.add("hide");

      // Afficher la section sélectionnée
      sectionToShow.classList.remove("hide");

      // Retirer la classe active de tous les titres de filtre
      filterTitles.forEach(title => title.classList.remove("active"));

      // Ajouter la classe active au titre de filtre cliqué
      const activeTitle = document.querySelector(`.${activeFilterClass}`);
      if (activeTitle) {
        activeTitle.classList.add("active");
      }
    }

    // Vérifie si la largeur de l'écran est supérieure ou égale à 1024px
    if (window.innerWidth >= 1024) {
      //Définir les boutons en variables
      // Ajoute les écouteurs de clic aux titres de filtre
      platsBtn.addEventListener("click", () => {
        showSection(platsSection, "filtre-plats");
      });
      tartesFlambeesBtn.addEventListener("click", () => {
          showSection(tartesSection, "filtre-tartes-flambees");
        });
      dessertesBtn.addEventListener("click", () => {
          showSection(dessertsSection, "filtre-desserts");
        });
      // Affiche la section des plats par défaut
      showSection(platsSection, "filtre-plats");

    } else {
      // Sur mobile, toutes les sections sont visibles
      platsSection.classList.remove("hide");
      tartesSection.classList.remove("hide");
      dessertsSection.classList.remove("hide");
    }
  };

  document.addEventListener("DOMContentLoaded", filters)
  window.addEventListener("resize", filters)
