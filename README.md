# Breman Islamic Academy Website

A static, responsive school website for Breman Islamic Academy built with HTML, CSS, and JavaScript.

## Project Overview

- `index.html` — Home page with navigation, carousel, cards, and footer.
- `pages/audios.html` — Audio library landing page featuring teacher/reciter cards.
- `pages/sanaaullah_playlist.html` — Playlist page for specific audio content.
- `assets/css/` — Custom styles for the site, including `main.css`, `helpers.css`, and `audioPlayer.css`.
- `assets/js/` — JavaScript functionality for the site, including `main.js` and `audioPlayer.js`.
- `assets/images/` — Image assets used across the pages.
- `assets/audios/` — Audio assets for the audiobook playlist.

## Features

- Responsive navigation with mobile sidenav
- Carousel banner on the home page
- Audio library navigation and playlist support
- Smooth scroll-to-top/down buttons via JavaScript
- Materialize CSS and Bootstrap Icons integration

## How to Run

1. Open `index.html` in a browser for local preview.
2. Or run a local static server from the project root, e.g.:

```bash
npx serve .
```

Then visit `http://localhost:3000` or the address shown by the server.

## Notes

- The project is designed as a static frontend and does not require a backend.
- Use a local server when testing audio file paths to avoid browser restrictions.
