let mainMenu = document.querySelector(".nav__links");
console.log("mainMenu: ", mainMenu);
let closeMenu = document.querySelector(".close__menu");
console.log("closeMenu: ", closeMenu);
let openMenu = document.querySelector(".open__menu");
console.log("openMenu: ", openMenu);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0px";
}

function close() {
  mainMenu.style.top = "-100%";
}

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);
mainMenu.addEventListener("click", close);

particlesJS.load("particles-js", "particles.json", function () {
  console.log("particles loaded...");
});

// sticky navbar
const navbar = document.querySelector("header");
const sectionHero = document.querySelector(".hero");

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

heroObserver.observe(sectionHero);
