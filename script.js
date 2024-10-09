document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior:"smooth"
    });
  });
});

// Hämta hamburger och navbar-elementen
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");

// Lägg till en click event listener på hamburgerikonen
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Hämta alla länkar i menyn
const navLinks = document.querySelectorAll(".navbar ul li a");
console.log(navLinks);
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});

let navCloseBtn = document.querySelector(".close-btn");
navCloseBtn.addEventListener("click", () => {
navbar.classList.remove("active");
});

 // Fade-funktionen definieras först
function fade() {
  
  setTimeout(() => {
    // Hämta h1-elementet
    let h1 = document.querySelector("h1");
    h1.classList.add("active");
    h1.innerHTML = "Elise Philipsson"; 

    // Hämta h2-elementet
    let h2 = document.querySelector("h2");
    h2.classList.add("active"); 
    h2.innerHTML = "frontend developer"; 

    // Hämta h4-elementet
    let h4 = document.querySelector("h4");
    h4.classList.add("active");
    h4.innerHTML = " & Registered nurse"; 
  }, 1000); 

  
  setTimeout(() => {
    let btnBox = document.querySelector(".btn-box");
    btnBox.classList.add("active");
  }, 2000); 
}

fade();

    document.getElementById("defaultOpen").click();

    function openTab(evt, tabName) {
      // Declare all variables
      var i, tabcontent, tablinks;
    
      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
    
      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
    
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.className += " active";
    }


function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');  // Fadas in när elementet är synligt
    } else {
      entry.target.classList.remove('active');  // Fadas ut när elementet är utanför viewport
    }
  });
}

// Skapa en ny IntersectionObserver-instans
let options = {
  threshold: 0.1 // 10% av elementet måste vara synligt innan callback-funktionen körs
};

let observer = new IntersectionObserver(handleIntersection, options);

// Observera alla element med klassen .fade-in
document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});

