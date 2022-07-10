const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");

// event listeners
hamburgerButton.addEventListener("click", toggleNav);

// fonction
function toggleNav() {
  // toggler permet de rajouter ou enlever la class
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}
