document.addEventListener("DOMContentLoaded", () => {
    const platsSection = document.querySelector(".plats-hidden");
    const tartesSection = document.querySelector(".tartes-flambees");
    const dessertsSection = document.querySelector(".desserts");
    const filterTitles = document.querySelectorAll(".filtre h3");
  
    // Function to show the selected section and hide others
    function showSection(sectionToShow, activeFilterClass) {
      // Hide all sections
      platsSection.style.display = "none";
      tartesSection.style.display = "none";
      dessertsSection.style.display = "none";
  
      // Show the selected section
      sectionToShow.style.display = "flex";
  
      // Remove active class from all filter titles
      filterTitles.forEach(title => title.classList.remove("active"));
  
      // Add active class to the clicked filter title
      const activeTitle = document.querySelector(`.${activeFilterClass}`);
      if (activeTitle) {
        activeTitle.classList.add("active");
      }
    }
  
    // Check if the screen width is greater than or equal to 768px
    if (window.innerWidth >= 1024) {
      // Add click event listeners to filter titles
      document.querySelector(".filtre-plats").addEventListener("click", () => {
        showSection(platsSection, "filtre-plats");
      });
    
      document
        .querySelector(".filtre-tartes-flambees")
        .addEventListener("click", () => {
          showSection(tartesSection, "filtre-tartes-flambees");
        });
    
      document.querySelector(".filtre-desserts").addEventListener("click", () => {
        showSection(dessertsSection, "filtre-desserts");
      });
    
      // Initialize by showing the plats section
      showSection(platsSection, "filtre-plats");
    } else {
      // On mobile, ensure all sections are visible
      platsSection.style.display = "block";
      tartesSection.style.display = "block";
      dessertsSection.style.display = "block";
    }
  });

  document.querySelectorAll(".filtre h3").forEach((element) => {
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault(); // Empêche le défilement de la page si "Espace" est pressé
        element.click(); // Simule un clic sur l'élément
      }
    });
  
    element.addEventListener("click", () => {
      // Exemple d'action à effectuer lors du clic ou de l'appui sur Entrée/Espace
      console.log(`${element.textContent} a été sélectionné`);
    });
  });