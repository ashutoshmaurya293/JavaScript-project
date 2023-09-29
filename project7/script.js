const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function playama() {
  let video = document.querySelector("#video");
  let playbtn = document.querySelector("#play");
  video.addEventListener("mouseenter", function () {
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  video.addEventListener("mouseleave", function () {
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });
  video.addEventListener("mousemove", function (e) {
    gsap.to(playbtn, {
      left: e.x - 50,
      top: e.y - 80,
    });
  });
}
playama();

function lodfirst() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from("#page1 #video", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.9,
  });
}
lodfirst();
document.addEventListener("mousemove", function (dets) {
  gsap.to("#cursor", {
    left: dets.x,
    top: dets.y,
  });
});
function cursor() {
  document.querySelectorAll(".child").forEach(function (el) {
    el.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(1)",
      });
    });
    el.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(0)",
      });
    });
  });
}
cursor();
