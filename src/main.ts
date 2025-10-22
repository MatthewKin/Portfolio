const button = document.getElementById("contactBtn") as HTMLButtonElement;
const contactSection = document.getElementById("contact");

button.addEventListener("click", () => {
  contactSection?.scrollIntoView({ behavior: "smooth" });
});

// Projects example
type Project = { title: string; description: string };
const projects: Project[] = [
  { title: "Between the Tides of Time", description: "Farming resource game with timeline mechanics." },
  { title: "Reality & Rowan", description: "Narrative game exploring memory and alternate timelines." }
];

const projectList = document.getElementById("projectList");
projects.forEach(p => {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p>`;
  projectList?.appendChild(div);
});
