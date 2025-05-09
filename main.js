var audio = document.getElementById("audioPlayer"),
    loader = document.getElementById("preloader");

function settingtoggle() {
  document.getElementById("setting-container").classList.toggle("settingactivate");
  document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
  document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

function playpause() {
  if (!document.getElementById("switchforsound").checked) {
    audio.pause();
  } else {
    audio.play();
  }
}

function visualmode() {
  document.body.classList.toggle("light-mode");
  document.querySelectorAll(".needtobeinvert").forEach(function(el) {
    el.classList.toggle("invertapplied");
  });
}

window.addEventListener("load", function() {
  loader.style.display = "none";
  document.querySelector(".hey").classList.add("popup");
});

var mobileTogglemenu = document.getElementById("mobiletogglemenu");

// very simple hamburger toggle
function hamburgerMenu() {
  mobileTogglemenu.classList.toggle("open");
}

// hide menu when a link is clicked
function hidemenubyli() {
  mobileTogglemenu.classList.remove("open");
}

const sections = document.querySelectorAll("section"),
      navLi    = document.querySelectorAll(".navbar-tabs-ul li"),
      mobileLi = document.querySelectorAll(".mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (pageYOffset >= sec.offsetTop - 200) {
      current = sec.getAttribute("id");
    }
  });
  mobileLi.forEach(li => li.classList.toggle("activeThismobiletab", li.classList.contains(current)));
  navLi   .forEach(li => li.classList.toggle("activeThistab",       li.classList.contains(current)));
});

console.log(
  "%c Designed and Developed by Vinod Jangid ",
  "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white; font-weight:900; font-size:1rem; padding:20px;"
);

var mybutton = document.getElementById("backtotopbutton");
function scrollFunction() {
  mybutton.style.display =
    (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400)
      ? "block" : "none";
}
function scrolltoTopfunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.onscroll = scrollFunction;

document.addEventListener("contextmenu", function(e) {
  if (e.target.nodeName === "IMG") e.preventDefault();
}, false);

// footer-eye pupils follow cursor
let Pupils      = Array.from(document.getElementsByClassName("footer-pupil")),
    pupilStart  = -10,
    pupilRangeX = 20,
    pupilRangeY = 15,
    mouseXRange = window.innerWidth,
    mouseYRange = window.innerHeight;

function mouseMove(e) {
  let fx = e.clientX / mouseXRange,
      fy = e.clientY / mouseYRange,
      tx = pupilStart + fx * pupilRangeX,
      ty = pupilStart + fy * pupilRangeY;
  Pupils.forEach(p => p.style.transform = `translate(${tx}px, ${ty}px)`);
}

function windowResize() {
  mouseXRange = window.innerWidth;
  mouseYRange = window.innerHeight;
}

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);
