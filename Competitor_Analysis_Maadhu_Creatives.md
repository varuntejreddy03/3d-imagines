# Competitor Analysis — Maadhu Creatives (maadhucreatives.com)
### Prepared for: 3D Imagines website rebuild
### Goal: build a site that is measurably better — faster, cleaner, more trustworthy, easier to convert

---

## 1. Snapshot of what's live today

| Attribute | Finding |
|---|---|
| Title tag | "Maadhu Creatives Model Making Company, 3D Scale Model Maker" |
| Meta description | "Maadhu Creatives is a trusted 3D scale model making company offering architectural, engineering, industrial, marine, and miniature model making services." |
| Stack | Custom-coded (not WordPress/Elementor — `app.css` + `script.js`), server-rendered HTML |
| Body font | Poppins |
| Heading font | Bebas Neue (condensed, all-caps display font) |
| Images on homepage | **92** `<img>` tags, plus **5 autoplaying background videos** (`.mp4`) in the hero alone — one per service category |
| Logo file | `logo.gif` — an **animated GIF logo** |
| Tracking/scripts loaded | Google Tag Manager, Google Analytics 4, Google Ads conversion pixel, reCAPTCHA, **Buttonizer** (floating contact-button widget), **Formilla** (live-chat widget) |
| Nav includes | Blog, Careers (both explicitly out of scope for 3D Imagines per your brief) |

---

## 2. Structural walkthrough (in page order)

1. **Hero** — rotating/cross-fading video banner (5 separate MP4s: Architecture, Engineering, Industrial, Marine, 3D Printer), headline "We Build Ideas You Can See and Touch," a small stat pair (2000+ Projects / 95% Clients return), "Read More" CTA.
2. **Trust intro** — "Trusted & Global" paragraph about the company, generic stock-style copy, one CTA.
3. **Advantage strip** — 5 one-line claims (Best Prices, Unbiased Advice, 100% Trustworthy, Innovative Technology, Glad to help) — no icons/detail, reads as filler.
4. **Services** — 3 category blocks (Scale Model Making, 3D Visualization, 3D Printing), each listing 6-7 sub-services as plain text links, "Explore More" per block.
5. **Process** — 6-step numbered list (Execution & Drawing Edit → Laser Cutting & 3D Printing → Fabrication → Electrical Installation → Finishing & Painting → Final Assembly).
6. **Clients / portfolio teaser** — 4 category tiles (Industrial, Marine, Engineering, Architectural).
7. **Stats band** — 2000+ Projects, 1000+ Clients, 80% Retention, 22+ "Global Reach" (note: homepage shows **two different retention numbers**, 95% earlier and 80% here — an inconsistency).
8. **World map** — "Serving Clients Across the Globe."
9. **Industries served** — 5 cards (Architectural, Manufacturing, Oil & Gas, Shipping, IT Services).
10. **City landing blocks** — Pune, Bangalore, Kolkata, Delhi — **and then the exact same four city blocks repeat a second time immediately after**, verbatim. This is a real, reproducible defect on the live page, not a one-off — confirms the "duplicate city-landing-page blocks" issue your build brief already flagged.
11. **Testimonials** — 4 static quotes, "View All Reviews on Google" link.
12. **FAQ accordion** — 10 questions.
13. **Contact form** — name/email/phone (with country-code dial-in for IN/AE/US/UK/AU), service dropdown, subject, message, protected by reCAPTCHA.

Plus a persistent **Buttonizer floating action button** and a **Formilla live-chat bubble**, both loaded on every page.

---

## 3. What's actually working (worth keeping the *intent* of, not the execution)

- **Depth of information** — services, process, industries, FAQs, testimonials are all present and genuinely useful to a buyer researching model-makers. Don't strip this out; just present it better.
- **Category-specific hero video** — the idea of showing real fabrication footage per service line is strong for a "physical craft" brand; the execution (5 autoplaying MP4s stacked in one hero) is the problem, not the concept.
- **Stat counters** (projects completed, clients, retention) build credibility fast — keep the pattern, fix the inconsistent numbers.
- **Service-specific contact routing** (dropdown pre-selecting the service) reduces friction for the visitor — worth carrying forward.
- **FAQ breadth** — 10 questions is thorough; your build brief's 6-8 is fine, but a few of theirs ("Will the scale model reach my destination safe?", "Do I need to see the final product before shipping?") are good buyer-anxiety questions worth adapting.

---

## 4. Concrete problems to beat (evidence-based, not just "make it nicer")

