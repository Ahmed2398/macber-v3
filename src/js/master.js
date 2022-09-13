// FAV ICON
const faviconEl = document.querySelector('link[rel="icon"]')

// watch for changes 🕵️
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
mediaQuery.addEventListener('change', themeChange)

// listener 👂
function themeChange(event) {
  if (event.matches) {
    faviconEl.setAttribute('href', 'favicon-dark.png')
  } else {
    faviconEl.setAttribute('href', 'favicon-light.png')
  }
}


// Loadind
// var Load = document.getElementById("Loading");
// var logoLoad = document.getElementById("logo-load");
// function loadfun() {
//   Load.style.display = "none";
// }




// Home Header  Nav-link Target
document.querySelector(".nav-target").addEventListener("lick", function (e) {
  e.preventDefault();

  // MAtching strategy
  if (e.target.classList.contains(".nav-target")) {
    const id = e.target.getAttribute("href");
      document.querySelectorAll(id).scrollIntoView({ behavior: "smooth"});
      
  }
});

// Scroll up BTN
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// END

   