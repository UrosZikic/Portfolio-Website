var home = document.querySelector(".home-link");
var navContainer = document.querySelector(".navigation-link-container");
var headerInfo = document.querySelector(".first--header-info");
home.onclick = () => {
  navContainer.style.transform = "translateY(-100%)";
};

var projectsLinkOpen = document.querySelector(".open-work");
var projectsLinkClose = document.querySelector(".close-work");
projectsLinkOpen.onclick = () => {
  //   projects.forEach((item) => (item.style.opacity = "1"));
  projectsLinkOpen.style.display = "none";
  projectsLinkClose.style.display = "inline-block";
  projects.forEach((item) => (item.style.transform = "translate(0%)"));
  headerInfo.style.transform = "translateY(0%)";
  // if (window.screen.width <= 768) {
  //   var body = document.querySelector("body");
  //   body.style.overflow = "scroll";
  // } else {
  //   body.style.overflow = "hidden";
  // }
};

var count = 0;
projectsLinkClose.onclick = () => {
  count += 1;
  projectsLinkClose.style.display = "none";
  projectsLinkOpen.style.display = "inline-block";

  projects.forEach((item) => (item.style.transform = "translateX(-650%)"));
   headerInfo.style.transform = "translateY(70%)";

  // if (window.screen.width <= 768) {
  //   var body = document.querySelector("body");
  //   body.style.overflow = "hidden";
  // }
};
