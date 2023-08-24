const button = document.querySelectorAll("button");
const body = document.querySelector("body");
button.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "black") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "orange") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "darkmagenta") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "aliceblue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "aqua") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "deepskyblue") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
