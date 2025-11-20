# 30-60-90 Day Plan — Demo

This repository contains a lightweight browser demo of the `30-60-90` React component you authored. It's intended to be a quick static demo you can host on GitHub Pages.

What I changed
- Converted icon imports to simple emoji components so the app runs in the browser without a bundler.
- Added `index.html` which loads React, ReactDOM, Tailwind and Babel from CDNs and mounts the app.

Quick local test (Windows PowerShell)

1. From the project root run a simple static server (Python must be installed):

```powershell
python -m http.server 5000
```

2. Open `http://localhost:5000` in your browser.

Publish to GitHub Pages

1. Create a new repo on GitHub or push this folder to an existing repo.
2. Push the code to `main` (or `master`) branch.
3. On GitHub, go to the repository Settings → Pages.
4. Under "Source" select the branch (e.g., `main`) and folder `/(root)`, then Save.
5. GitHub Pages will publish the static site at `https://<your-username>.github.io/<repo-name>/` (may take a minute).

Notes & next steps
- This demo uses Babel in the browser and Tailwind CDN; that's fine for a demo but not recommended for production.
- If you'd like, I can:
  - Create a proper build (`create-react-app` / Vite) and a GitHub Actions workflow to auto-deploy to Pages.
  - Replace emoji icons with inline SVGs or ship the real `lucide` icons via a build step.

If you want me to continue and create a production-ready build + automatic deploy, tell me which approach you prefer (CRA, Vite, or a simple GitHub Action using `pnpm`/`npm`), and I'll scaffold it.
