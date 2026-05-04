---
name: Modern Engineering Portfolio
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#43474e'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#455f88'
  primary: '#002045'
  on-primary: '#ffffff'
  primary-container: '#1a365d'
  on-primary-container: '#86a0cd'
  inverse-primary: '#adc7f7'
  secondary: '#3d57b6'
  on-secondary: '#ffffff'
  secondary-container: '#829bfe'
  on-secondary-container: '#082d8d'
  tertiary: '#1d2123'
  on-tertiary: '#ffffff'
  tertiary-container: '#333638'
  on-tertiary-container: '#9c9fa1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#adc7f7'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2d476f'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001552'
  on-secondary-fixed-variant: '#213e9d'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#191c1e'
  on-tertiary-fixed-variant: '#444749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Newsreader
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Newsreader
    fontSize: 17px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.5'
    letterSpacing: 0.1em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1100px
  section-gap: 8rem
  element-gap: 1.5rem
  gutter: 2rem
  margin: 1rem
---

## Brand & Style

This design system is built on the intersection of "Modern Engineering" and "Personal Branding." It moves away from the sterile, overly-templated look of common portfolios by introducing an academic editorial feel combined with the precision of a high-end SaaS product. 

The aesthetic is **Minimalist with Character**, focusing on structural integrity rather than decorative flourish. We use a "Blueprint" approach: everything is aligned to a strict grid, but softened by high-quality typography and tactile depth. The emotional goal is to project competence, intellectual curiosity, and professional reliability. We avoid the "AI-generated" look by shunning neon gradients and excessive glassmorphism in favor of solid surfaces, hair-line borders, and intentional whitespace.

## Colors

The palette is anchored by a sophisticated **Slate Navy** (Primary), which provides an authoritative and timeless base. 

- **Primary:** A deep, desaturated navy used for headings, primary buttons, and critical branding elements.
- **Secondary:** A slightly more vibrant blue used sparingly for interactive states and focus indicators.
- **Neutral/Background:** The design relies on a tiered system of whites and grays. We use `#FFFFFF` for the main canvas and `#F8FAFC` for container backgrounds to create subtle distinction without harsh lines.
- **Accents:** Borders use a light gray (`#E2E8F0`) to maintain the "blueprint" feel, while body text uses a deep charcoal (`#1E293B`) for maximum readability.

## Typography

This system employs a high-contrast typographic pairing to balance "Modern Tech" with "Academic Credibility."

- **Headings (Inter):** A functional, neutral sans-serif used for structure. Tight letter-spacing and heavy weights give it a bold, confident presence.
- **Body Text (Newsreader):** A sophisticated serif used for all long-form content. This adds a "Personal Brand" touch, making the portfolio feel like a curated publication or an engineering journal.
- **Labels & UI (Inter):** Small caps and medium-weight sans-serifs are used for metadata, tags, and navigation to maintain a technical, organized feel.

## Layout & Spacing

The layout follows a **Fixed-Width Centered Grid** philosophy. Content is contained within a 1100px spine to ensure readability remains high and line lengths for the serif body text stay comfortable.

- **Rhythm:** We use a generous 8rem vertical gap between major sections to allow the design to "breathe" and signal a transition in the narrative.
- **Grid:** A 12-column structure is used for internal layouts (like project cards), but the overall feel is driven by asymmetrical whitespace—often leaving one or two columns empty on the left to create a sophisticated, editorial look.

## Elevation & Depth

We avoid heavy, blurry shadows in favor of **Tonal Layers and Crisp Outlines**.

- **Surface Levels:** The base background is white. Cards and containers use a very subtle light-gray background (`#F8FAFC`) with a 1px border (`#E2E8F0`).
- **Refined Shadows:** When depth is required (e.g., a card on hover), use a "High-End Print" shadow: a very sharp, low-opacity offset shadow that mimics a physical object sitting just millimeters off a page. 
- **Micro-interactions:** Elevation is primarily communicated through subtle shifts in border color or background tone rather than dramatic movement.

## Shapes

The shape language is disciplined and professional. We use **Soft (0.25rem)** roundedness to move away from the "bubbly" feel of consumer apps toward something more architectural.

- **Standard Elements:** Buttons and input fields use a 4px (0.25rem) radius.
- **Featured Elements:** Larger cards or project images can use a 8px (0.5rem) radius to soften the visual impact of large containers.
- **Strict Adherence:** No pill shapes are permitted. All buttons are rectangular with soft corners to maintain the "Engineering" aesthetic.

## Components

### Buttons
Primary buttons use the Slate Navy background with white Inter typography. No gradients. Secondary buttons use a transparent background with a 1px border and a subtle gray hover state. 

### Cards
Cards are the primary vehicle for projects and experience. They should feature a 1px border and ample internal padding (2rem). Use the `label-caps` style for dates or categories at the top of the card to create a clear information hierarchy.

### Chips / Tags
Tags for tech stacks (e.g., "React", "Python") should be small, light gray backgrounds with `label-md` text. They should have sharp corners or the minimum 2px radius.

### Input Fields
Inputs follow the same logic as buttons: 1px borders, white backgrounds, and clear, high-contrast labels. Use the Slate Navy for the focus state border to provide a strong visual cue.

### Signature Component: The "Timeline"
For the experience section, use a vertical "hairline" stroke to connect roles, utilizing the Slate Navy for the dots/markers to emphasize the chronological progression of the engineering career.