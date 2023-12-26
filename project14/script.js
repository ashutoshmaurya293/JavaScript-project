const icon = document.querySelector(".icon");
const backdrop = document.querySelector(".backdrop");
const mainDrower = document.querySelector(".mainDrower");

backdrop.addEventListener("click", function(){
    mainDrower.style.display = "none"
    backdrop.style.display = "none"
})
icon.addEventListener("click", function(){
    mainDrower.style.display = "block"
    backdrop.style.display = "block"
})