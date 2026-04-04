# Project Joslyn: Design Brief & Brand Guidelines
**Status:** Version 1.0 (Initial Landing Page Launch)

## 1. Brand Mission
The **Joslyn Divine Foundation** is an impact-forward NGO dedicated to breaking the cycle of poverty in Freetown, Sierra Leone. The brand identity is built on **Radical Transparency**, **Dignity-First Storytelling**, and **Visionary Leadership**.

## 2. Visual Identity & Aesthetics
The website follows a **"Bento 2.0"** and **"Premium Frontend"** philosophy:
- **Liquid Glass Aesthetics**: Use of subtle shadows, rounding (24px), and clear content hierarchies to create a premium, state-of-the-art feel.
- **Micro-Animations**: Use of Framer Motion for spring-physics transitions and hover elevations to make the site feel "alive" and responsive.
- **Editorial Layout**: Spacious vertical padding (`var(--sp-9)`) and asymmetric grids create a layout that feels curated like a high-end magazine.

## 3. Brand Assets
- **Logo Mark**: The "Orange Logo Mark" is the primary icon used for favicons, apple touch icons, and shorthand branding.
- **Full Logo**: Used in the Header (Orange variant) and Footer (White variant on Dark background).

## 4. Color Palette
The palette is calibrated for high contrast and emotional impact:
- **Primary (Amber)**: `#F59E0B` — Used for accents, secondary buttons, and prices to denote value and hope.
- **Secondary (Teal)**: `#0D9488` — Used for trust signals, borders, and gradients to represent stability and growth.
- **Neutral/Contrast (Slate)**: `#0F172A` — Primary color for headings, dark backgrounds, and footer for authority and clarity.
- **Base (Off-White)**: `#FFFFFF` (Base 1) and `#F8FAFC` (Base 2) — Used for airy, distraction-free section backgrounds.

## 5. Typography
- **Core Font**: **'Outfit'** (Sans-Serif via Google Fonts).
- **Philosophy**: Geometric, modern, and highly legible.
- **Scale**:
  - `fs-hero`: 5rem - 7rem (Primary impact)
  - `fs-3xl`: 3.5rem (Section headings)
  - `fs-md`: 1.25rem (Body text lead-ins)
  - `fs-sm`: 0.9rem (Standard body and descriptions)

## 6. Layout Principles
- **Grid Systems**: 
  - **3-Column Bento**: Used for "Pillars of Power" and "Trust Signals" for balanced scannability.
  - **50/50 Split**: Used for "The Freetown Reality" with boxed imagery and interactive depth.
- **Spacing**: Consistent use of `--sp-9` for section gaps to ensure "editorial airiness."
- **Rounding**: Enforced `24px` border-radius for all primary content containers and image boxes.

## 7. Interaction Rules
- **Hover States**: All primary cards include a `translateY(-8px)` lift and a subtle scale increase on hover.
- **Buttons**:
  - **Primary (Amber)**: Outlined variants with solid Amber backgrounds on hover.
  - **Dark**: Solid contrast backgrounds for emphasis.
- **Links**: Disabled for the initial landing experience (`href="#"`) to maintain a focused user journey.

## 8. Development Stack
- **Framework**: Next.js 14+ (App Router).
- **Styling**: Vanilla CSS Modules (Scoped per component).
- **Animations**: Framer Motion & CSS custom properties for spring-physics.
- **Assets**: HD local photography curated in `/public/images`.

## 9. Future Roadmap
- **Dynamic Narrative**: Transitioning from static images to scrollytelling video assets.
- **Impact Scaling**: Integration of live data feeds for literacy and nutrition metrics within the "Trust" section.
