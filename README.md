# SCTD project website

Minimal, dependency-free project page for **SCTD: Spatially Conditioned Trajectory Diffusion**.

## Preview locally

From the repository root, start any local web server, for example:

```sh
python3 -m http.server
```

Then open <http://localhost:8000/> in a browser. Opening `index.html` directly may prevent the Copy button from working in some browsers.

## Edit the page

All project content and links live in [`config.js`](config.js):

- Edit `title`, `authors`, `affiliations`, and `contact` there.
- Add a URL to a `resources` field to show that resource button. The Paper field accepts either a local path such as `paper.pdf` or an external URL; leave fields empty to hide buttons.
- Put the complete BibTeX citation in `bibtex`. The BibTeX section stays hidden while it is empty.

Author URLs are optional; leave each `url` empty when an author link is not available.

## Publish with GitHub Pages

In the repository settings, open **Pages**, select **Deploy from a branch**, choose the `main` branch and the `/ (root)` folder, then save. GitHub Pages will publish the contents of the repository at the project URL.
