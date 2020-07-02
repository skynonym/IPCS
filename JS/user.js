const imgUser = document.querySelector(".img__container");
const tableUser = document.getElementById("userTable");
// const tableUserContainer = document.querySelector(".table__container");

addEventListener("DOMContentLoaded", userQuery);
addEventListener("resize", userQuery);

function userQuery() {
  if (innerWidth < 1062) {
    tableUser.appendChild(imgUser);
  } else {
    tableUser.prepend(imgUser);
  }
}
