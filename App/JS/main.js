const hamburgerMenu = document.querySelector(".hamburgerMenu");
const hamburger = document.querySelectorAll(".hamburger");
const navMenu = document.querySelector(".navMenu");


/* ============ =============== */

hamburgerMenu.addEventListener("click",changBurgerShape);

/* ============ =============== */



function changBurgerShape(){
  hamburgerMenu.classList.toggle("hamburgerMenuChange");
  hamburger.forEach(function(burger){
    burger.classList.toggle("hamburgerChange")
  })
  navMenu.classList.toggle("navMenuChange");
}