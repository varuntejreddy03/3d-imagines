# 3D IMAGINES — WEBSITE BUILD PROMPT
### (Paste this whole document into Claude Code / Cursor / v0 / Bolt to generate the site)

---

## 1. PROJECT BRIEF (give this context first)

Build a premium, award-worthy marketing website for **3D Imagines**, an architectural and industrial scale-model making company established in **2009**, based in **Hyderabad, India**, serving clients across India and globally.

The site must feel as polished as an Awwwards/CSS Design Awards site — cinematic, tactile, physical-product-forward (this is a company that builds *physical objects*, so the site should feel crafted, precise, and premium, not like a generic SaaS template).

**Reference site to beat:** https://maadhucreatives.com/ — a competitor scale-model company site. Match its information depth (services, process, industries, FAQs, testimonials) but improve: cleaner IA, faster load, better typography, stronger visual hierarchy, more confident use of whitespace, and a tighter path to contact/enquiry. Do not copy their layout 1:1 — build a distinct, better-designed version.

---

## 2. TECH STACK

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (with a custom design-token config, not default palette)
- **Animation:** Framer Motion (scroll-reveals, hover states, hero parallax)
- **Routing:** React Router v6 (multi-page, static front-end — no CMS/backend needed)
- **Icons:** lucide-react
- **Forms:** static/front-end only (Formspree or mailto fallback — no backend required, per "Static (Front end)" site type)
- **Fonts:** Google Fonts — pair a strong geometric/grotesk display font (e.g. **Space Grotesk** or **Sora**) for headings with a clean readable sans (e.g. **Inter**) for body text
- Fully responsive (mobile-first), accessible (semantic HTML, alt text, focus states), and optimized (lazy-loaded images, code-split routes)

---

## 3. BRAND SYSTEM (derived from the logo)

**Logo:** An orange abstract bar-chart/skyline mark inside an open circular bracket — reads as "growth + architecture + building" — paired with clean white wordmark "3D Imagines" on charcoal.

### Color palette
| Token | Hex | Use |
|---|---|---|
| `--color-primary` (Imagines Orange) | `#F5820A` / `#EE7B0D` (sample exact tone from the uploaded logo) | CTAs, accents, icons, hover states |
| `--color-primary-dark` | `#C9640A` | gradients, hover-darken |
| `--color-ink` (near-black charcoal) | `#1C1C1E` / `#232326` | primary backgrounds, header, footer |
| `--color-surface` | `#FFFFFF` | main content background |
| `--color-surface-alt` | `#F6F5F3` (warm off-white, not clinical grey) | section alternation |
| `--color-text` | `#1C1C1E` | body copy on light |
| `--color-text-muted` | `#6B6B6E` | secondary copy |
| `--color-border` | `#E7E5E2` | dividers, card borders |

