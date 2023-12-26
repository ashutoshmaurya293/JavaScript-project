const icon = document.querySelector(".icon");
const backdrop = document.querySelector(".backdrop");
const mainDrower = document.querySelector(".mainDrower");
// const menu = document.querySelector(".icon");
const hellow = document.querySelector("#hellow");
let Icon = true;
function change() {
    mainDrower.style.display = "none";
    backdrop.style.display = "none";
  }
backdrop.addEventListener("click", change);
icon.addEventListener("click", function () {
  mainDrower.style.display = "block";
  backdrop.style.display = "block";
//   console.log("hello");
  if (Icon) {
    hellow.className = "fa-solid fa-xmark";
    Icon = !Icon;
  } else {
    hellow.className = "fa-solid fa-bars";
    Icon = !Icon
    change()

  }
});
