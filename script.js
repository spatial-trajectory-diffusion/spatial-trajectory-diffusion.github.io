const config = window.projectConfig;

document.getElementById("acronym").textContent = config.acronym;
document.getElementById("title").textContent = config.title;

const authors = document.getElementById("authors");
config.authors.forEach((author, index) => {
  if (index > 0) authors.append(", ");
  if (author.url) {
    const link = document.createElement("a");
    link.href = author.url;
    link.textContent = author.name;
    authors.append(link);
  } else {
    authors.append(document.createTextNode(author.name));
  }
});

for (const [id, value] of [
  ["affiliations", config.affiliations],
  ["contact", config.contact]
]) {
  const element = document.getElementById(id);
  element.textContent = value;
  element.hidden = !value;
}

const resourceLabels = {
  paper: "Paper",
  arxiv: "arXiv",
  code: "Code",
  checkpoints: "Checkpoints",
  dataset: "Dataset"
};
const resources = document.getElementById("resources");
Object.entries(config.resources).forEach(([key, url]) => {
  if (!url) return;
  const link = document.createElement("a");
  link.href = url;
  link.textContent = resourceLabels[key];
  link.className = "resource-button";
  resources.append(link);
});
resources.hidden = resources.childElementCount === 0;

if (config.bibtex) {
  document.getElementById("bibtex").textContent = config.bibtex;
  document.getElementById("citation").hidden = false;
  document.getElementById("copy-citation").addEventListener("click", async () => {
    const status = document.getElementById("copy-status");
    try {
      await navigator.clipboard.writeText(config.bibtex);
      status.textContent = "Copied.";
    } catch {
      status.textContent = "Copy failed. Please copy the citation manually.";
    }
  });
}
