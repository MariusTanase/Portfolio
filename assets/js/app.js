let menuBar = document.querySelector(".burger__menu");
let getLines = document.querySelectorAll(".burger__menu-line");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle(".active");

  // Check if menubar doesn't have class .active
  // to restore CSS of the burger menu to default
  if (!menuBar.classList.contains(".active")) {
    //Reverse the changes on line 1
    getLines[1].style.opacity = "1";
    getLines[1].style.transform = "none";

    //First line and third restore transform origin
    getLines[0].style.transform = "none";
    getLines[2].style.transform = "none";
  } else {
    //   Hide the middle line and giving an animation
    getLines[1].style.opacity = "0";
    getLines[1].style.transform = "rotate(0deg) scale(0.2, 0.2)";

    getLines[0].style.transform = "rotate(45deg) translate(-2px, -1px)";
    getLines[2].style.transform = "rotate(-45deg) translate(-2px, -1px)";
  }
});
