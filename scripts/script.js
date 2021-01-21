// JavaScript Document
var hamburger = document.querySelector(".hamburger");
var kruisje = document.querySelector(".kruisje");

function openMenu() {
    var deNav = document.querySelector("header nav");
    deNav.classList.toggle("toonmenu");
}

hamburger.addEventListener("click", openMenu);
kruisje.addEventListener("click", openMenu);