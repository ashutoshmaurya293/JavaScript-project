const Passwordbox = document.getElementById("Password");
const length = 12;
const upp = "QWERTYUIOPASDFGHJKLZXCVBNM";
const loo = "qwertyuiopasdfghjklzxcvbnm";
const number = "0123456789";
// const button = document.getElementById("b")
const symble = "!@#$%^&*()_+~";
const allchars = upp + loo + number+ symble;
function CreatePassword() {
  let password = "";
  while (length > password.length) {
    password += allchars[Math.floor(Math.random() * allchars.length)];
  }
Passwordbox.value = password
console.log("helow word");
}
function copy(){
    Passwordbox.select();
    document.execCommand("copy");
    alert("message copied")
}