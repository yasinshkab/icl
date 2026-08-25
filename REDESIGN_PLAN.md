# ICL Website Redesign Plan

Design read: B2B corporate landing redesign for partners/clients, Modern Corporate vibe; Tailwind utilities + restrained motion.

Dials
- DESIGN_VARIANCE: 6
- MOTION_INTENSITY: 5
- VISUAL_DENSITY: 4

Goals
- Improve clarity and hierarchy on the landing page.
- Preserve content and partners; modernise visuals and interactions.
- Ensure accessibility, RTL support, and good performance.

High-level phases
1. Audit & direction (done)
   - Repo audit, content extraction, asset inventory
   - Confirmed "Modern Corporate" direction

2. Design system & tokens (done / in-progress)
   - Add radius tokens, color tokens, font-smoothing
   - Unify `--radius-*` and utilities

3. Typography & hero (next)
   - Refresh typographic scale and weights across the site
   - Ensure hero: headline ≤ 2 lines; subtext ≤ 20 words; CTA visible without scroll
   - Limit eyebrow usage; move logo wall under hero

4. Component polish
   - Navbar: single-line desktop, 64–72px height, accessible hamburger
   - Buttons: consistent radii, contrast checks, `press-scale` feedback
   - Cards & grids: replace generic three-equal cards with varied bento layouts
   - Partner marquee/carousel: one marquee max, enlarged per request

5. Motion & interaction
   - Replace `transition-all` (done); animate only `transform`/`opacity`
   - Add reduced-motion support; use `initial={false}` for AnimatePresence
   - Isolate complex scroll/GSAP into client islands

6. Images & assets
   - Hero and key-section photography (generate or source); optimize with `next/image`
   - Migrate partner logos to `/public/old-assets/` and prefer SVGs (Simple Icons)

7. Accessibility, RTL, i18n, QA
   - Contrast checks (WCAG AA), keyboard nav, form states
   - Arabic layout checks and font fallbacks

8. Local preview & polish
   - Restart dev server, visual QA, iterate on feedback

9. Prepare deployment artifacts
   - Build, Lighthouse check, bundle audit

Immediate next steps (I will do if you confirm)
- Finish typographic refresh across `src/app/globals.css` and key components
- Adjust hero composition in `src/components/sections/HeroSection.tsx`
- Run local dev preview (I can stop the existing dev server if you allow)

Files to review after changes
- `src/app/globals.css`
- `src/components/sections/HeroSection.tsx`
- `src/components/layout/Navbar.tsx`
- `src/components/sections/PartnerMarquee.tsx`

New design requests from user (added):
- Navbar: adopt the navbar structure from the first image but adapt spacing, radii and colors to the project's design tokens. Keep single-line desktop layout and ensure contrast and accessible hit targets.
- CTA banner: replace current CTA strip with a rich banner (company image background, subtle scrim, content column, strong primary CTA). Use `next/image` with `priority` for the hero banner and ensure the CTA passes contrast checks.
- Footer: remove duplicate footers and replace with a single footer inspired by the third image (rounded card container above a light site footer). Theme it to the project's dark/gold tokens and include contact links, partner logos, and legal links.

Want me to proceed with the immediate steps now (apply typography + hero changes and restart the dev server)?
