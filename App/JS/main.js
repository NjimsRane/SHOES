const hamburgerMenu = document.querySelector(".hamburgerMenu");
const hamburger = document.querySelectorAll(".hamburger");
const navMenu = document.querySelector(".navMenu");
const wrapper = document.querySelector(".wrapper");


/* ============ =============== */

hamburgerMenu.addEventListener("click",changBurgerShape);

/* ============ =============== */



function changBurgerShape(){
  hamburgerMenu.classList.toggle("hamburgerMenuChange");
  hamburger.forEach(function(burger){
    burger.classList.toggle("hamburgerChange")
  })
  navMenu.classList.toggle("navMenuChange");
  wrapper.classList.toggle("wrapperChange")
}