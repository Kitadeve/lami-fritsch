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

 