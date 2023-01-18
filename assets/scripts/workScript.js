// project 1
var cardOne = document.querySelector(".card-one");
var linkTrigger = document.querySelector(".project--one-trigger");
var exitTrigger = document.querySelector(".exit-trigger");
var projectOne = document.querySelector(".project--num-one");
// project2
var cardTwo = document.querySelector(".card-two");
var linkTriggerTwo = document.querySelector(".project--two-trigger");
var exitTriggerTwo = document.querySelector(".exit--trigger-two");
var projectTwo = document.querySelector(".project--num-two");
// project3
var cardThree = document.querySelector(".card-three");
var linkTriggerThree = document.querySelector(".project--three-trigger");
var exitTriggerThree = document.querySelector(".exit--trigger-three");
var projectThree = document.querySelector(".project--num-three");
// project4
var cardFour = document.querySelector(".card-four");
var linkTriggerFour = document.querySelector(".project--four-trigger");
var exitTriggerFour = document.querySelector(".exit--trigger-four");
var projectFour = document.querySelector(".project--num-four");

// project1
cardOne.onclick = () => {
  projectOne.style.transform = "translate(0%)";
  cardOne.style.transform = "translate(-650%)";
};
linkTrigger.onclick = () => {
  projectOne.style.transform = "translate(0%)";
  cardOne.style.transform = "translate(-650%)";
};
exitTrigger.onclick = () => {
  projectOne.style.transform = "translateX(-650%)";
  cardOne.style.transform = "translate(0%)";
};

// project2
cardTwo.onclick = () => {
  projectTwo.style.transform = "translate(0%)";
  cardTwo.style.transform = "translate(-650%)";
};
linkTriggerTwo.onclick = () => {
  projectTwo.style.transform = "translate(0%)";
  cardTwo.style.transform = "translate(-650%)";
};
exitTriggerTwo.onclick = () => {
  projectTwo.style.transform = "translateX(-650%)";
  cardTwo.style.transform = "translate(0%)";
};

// project3
cardThree.onclick = () => {
  projectThree.style.transform = "translate(0%)";
  cardThree.style.transform = "translate(-650%)";
};
linkTriggerThree.onclick = () => {
  projectThree.style.transform = "translate(0%)";
  cardThree.style.transform = "translate(-650%)";
};
exitTriggerThree.onclick = () => {
  projectThree.style.transform = "translateX(-650%)";
  cardThree.style.transform = "translate(0%)";
};

// project4
cardFour.onclick = () => {
  projectFour.style.transform = "translate(0%)";
  cardFour.style.transform = "translate(-650%)";
};
linkTriggerFour.onclick = () => {
  projectFour.style.transform = "translate(0%)";
  cardFour.style.transform = "translate(-650%)";
};
exitTriggerFour.onclick = () => {
  projectFour.style.transform = "translateX(-650%)";
  cardFour.style.transform = "translate(0%)";
};

var workHome = document.querySelector(".work-home");
var navContainer = document.querySelector(".navigation-link-container");
workHome.onclick = () => {
  navContainer.style.transform = "translateY(-100%)";
};
