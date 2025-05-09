// https://developer.mozilla.org/fr/docs/Web/API/IntersectionObserver 

// window.addEventListener("scroll", function (){
//     const scrollPos = window.scrollY; 
//     console.log(scrollPos); 
// })

// // déclarer un variable pour sélectionner la bonne classe css
// const plats = document.querySelectorAll('.card-plats, .card-jour, .plats-du-jour h2, .plats-du-jour span');

// // Creation de l'Intersction Observer
// const observer = new IntersectionObserver(function (entries, observer) {
//   entries.forEach(entry => {
//     if (window.innerWidth < 1024) {
//         if (entry.isIntersecting) {
//             // Ajouter de la classe css visible pour afficher les éléments
//             entry.target.classList.add('visible');
//             // console.log(entries)
//             // console.log(plats);
//         }
//         else {
//         // Retirer la classe css visible
//         entry.target.classList.remove('visible');
//         }  
//     }
//   });
// }, {
//   threshold: 0.1 // Déclcencher lorsque 10% de l'élément est visible
// });

// // Observation des éléments plats
// plats.forEach(plat => observer.observe(plat));



// Select the elements to observe
const plats = document.querySelectorAll('.card-plats, .card-jour, .plats-du-jour h2, .plats-du-jour span');

// Function to initialize the Intersection Observer
function initializeObserver() {
  // Remove the 'visible' class from all elements initially
  plats.forEach(plat => plat.classList.remove('visible'));

  // Create the Intersection Observer
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
      if (window.innerWidth < 1024) {
        if (entry.isIntersecting) {
          // Add the 'visible' class to show the element
          entry.target.classList.add('visible');
        } else {
          // Remove the 'visible' class to hide the element
          entry.target.classList.remove('visible');
        }
      } else {
        // Ensure elements are visible on larger screens
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% of the element is visible
  });

  // Observe each element
  plats.forEach(plat => observer.observe(plat));
}

// Initialize the observer on page load
initializeObserver();

// Reinitialize the observer on window resize
window.addEventListener('resize', () => {
  initializeObserver();
});

