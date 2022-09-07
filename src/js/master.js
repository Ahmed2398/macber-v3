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
var Load = document.getElementById("Loading");
var logoLoad = document.getElementById("logo-load");
function loadfun() {
  Load.style.display = "none";
}




// Home Header  Nav-link Target
document.querySelector(".nav-target").addEventListener("click", function (e) {
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

// tab Game content 

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none"
  }
    // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
    // Show the specific tab content
  document.getElementById(pageName).style.display = "block";
// Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}
// Get the element with id="defaultOpen" and click on it

document.getElementById("defaultOpen").click();




