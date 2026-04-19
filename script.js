const updatesTrack = document.getElementById("updates-track");
const updatesPrevButton = document.getElementById("updates-prev");
const updatesNextButton = document.getElementById("updates-next");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("site-nav");

function scrollUpdates(direction) {
  if (!updatesTrack) {
    return;
  }

  const step = Math.max(updatesTrack.clientWidth * 0.7, 280);
  updatesTrack.scrollBy({
    left: direction * step,
    behavior: "smooth",
  });
}

if (updatesTrack && updatesPrevButton && updatesNextButton) {
  updatesPrevButton.addEventListener("click", () => scrollUpdates(-1));
  updatesNextButton.addEventListener("click", () => scrollUpdates(1));

  updatesTrack.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollUpdates(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollUpdates(1);
    }
  });
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
