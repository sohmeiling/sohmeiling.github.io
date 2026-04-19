const slides = [
  {
    title: "Investigating how multiplication fluency is shaped by memory, language, and the brain.",
    description:
      "I am a psychologist and recent PhD graduate whose research combines behavioural experiments, large-sample cognitive data, and neuroimaging to understand mathematical cognition.",
    note:
      "PhD in Psychology, University of Nottingham Malaysia. Research spanning arithmetic cognition, short-term memory, fMRI, EEG, and cross-cultural evidence.",
  },
  {
    title: "Connecting behavioural experiments with neurocognitive evidence.",
    description:
      "My work draws together experimental psychology, statistics, and brain-based methods to examine how fluent arithmetic performance emerges across individuals.",
    note:
      "Recent projects include behavioural experiments, a large sociodemographic dataset, EEG collection in the UK, and fMRI analysis of multiplication fluency.",
  },
  {
    title: "Building research that is careful, method-driven, and collaborative.",
    description:
      "Alongside research, I teach psychology methods, statistics, and programming, and I am interested in interdisciplinary collaboration across learning and cognition.",
    note:
      "This site brings together my research agenda, publications, academic updates, and ways to connect.",
  },
];

const title = document.getElementById("slide-title");
const description = document.getElementById("slide-description");
const note = document.getElementById("slide-side-note");
const counter = document.getElementById("slide-counter");
const prevButton = document.getElementById("prev-slide");
const nextButton = document.getElementById("next-slide");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("site-nav");

let activeSlide = 0;

function renderSlide(index) {
  if (!title || !description || !note || !counter) {
    return;
  }

  const slide = slides[index];
  title.textContent = slide.title;
  description.textContent = slide.description;
  note.textContent = slide.note;
  counter.textContent = `${index + 1} of ${slides.length}`;
}

function moveSlide(direction) {
  activeSlide = (activeSlide + direction + slides.length) % slides.length;
  renderSlide(activeSlide);
}

if (prevButton && nextButton) {
  prevButton.addEventListener("click", () => moveSlide(-1));
  nextButton.addEventListener("click", () => moveSlide(1));
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

renderSlide(activeSlide);
