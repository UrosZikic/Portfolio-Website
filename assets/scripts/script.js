var openMenu = document.querySelector("#nav-menu");
var closeMenu = document.querySelector(".closeMenu-icon");
var navContainer = document.querySelector(".navigation-link-container");
var navLink = document.querySelectorAll(".navigation-link");
var navLinkLine = document.querySelectorAll(".navLink-line");

var projects = document.querySelectorAll(".flip-card");
/////////////////////////////////////////
openMenu.onclick = () => {
  navContainer.style.transform = "translateY(0%)";
};
closeMenu.onclick = () => {
  navContainer.style.transform = "translateY(-100%)";
};
// nav front end tag manipulation
