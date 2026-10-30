# CNS S2S Holidays (`cns_s2s_holidays`)

A modern, high-performance React & TypeScript web application for **CNS S2S Holidays** based in Gottigere, Bengaluru.

## Features

- **Fleet & Services Showcase**: Force Urbania Luxury, Innova Crysta, Tempo Traveller, Buses, Local Packages, Outstation, and Airport transfers with interactive category filtering and Bento grid.
- **Detailed Service Modals**: Comprehensive breakdown of vehicle features, booking process, inclusions, and transparent pricing.
- **South India Outstation Destinations**: Interactive showcase of top tourism spots (Ooty, Coonoor, Coorg, Munnar, Kodaikanal, Mysore, Bangalore, Chennai, etc.) with image lightboxes.
- **Interactive Booking Flow**: Instant WhatsApp and Email booking dispatch with visual sending states and confirmation modal.
- **Why Us Interactive Flip Cards**: 3D interactive flip cards highlighting safe travel, experienced drivers, transparent rates, and 24/7 support.
- **Dynamic Interactive UX**: SVG ring progress bars, typewriter hero taglines, location map modal, animated statistics counters, and circular back-to-top button.

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**

## Getting Started

```bash
npm install
npm run dev
```

Dev server runs on `http://localhost:3000`.

## Build for Production / GitHub Pages

```bash
npm run build
```

The output bundle in `dist/` is configured with relative paths (`base: './'`), so it works on GitHub Pages, custom domains, or subpaths out of the box.

## Pushing to GitHub

```bash
git remote add origin https://github.com/<your-github-username>/cns_s2s_holidays.git
git branch -M main
git push -u origin main
```
