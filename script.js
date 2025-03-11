let mainMenu = document.querySelector(".nav__links");
let closeMenu = document.querySelector(".close__menu");
let openMenu = document.querySelector(".open__menu");
let openMenuLogo = document.querySelector("#logo_2");

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0px";
  openMenuLogo.classList.remove("hidden");
}

function close() {
  mainMenu.style.top = "-120%";
  openMenuLogo.classList.add("hidden");
}

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);
mainMenu.addEventListener("click", close);

particlesJS.load("particles-js", "particles.json", function () {
  console.log("particles loaded...");
});

const navbar = document.querySelector("header");
const sectionHero = document.querySelector(".hero");

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

heroObserver.observe(sectionHero);