Avoid pure black (#000) and pure grey SaaS tones — this brand should feel warm, industrial, tactile (charcoal + orange + off-white), not corporate-cold.

### Typography
- Display/headings: Space Grotesk, bold/semibold, tight tracking, large scale (clamp() fluid sizing)
- Body: Inter, 16–18px base, 1.6 line-height
- Small caps label style (like the logo's tagline "ARCHITECTURAL AND INDUSTRIAL MODEL MAKERS") for eyebrow/kicker text above headings — uppercase, letter-spaced, small, orange or muted

### Motifs to reuse from the logo across the site
- The ascending bar-chart shape → use as a recurring graphic motif (section dividers, loading states, stat counters, background watermark at low opacity)
- The open circular bracket → use as a framing device for images (partial circular crop/border on hero image or founder photo)
- Precision/blueprint feel: thin 1px lines, corner brackets on image cards (like camera-viewfinder corners), grid-paper texture at very low opacity in hero background

---

## 4. SITE MAP

```
/                      Home
/about                 About Us
/services              Services (overview, links to sub-sections below on same page or anchored)
/services/architectural-models
/services/industrial-models
/services/3d-printing  (SLA + FDM)
/process               Our Process (optional standalone, or section on Home)
/gallery               Project Gallery / Portfolio
/contact               Contact Us
```

(No Careers or Blog page — explicitly excluded per your brief. Keep IA lean: 6 pages is plenty for a company this size; don't over-build like the reference site's 15+ page sprawl.)

---

## 5. HOME PAGE — SECTION BY SECTION

### 5.1 Sticky Header
- Logo left (orange mark + white "3D Imagines" wordmark on transparent → charcoal on scroll)
- Nav: About · Services ▾ (dropdown: Architectural Models, Industrial Models, 3D Printing) · Gallery · Contact
- Right: phone number with icon (click-to-call) + "Get a Quote" button (solid orange, rounded)
- Mobile: slide-in drawer menu

### 5.2 Hero
- Full-viewport dark (charcoal) hero with subtle blueprint-grid texture background
- Eyebrow label: "ARCHITECTURAL & INDUSTRIAL MODEL MAKERS · SINCE 2009"
- Headline (large, Space Grotesk): **"We Build Ideas You Can See and Touch"** or **"Precision Scale Models, Engineered to Impress"**
- Subline: one sentence from About copy — "Bringing complex concepts to life through premium architectural, industrial, and engineering scale models."
- Two CTAs: primary "Get a Free Quote" (orange solid), secondary "View Our Work" (ghost/outline)
- Right side or background: rotating/cross-fading showcase of model photography (use placeholder images with clear alt text — client will supply real photos)
- Animated stat strip beneath hero: **15+ Years** · **30+ Yrs Combined Team Experience** · **Clients Across India & Globally** · **2 Manufacturing Techniques (SLA + FDM)**

### 5.3 Trust/Intro Section
- Two-column: left = short "Who We Are" paragraph (from About copy, trimmed to ~60 words), right = image framed with the logo's circular-bracket motif
- "Read More →" link to /about

### 5.4 Why Choose Us (Advantage grid)
6 icon cards, orange line-icons on white/off-white cards with subtle shadow + hover-lift:
1. Established 2009 — Proven Track Record
2. 30+ Years Combined Team Expertise
3. High-Precision Manufacturing (Laser Cutting + 3D Printing)
4. Customized Solutions Per Client
5. On-Time Delivery
6. Trusted Across India & Worldwide

### 5.5 Our Services (core section — make this the visual centerpiece)
Grid or tabbed layout, 3 primary categories, each expandable/linking to a services page:

**A. Architectural 3D Model Makers**
- Architectural exterior models
- Architectural interior models
- Master plan / township models

**B. Industrial 3D Model Makers**
- Industrial equipment models
- Locomotive scale models
- Process/plant layout models

**C. 3D Printing**
- SLA 3D Printing
- FDM 3D Printing

Each card: image, title, 1-line description, "Explore →" link. Use hover state that reveals more detail (card flip or overlay slide-up), echoing the reference site's service cards but with a more refined, modern hover interaction (avoid dated flip effects — use smooth image-zoom + gradient overlay + text-reveal instead).

### 5.6 Our Process (step timeline)
Horizontal (desktop) / vertical (mobile) numbered timeline, echoing reference site's 6-step process but written for 3D Imagines:
1. Consultation & Drawing Review
2. Design & 3D Modeling
3. Laser Cutting / 3D Printing
4. Fabrication & Assembly
5. Finishing & Painting
6. Quality Check & Delivery

Use the logo's ascending-bar motif as the connecting line graphic between steps (bars grow taller as you move through steps 1→6 — nice subtle brand callback).

### 5.7 Gallery Preview
- Masonry or filterable grid (filter tabs: All / Architectural / Industrial / Locomotive / 3D Printed) showing 6–9 project images
- "View Full Gallery →" to /gallery

### 5.8 Stats / Global Reach band
Full-width dark section, 3–4 animated counters (count-up on scroll into view):
- Projects Completed
- Years of Combined Expertise (30+)
- Client Retention
- Cities/Regions Served

### 5.9 Testimonials
Simple carousel or 3-card static grid — client name + short quote. (Client will supply real testimonials; use tasteful placeholders marked clearly as `[PLACEHOLDER]` in code comments.)

### 5.10 FAQ Accordion
Write 6–8 FAQs relevant to 3D Imagines (adapt, don't copy, the reference site's FAQ topics):
- What types of scale models do you make?
- How much does a scale model cost?
- What information do you need from clients to start?
- What is the typical turnaround time?
- What scale ratios do you recommend?
- What's the difference between SLA and FDM 3D printing, and which should I choose?
- Do you deliver/ship models outside Hyderabad?
- Can I visit the workshop?

### 5.11 CTA Banner
Full-width orange (or charcoal-with-orange-accent) band: "Have a project in mind? Let's build it together." + phone + email + "Request a Quote" button.

### 5.12 Footer
- Logo + tagline
- Quick Links (About, Services, Gallery, Contact)
- Services list (all sub-services linked)
- Contact block: both phone numbers, email, full address, embedded Google Map (use the provided maps link), business hours (Mon–Sat 9am–8pm, Sun 9am–12:30pm)
- Social icons: YouTube, Instagram, LinkedIn (use exact links provided below)
- Copyright line: "© 2026 3D Imagines. All rights reserved."

---

## 6. EXACT BUSINESS CONTENT TO USE IN THE BUILD

**Company name:** 3D Imagines
**Tagline:** Architectural and Industrial Model Makers
**Founded:** 2009
**Team experience:** 30+ years combined

**Phone:** 9948119395, 6309669395
**Email:** 3dimagines2009@gmail.com
**Address:** 1st Floor, 1-7-139/81, Golconda X Roads, Musheerabad, Zamistanpur, SRK Nagar, Hyderabad, Telangana 500020
**Map link:** https://maps.app.goo.gl/PYynNySM84cjWpj97

**Business hours:** Mon–Sat 9:00 AM–8:00 PM · Sun 9:00 AM–12:30 PM

**Social:**
- YouTube: https://youtube.com/@3dimagines-architecturalmo193
- Instagram: https://www.instagram.com/3dimagines09
- LinkedIn: https://www.linkedin.com/in/3d-imagines-undefined-50567a422

**Services (use verbatim as category names):**
1. Architectural 3D model makers
2. Architectural interior models
3. Industrial 3D model makers
4. Industrial equipment 3D model makers
5. Locomotive 3D models
6. Master plan 3D models
7. 3D printing — SLA 3D printing
8. 3D printing — FDM 3D printing

**About copy (use/trim as needed across Home intro + full About page):**
> 3D Imagines is a 3D scale model making company established in 2009, specializing in the design and fabrication of premium-quality architectural, industrial, engineering, and custom scale models. With over 30 years of combined industry experience, our team has earned a reputation for delivering highly detailed, accurate, and visually stunning models for clients across the globe. We combine traditional craftsmanship with modern technologies such as 3D printing, laser cutting, and advanced model-making techniques to create scale models that communicate ideas with exceptional clarity and realism.

**Mission:** To transform complex concepts into realistic, high-quality scale models that inspire confidence, enhance presentations, and help clients communicate their vision effectively.

**Vision:** To be recognized as one of the world's most trusted and innovative 3D scale model makers, delivering exceptional craftsmanship, precision, and customer satisfaction through continuous innovation and excellence.

**Why Choose Us (use as the Advantage grid):**
- Established in 2009 with a proven track record of excellence
- 30+ years of combined expertise in professional scale model making
- Exceptional craftsmanship and attention to every detail
- High-precision manufacturing using the latest technology
- Customized solutions tailored to each client's requirements
- On-time project delivery with uncompromising quality
- Trusted by clients across India and around the world
- Dedicated customer support from concept to final delivery

---

## 7. WHAT TO IMPROVE VS. THE REFERENCE SITE (explicit instructions to the AI builder)

1. **Cut the bloat.** The reference site repeats city-landing-page blocks and duplicates the client-logo carousel across 5 categories — skip that pattern entirely; it hurts UX. Use one clean project gallery instead.
2. **One strong hero, not a busy slider.** Reference site's hero image carousel feels dated — build a modern, single cinematic hero with a subtle parallax/ken-burns effect instead of an obvious slideshow.
3. **Modern hover interactions**, not flip-cards — smooth scale/overlay transitions (Framer Motion `whileHover`).
4. **Real whitespace and rhythm** — generous section padding (min 96–120px vertical on desktop), consistent 12-col grid, avoid the cramped feel of the reference site.
5. **Micro-interactions**: animated counters, scroll-reveal fade/slide-ups (stagger children), smooth anchor-scroll nav, button hover states with subtle shadow/scale.
6. **Performance**: use `next/image`-style lazy loading equivalent (native `loading="lazy"`), compress images, split routes, avoid layout shift.
7. **SEO**: proper meta tags, semantic heading hierarchy, descriptive alt text, schema.org `LocalBusiness` JSON-LD with the exact NAP (name/address/phone) data above.

---

## 8. DELIVERABLE INSTRUCTIONS FOR THE AI CODE ASSISTANT

- Scaffold with `npm create vite@latest 3d-imagines -- --template react`
- Install and configure Tailwind with the custom color tokens from Section 3 in `tailwind.config.js`
- Build reusable components: `Header`, `Footer`, `Hero`, `SectionHeading`, `ServiceCard`, `StatCounter`, `ProcessStep`, `TestimonialCard`, `FAQAccordion`, `CTASection`
- Use placeholder images from a free source (e.g. Unsplash architecture/industrial photography) clearly marked for client replacement
- Add a `README.md` noting where to swap in real project photography and testimonials
- Ensure the build runs with `npm run dev` with zero console errors

---

**End of prompt — paste this entire document as your instruction to the code-generation AI.**
