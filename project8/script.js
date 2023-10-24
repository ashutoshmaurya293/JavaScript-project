function circle(event) {
  const container = document.getElementById("container");
  const circle = document.createElement("div");

  circle.className = "circle";
  circle.style.left = event.clientX - 50 + "px";
  circle.style.top = event.clientY - 50 + "px";
  container.appendChild(circle);
}
