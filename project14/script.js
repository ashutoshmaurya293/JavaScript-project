const icon = document.querySelector(".icon");
const backdrop = document.querySelector(".backdrop");
const mainDrower = document.querySelector(".mainDrower");
// const menu = document.querySelector(".icon");
const hellow = document.querySelector("#hellow");
let Icon = true;

function change() {
  if (Icon) {
    hellow.className = "fa-solid fa-xmark";
    Icon = !Icon;
    mainDrower.style.visibility = "visible";
    backdrop.style.visibility = "visible";
  } else {
    mainDrower.style.visibility = "hidden";
    backdrop.style.visibility = "hidden";
    hellow.className = "fa-solid fa-bars";
    Icon = !Icon;
  }
}
icon.addEventListener("click", change);
backdrop.addEventListener("click", change);
