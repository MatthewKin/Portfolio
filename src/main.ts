import './style.css';
const button = document.getElementById("contactBtn") as HTMLButtonElement;
const contactSection = document.getElementById("contact");

button.addEventListener("click", () => {
  contactSection?.scrollIntoView({ behavior: "smooth" });
});

// Projects example
type Project = { title: string; description: string };
const projects: Project[] = [
  { title: "Luminara (4th Overall)", description: "Fun & Engagement #3 | Theme #5 Overall #4 | Presentation #5 Luminara is a puzzle-platformer where you guide light through the night sky by placing stars to form constellations. These celestial patterns become traversable paths allowing you to overcome obstacles and solve environmental puzzles" },
  { title: "DeadWired", description: "aaaaa" }
];

const projectList = document.getElementById("projectList");
projects.forEach(p => {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p>`;
  projectList?.appendChild(div);
});
