# Joselito D. Faylogna — Portfolio

A creative editorial portfolio built with Nuxt 4, Nuxt UI 4, and Tailwind CSS.

## Visual direction

- Graphic-designer-first creative editorial layout
- Black `#000000`
- Violet `#7D39EB`
- Lime `#C6FF33`
- White `#FFFFFF`
- Sharp borders and poster-like typography rather than rounded dashboard cards

## Setup

If you already created the Nuxt project and installed the dependencies, copy the files from this package into your project and run:

```bash
npm install
npm run dev
```

No additional runtime plugin is required for the résumé. The `Résumé` button uses the browser print dialog and a dedicated print-only résumé layout.

## Main files

- `app/composables/usePortfolioData.ts` — portfolio content
- `app/assets/images/joselito-portrait.png` — supplied portrait
- `app/assets/css/main.css` — palette, editorial styles, and résumé print styles
- `app/components/*` — portfolio sections
- `public/favicon.svg` — JF favicon

## Adding real graphic-design samples later

The current project avoids inventing client work. Replace or expand the project visuals when approved images are available. The best place to add them is `SelectedWorkSection.vue` or by adding image fields to `usePortfolioData.ts`.

## Résumé printing

The portfolio uses `printd` for the Résumé button. The plugin prints only the dedicated `#resume-print-source` document and loads `/public/resume-print.css` inside the print frame. This keeps the résumé layout independent from the website styling and gives the browser a clean two-page A4 print/save-as-PDF preview.

After copying this update into an existing project, run:

```bash
npm install
```

so the `printd` dependency is installed.
