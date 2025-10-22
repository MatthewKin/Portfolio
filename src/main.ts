// Import global CSS for Vite to bundle
import './style.css';

const button = document.getElementById("contactBtn") as HTMLButtonElement;
const contactSection = document.getElementById("contact");

button?.addEventListener("click", () => {
  contactSection?.scrollIntoView({ behavior: "smooth" });
});

// Projects example
type Project = { 
  title: string; 
  description: string; 
  images?: string[];
  link?: string;
};

const projects: Project[] = [
  { 
    title: "Luminara (4th Overall)", 
    description: "Fun & Engagement #3 | Theme #5 Overall #4 | Presentation #5 Luminara is a puzzle-platformer where you guide light through the night sky by placing stars to form constellations. These celestial patterns become traversable paths allowing you to overcome obstacles and solve environmental puzzles",
    images: ["/luminara1.png", "/luminara2.png"],
    link: "https://itch.io/jam/california-uni-summer-game-jam/rate/3746145"
  },
  { 
    title: "DeadWired", 
    description: "DEADWIRED is a pixel-art action-puzzler made for Pixel Game Jam 2025. Play as L1CH, a reconstructed mind in a mechanical skeleton, guided by the AI ARIS through a decaying, cyber-future. Use ReFracture Cards to manipulate your surroundings, bypass obstacles, and uncover fragments of your forgotten identity.",
    images: ["/deadwired1.png", "/deadwired2.png"],
    link: "https://itch.io/jam/-pixel-game-jam-2025/rate/3573528"
  }
];

const projectList = document.getElementById("projectList");

projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";

  let imagesHTML = "";
  if (p.images) {
    imagesHTML = `<div class="project-images">${p.images.map(img => `<img src="${img}" alt="${p.title} Screenshot">`).join('')}</div>`;
  }

  card.innerHTML = `
    ${imagesHTML}
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    ${p.link ? `<a href="${p.link}" target="_blank" class="project-link">Play ${p.title}</a>` : ""}
  `;

  projectList?.appendChild(card);
});
