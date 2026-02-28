let mainMenu = document.querySelector(".nav__links");
let closeMenu = document.querySelector(".close__menu");
let openMenu = document.querySelector(".open__menu");
let openMenuLogo = document.querySelector("#logo_2");

const projects = [
   {
    title: 'Community Cloud | Website',
    link: 'https://www.party.tools/s/',
    imgSrc: 'images/partytools.png',
    displayText: 'www.party.tools/s/',
  },
  {
    title: 'Community Cloud | Website',
    link: 'https://post.letters-to-santa.co.uk/s/',
    imgSrc: 'images/ltsanta.png',
    displayText: 'letters-to-santa.co.uk/s/',
  },
  {
    title: 'Community Cloud | LWC',
    link: 'https://szopiandemo-dev-ed.develop.my.site.com/',
    imgSrc: 'images/commPage2.png',
    displayText: 'szopiandemo-dev',
  },
  {
    title: 'Tech Cloud Solutions Ltd',
    link: 'https://techcloud-solutions.co.uk/',
    imgSrc: 'images/tcsimg.png',
    displayText: 'techcloud-solutions.co.uk',
  },
  {
    title: 'Dev Books',
    link: 'https://www.devbooks.co.uk/',
    imgSrc: 'images/dbcsimg.png',
    displayText: 'devbooks.co.uk',
  },
  {
    title: 'React | GraphQL | MongoDB',
    link: 'https://github.com/szopian/socialmedia-app',
    imgSrc: 'images/socimg.png',
    displayText: 'github.com/szopian/...',
  },
  {
    title: 'Art Gallery | React App',
    link: 'https://github.com/szopian/art-gallery-react-app',
    imgSrc: 'images/artimg.png',
    displayText: 'github.com/szopian/...',
  },
  {
    title: 'The Family Blog | React App',
    link: 'https://github.com/szopian/blog',
    imgSrc: 'images/blogimg.png',
    displayText: 'github.com/szopian/...',
  },
  {
    title: 'HTML | CSS | JS',
    link: 'https://github.com/szopian/coffeeshop-homepage-video-parallax-website',
    imgSrc: 'images/ehvpimg.png',
    displayText: 'github.com/szopian/...',
  },
  {
    title: 'Music Video Player | API | JS',
    link: 'https://github.com/szopian/music-player',
    imgSrc: 'images/mvp.png',
    displayText: 'github.com/szopian/...',
  },
  {
    title: 'Login Page | Animated Particles.js',
    link: 'https://github.com/szopian/particles-js',
    imgSrc: 'images/ParticlesLoginPage.png',
    displayText: 'github.com/szopian/...',
  },
  {
    title: 'Landing Page | Video Background',
    link: 'https://github.com/szopian/website-video-background',
    imgSrc: 'images/bvwimg.png',
    displayText: 'github.com/szopian/...',
  }
];

function createProjectCard(project) {
  const card = document.createElement('div');
  card.className = 'column';

  card.innerHTML = `
    <div class="card">
      <a class="project__links" href="${project.link}" target="_blank">
        <div class="overflow">
          <img src="${project.imgSrc}" alt="Project" class="project__img" />
        </div>
      </a>
      <div class="container">
        <h4><b>${project.title}</b></h4>
        <p>
          <a class="project__links" href="${project.link}" target="_blank">
            ${project.displayText}
          </a>
        </p>
      </div>
    </div>  
  `;

  return card;
}

function renderProjects() {
  const row = document.querySelector('.row');
  projects.forEach(project => {
    const card = createProjectCard(project);
    row.appendChild(card);
  });

  //add year for footer
  const year = new Date().getFullYear();
  document.querySelector('.js_year').textContent = year;
}

// Ensure the DOM is fully loaded before rendering
document.addEventListener('DOMContentLoaded', renderProjects);

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

