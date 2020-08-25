const logos = document.querySelector(".logo__container");
const rightContainer = document.querySelector(".right__container");
const leftContainer = document.querySelector(".left__container");

addEventListener("DOMContentLoaded", mediaQuery);
addEventListener("resize", mediaQuery);

function mediaQuery() {
  if (innerWidth < 1330) {
    rightContainer.appendChild(logos);
  } else {
    leftContainer.appendChild(logos);
  }
}
