const menu = document.querySelector(".menu");
const navItems = document.querySelector(".big-list");
const mobileMenu = document.querySelector(".mobile-nav");
const mobileContainer = document.querySelector(".mobile-nav__container");
const burger = document.querySelector(".burger__container");
const burgerLine = burger.querySelectorAll(".line");

// #Scroll
const topSection = document.getElementById("top");
let prevScroll = window.pageYOffset;
const navBar = document.querySelector("nav");

const navbarObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      window.onscroll = () => {
        navBar.style.top = "0";
        burger.style.top = "15px";
        mobileMenu.style.top = "70px";
      };
    } else {
      window.onscroll = () => {
        let currentScroll = window.pageYOffset;
        if (prevScroll > currentScroll) {
          navBar.style.top = "0";
          burger.style.top = "15px";
          mobileMenu.style.top = "70px";
        } else {
          if (mobileMenu.classList.contains("open")) {
            openNavHandler();
          }
          navBar.style.top = "-70px";
          burger.style.top = "-70px";
          mobileMenu.style.top = "-70px";
        }

        prevScroll = currentScroll;
      };
    }
  });
});

navbarObserver.observe(topSection);

// #EVENTS
addEventListener("DOMContentLoaded", mediaQuery);
addEventListener("resize", mediaQuery);

burger.addEventListener("click", openNavHandler);
window.addEventListener("click", (e) => {
  if (
    !mobileContainer.contains(e.target) &&
    mobileMenu.classList.contains("open")
  ) {
    openNavHandler();
  }
});

for (let i = 0; i < navItems.children.length; i++) {
  const item = navItems.children[i].children[0];
  const nextItem = navItems.children[i].nextElementSibling;
  const prevItem = navItems.children[i].previousElementSibling;

  navItems.children[i].addEventListener("mouseenter", () => {
    item.classList.add("green");

    if (nextItem !== null && prevItem !== null) {
      nextItem.children[0].classList.add("whiteLeft");
      prevItem.children[0].classList.add("whiteRight");
    } else if (nextItem !== null && prevItem == null) {
      nextItem.children[0].classList.add("whiteLeft");
    } else {
      prevItem.children[0].classList.add("whiteRight");
    }
  });

  navItems.children[i].addEventListener("mouseleave", () => {
    if (i === 0) {
      item.classList.remove("green");
      nextItem.children[0].classList.remove("whiteLeft");
    } else if (i == 5) {
      item.classList.remove("green");
      prevItem.children[0].classList.remove("whiteRight");
    } else {
      item.classList.remove("green");
      nextItem.children[0].classList.remove("whiteLeft");
      prevItem.children[0].classList.remove("whiteRight");
    }
  });
}

// #FUNCTIONS

function mediaQuery() {
  const logoTitle = document.querySelector(".logo h3");

  if (innerWidth < 1360) {
    logoTitle.innerHTML = `ศูนย์พัฒนานโยบาย<br>แห่งชาติด้านสารเคมี`;
  } else {
    logoTitle.innerHTML = `ศูนย์พัฒนานโยบายแห่งชาติด้านสารเคมี`;
  }

  if (window.innerWidth > 1200 && mobileMenu.classList.contains("open")) {
    openNavHandler();
  } else {
    return;
  }
}

function openNavHandler() {
  burgerLine[1].classList.toggle("bye");
  burgerLine[0].classList.toggle("tilt-right");
  burgerLine[2].classList.toggle("tilt-left");

  mobileMenu.classList.toggle("open");
}
