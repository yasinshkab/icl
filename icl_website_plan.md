# Master Project Blueprint: ICL Group Website (Full Replacement)

## 1. Project Overview & Primary Objective

* **Live Site:** [icl.ly](https://icl.ly) — WordPress site (homepage currently compromised; subpages still hold original content).
* **Primary Goal:** **Duplicate all existing icl.ly content** and present it in a **new, modern design**. Same information, same services, same contact details — new look, new code, new UX.
* **Deployment Strategy:** The old WordPress site will be **entirely deleted from hosting**. The new custom build **fully replaces** it on `icl.ly`. No parallel WordPress install.
* **Secondary Enhancement:** Layer in a **Holding Group Gateway** section (Al Nakhla, Contracting subdomain, etc.) as an addition — not a replacement for existing service pages.

---

## 2. Content Migration Inventory (Source: icl.ly)

All content below must be preserved in the new site (text, structure, images, contact info).

### Pages to Rebuild

| Route (new) | Old URL | Content |
|-------------|---------|---------|
| `/` | `/` | Company intro, service overview, partners preview, CTA |
| `/about` | `/about-us/` | Company description, Chairman's Speech, Vision, Mission, partner logos |
| `/services/professional` | `/professional-services/` | Professional services overview |
| `/services/hospitality` | `/hospitality-services/` | Oyster Guest House — property details, amenities, galleries, floor plans |
| `/services/business-development` | `/business-development/` | Web Design, SEO, PPC, Marketing, Branding |
| `/services/logistics` | `/logistics-services/` | Container shipping, freight, global logistics |
| `/services/transportation` | `/transportation-solutions/` | Private aviation, charter, elevated service |
| `/contact` | `/contact-us/` | Form, `info@icl.ly`, `+218 91 211 97 87`, Tripoli Nofleen |
| `/blog` | `/blog-2/` | Blog (Phase 2 — optional for MVP) |

### Contact Info (must match exactly)

* **Email:** info@icl.ly
* **Phone:** +218 91 211 97 87
* **Address:** Libya, Tripoli, Nofleen

### Strategic Partners (from About Us)

MedSky, Crown Airlines, Hyundai Libya, Al Baraka Insurance, Doroub, Paris, Hroof, TR, DMO, and others from old asset folder.

### Oyster Guest House Assets (from Hospitality page)

* Property: 680m², 3-story, Bouseta district, overlooks Tripoli port
* Apartments: Pearl (60m²), Sadafa (65m²)
* Amenities: furnished, kitchen, rooftop gym, Wi-Fi, generator, catering, housekeeping, security, parking (4 cars)
* Images & floor plans: migrate from `icl.ly/wp-content/uploads/` before old site deletion

### Group Network Additions (new section on homepage)

1. **Al Nakhla Exchange** → external link: `https://alnakhlaxc.ly/`
2. **ICL Contracting** → future subdomain `contracting.icl.ly` (Phase 2)
3. **Oyster / Hospitality** → internal `/services/hospitality`
4. **Logistics & Aviation** → internal `/services/logistics` + `/services/transportation`

---

## 3. Design Inspiration & Visual Direction (Corporate Minimalism)

Move away from the old blocky WordPress template. New visual identity inspired by:

* **UzOman Reference:** [UzOman Corporate Website Design](https://dribbble.com/shots/25838011-UzOman-Corporate-Website-Design) — bold typography, authority, structured grids.
* **ECI Reference:** [ECI Minimalist Insurance Company Design](https://dribbble.com/shots/26840379-ECI-Clean-Minimalist-Insurance-Company-Corporate-Website-Page) — ultra-clean layouts, thin borders, card hover micro-interactions.

**Design Read:** B2B corporate holding site for regional business audience, premium minimalist dark language, leaning toward Next.js + Tailwind + restrained Framer Motion.

---

## 4. Technical Stack (No WordPress)

* **Framework:** Next.js 16 (App Router) — repo currently pins `next` to 16.3.2
* **Styling:** Tailwind CSS v4
* **Animations:** Framer Motion (fade-ins, card hovers, scroll reveals)
* **i18n:** `next-intl` — Arabic (RTL, default) + English (LTR), routes: `/ar/...` and `/en/...`
* **Fonts:** Cairo / Tajawal (Arabic), Inter (English) via `next/font`
* **Forms:** Next.js API route → email (Resend or SMTP) for contact form
* **Hosting:** cPanel — Node.js + PM2 **or** static export (`output: 'export'`) if server features not needed. Decision at Phase 4.

---

## 5. Visual Identity & UI Design System

* **Background:** `#0B0D10` (Charcoal Dark)
* **Surface:** `#161920` (Slate Layer)
* **Borders:** `rgba(255, 255, 255, 0.08)` — ultra-thin, ECI-style
* **Accent:** subtle warm gold or soft white outline for CTAs
* **Typography:** Bold display headers, generous whitespace, readable body text
* **Dials:** DESIGN_VARIANCE 7 | MOTION_INTENSITY 5 | VISUAL_DENSITY 4

---

## 6. Site Architecture

### Header Navigation

* Logo | Services (dropdown) | About | Group Network | Contact
* Language toggle: AR / EN
* CTA: "تواصل معنا" / "Contact Us"

### Homepage Sections

1. **Hero** (UzOman) — ICL as multi-industry holding group
2. **Services Grid** (ECI cards) — links to 5 service pages
3. **Group Network** — Al Nakhla, Contracting, Oyster, Logistics/Aviation
4. **Partners Marquee** — logo strip
5. **Contact CTA** — link to contact page / modal

### Service Pages

Each service page: hero banner, content blocks migrated from old site, imagery, CTA to contact.

### About Page

Company intro, Chairman's Speech, Vision bullets, Mission paragraph, full partners grid.

### Hospitality (Oyster)

Dedicated rich page: property overview, amenity cards, image gallery with lightbox, floor plan viewer.

### Contact Page

Modern form (Company, Name, Email, Phone, Subject dropdown, Message) + contact details sidebar.

---

## 7. Pre-Launch Checklist (Before Deleting Old Site)

- [ ] Export all text content from icl.ly subpages
- [ ] Download all images from `icl.ly/wp-content/uploads/` and `wp-content/themes/icl/images/`
- [ ] Download ICL logo (`ICL_LOGO.webp`)
- [ ] Map old URLs → new URLs for 301 redirects (SEO)
- [ ] Backup WordPress DB + files (archive only, not redeploy)
- [ ] Change cPanel/FTP passwords after old site removal

---

## 8. Developer Roadmap

- [x] **Phase 1: Project Setup** *(completed)*
  * Initialize Next.js + Tailwind + Framer Motion + next-intl
  * Configure fonts, RTL/LTR, design tokens, base layout (Navbar, Footer)
  * Scaffold all page routes with placeholder content

- [ ] **Phase 2: Content Migration & Components**
  * Migrate all text and images from old site into structured content files (`/src/content/`)
  * Build reusable components: ServiceCard, PartnerMarquee, Gallery, ContactForm, SectionHeader
  * Implement Framer Motion animations

- [ ] **Phase 3: Page Build-Out**
  * Homepage (Hero + Services + Group Network + Partners)
  * About, Contact, all 5 service pages
  * Oyster hospitality page with gallery and floor plans

- [ ] **Phase 4: Deploy & Replace**
  * Optimize images (WebP/AVIF), Lighthouse > 95
  * Delete old WordPress from cPanel
  * Deploy new build to `icl.ly`
  * Configure redirects for old URL paths
  * SSL verification, smoke test all pages

---

## 9. URL Redirect Map (Old → New)

| Old Path | New Path |
|----------|----------|
| `/about-us/` | `/ar/about` or `/en/about` |
| `/professional-services/` | `/ar/services/professional` |
| `/hospitality-services/` | `/ar/services/hospitality` |
| `/business-development/` | `/ar/services/business-development` |
| `/logistics-services/` | `/ar/services/logistics` |
| `/transportation-solutions/` | `/ar/services/transportation` |
| `/contact-us/` | `/ar/contact` |

Configure via `.htaccess` (Apache) or Nginx rewrite rules on cPanel.
