// Import global CSS for Vite to bundle
import './style.css';


// Smooth scroll helper
function setupSmoothScroll() {
  const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
}


// Contact button support (if used later)
function setupContactButton() {
  const button = document.getElementById("contactBtn");
  const contactSection = document.getElementById("contact");

  button?.addEventListener("click", () => {
    contactSection?.scrollIntoView({
      behavior: "smooth"
    });
  });
}


// Luminara modal
function setupLuminaraModal() {
  const modal = document.getElementById("luminara-modal");
  const closeBtn = document.getElementById("close-luminara");
  const frame = document.getElementById("luminara-frame") as HTMLIFrameElement;

  const playBtn = document.getElementById("play-luminara");

  playBtn?.addEventListener("click", () => {
    if (!modal || !frame) return;

    modal.style.display = "flex";

    frame.src = `${import.meta.env.BASE_URL}LuminaraV3/index.html`;
  });


  closeBtn?.addEventListener("click", () => {
    if (!modal || !frame) return;

    modal.style.display = "none";
    frame.src = "";
  });


  modal?.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";

      if (frame) {
        frame.src = "";
      }
    }
  });
}


// Initialize
setupSmoothScroll();
setupContactButton();
setupLuminaraModal();