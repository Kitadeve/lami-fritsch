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
  });