### Performance & technical
1. **5 autoplaying hero videos** load on first paint of the homepage — this is a very heavy above-the-fold payload on mobile/slow connections. 3D Imagines should use **one** cinematic hero (static image with subtle Ken Burns/parallax, or a single short looping clip), per your brief §7.2.
2. **Animated GIF logo** (`logo.gif`) — GIFs are large, low-quality, non-retina, and can't be styled/recolored via CSS. A real logo should ship as SVG (infinitely scalable, tiny file size, crisp on any screen).
3. **92 images on one page** with no evidence of lazy-loading discipline — real risk of layout shift and slow LCP. Your brief's §7.6 (native `loading="lazy"`, compression, route splitting) directly fixes this.
4. **Third-party script sprawl**: GTM + GA4 + Google Ads pixel + reCAPTCHA + Buttonizer + Formilla chat = 6+ third-party origins on every page load, each adding latency and a privacy surface. Recommendation: keep GA4 (or a lighter privacy-first analytics tool) and a single WhatsApp/click-to-call floating button — drop the extra chat widget and ad-conversion script unless there's an active paid-ads campaign to justify it.
5. **reCAPTCHA on the contact form** adds friction (Google branding, a checkbox/challenge) for a B2B enquiry form where the real spam risk is low. A honeypot field + server-side validation (or a lighter provider like Cloudflare Turnstile) gets the same protection with none of the visual clutter.

### Content & structural integrity
6. **Duplicate city-block section** — the exact same 4 cards render twice back-to-back. This looks broken to a visitor and is a red flag for how carefully the site was QA'd. Ship zero duplicated sections.
7. **Conflicting stats** — 95% "Clients return" in the hero vs. 80% "Client Retention" in the stats band. Pick one true number and use it everywhere (schema.org and trust copy included).
8. **Careers and Blog in primary nav** with (as far as the homepage shows) no visible fresh content driving traffic — dead weight in the IA for a company this size. Your brief already correctly excludes both — stay lean at 6 pages.
9. **Generic "Best Prices / Unbiased Advice / Glad to help" advantage strip** — reads like stock template copy, not specific to model-making. Your brief's Advantage grid (§5.4: "Established 2009," "30+ years combined," "Laser Cutting + 3D Printing," etc.) is already more specific and credible — keep it that way; resist genericizing it during build.

### Design & UX
10. **Condensed all-caps Bebas Neue headlines + Poppins body** reads more like a generic template pairing than a considered brand system. Your brief's Space Grotesk/Sora + Inter pairing (§3) is more distinctive and better suited to a precision/engineering brand.
11. **Flat list-style service sub-items** (plain text links stacked under each category) under-sells work that is inherently visual (physical scale models). Your brief's image-forward `ServiceCard` with hover reveal (§5.5) is a real upgrade — prioritize getting real project photography into these cards at launch, not stock placeholders, since visual proof is this industry's strongest sales lever.
12. **No visible circular-bracket or bar-chart motif reuse** anywhere in their layout — their brand mark doesn't extend into the page design at all. This is a genuine differentiation opportunity: 3D Imagines' logo motifs (ascending bars, open circular bracket, blueprint/viewfinder corners — brief §3) reused as section dividers, stat-counter graphics, and image frames will make the site feel authored, not templated.

---

## 5. Direct feature comparison

| Area | Maadhu Creatives (live) | 3D Imagines target (per build brief) |
|---|---|---|
| Pages | 15+ (incl. Blog, Careers, 4+ duplicated city pages) | 6, lean IA |
| Hero | 5 autoplaying videos, carousel-like | 1 cinematic hero, parallax/Ken Burns |
| Logo | Animated GIF | SVG, scalable, brand-motif driven |
| Headline font | Bebas Neue (condensed caps) | Space Grotesk / Sora |
| Service presentation | Text-link lists | Image cards, hover-reveal detail |
| Stats | Inconsistent (95% vs 80%) | Single source of truth, animated count-up |
| Contact friction | reCAPTCHA + chat widget + floating button | Clean form, single click-to-call/WhatsApp CTA |
| Duplicate content | Yes (city blocks repeat) | Zero tolerance — QA before launch |
| Brand motif reuse | None | Bars + circular bracket reused across sections |
| Third-party scripts | 6+ origins | Minimal: analytics + one contact channel |

---

## 6. Priority punch-list for "beat this site"

**Must-fix vs. reference (non-negotiable):**
- Single hero treatment, not a video stack
- Real SVG logo, not a GIF
- One consistent stat set, no contradictions
- Zero duplicated sections
- Lean 6-page IA (no Blog/Careers)

**High-leverage upgrades:**
- Reuse logo motifs (bars, circular bracket, blueprint grid) as recurring visual language
- Image-first service cards with real project photography over stock as soon as client supplies it
- One low-friction contact path (form + click-to-call/WhatsApp), skip stacking multiple chat/contact widgets
- Schema.org `LocalBusiness` JSON-LD with exact NAP data (already specified in build brief §7.7)

**Nice-to-have, lower priority:**
- Adapt (not copy) their stronger FAQ questions around shipping/safety of delivery
- Consider a single well-produced process/fabrication video (not 5 stacked) for the About or Process page, since it's a genuinely good idea executed poorly by the competitor

---

*Source: live inspection of https://maadhucreatives.com/ (page text extraction, DOM/computed-style inspection, and network request log) on 2026-07-15. This file complements [3D_Imagines_Website_Build_Prompt.md](3D_Imagines_Website_Build_Prompt.md) — section references above (§) point to that document.*
