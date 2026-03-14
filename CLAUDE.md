# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Milkdev's personal portfolio website — a vanilla HTML/CSS/JS static site with a Neocities-inspired aesthetic. No build tools, no package managers, no frameworks. Files are served directly as-is via GitHub Pages at milkmandev.com.

## Development

Open any `.html` file directly in a browser, or use a simple local server:

```bash
python3 -m http.server 8000
```

There are no build, lint, or test commands.

## Architecture

**Pages:**
- `index.html` — Home page (3-column grid layout)
- `web/resume.html` — Resume page (2-column layout)
- `web/blog/blog-home.html` — Blog (WIP placeholder)

**Shared resources:**
- `css/style.css` — Single stylesheet for all pages; uses CSS custom properties for theming and a Fibonacci-based spacing scale (`--xs` 5px through `--xl` 34px)
- `js/theme.js` — Light/dark theme toggle; persists choice to `localStorage` and dynamically swaps background images
- `res/img/` — Static assets (cloud backgrounds for both themes, animated GIFs, avatar)

**Theme system:** CSS custom properties define two theme scopes on `:root`. `theme.js` toggles a `data-theme` attribute (or equivalent) and swaps background images. The script handles relative path differences between root-level and nested pages (`web/`).

**Layout:** CSS grid with responsive breakpoints at 1024px (3→1 column) and 600px. Background clouds use `background-attachment: fixed` for parallax. Images use `image-rendering: pixelated` for the retro aesthetic.
