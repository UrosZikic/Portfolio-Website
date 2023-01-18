var homeLink = document.querySelector(".about-home");
var navContainer = document.querySelector(".navigation-link-container");
homeLink.onclick = () => {
  navContainer.style.transform = "translateY(-100%)";
};
