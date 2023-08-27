let text = document.getElementById("text");
let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  document.getElementById("end-date").innerText = text.value;

  document.getElementById("text").value = "";
});

const inputs = document.querySelectorAll("input");

function clock() {
  const end = new Date(document.getElementById("end-date").innerText);
  const now = new Date();
  const diff = (end - now) / 1000;

  if (diff < 0) return;

  // convert into days;
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
}

clock();

setInterval(() => {
  clock();
}, 1000);
