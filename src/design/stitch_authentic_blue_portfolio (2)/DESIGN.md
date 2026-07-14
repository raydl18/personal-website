---
name: Technical Blueprint
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
  on-surface-variant: '#44474e'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#74777f'
  outline-variant: '#c4c6cf'
  surface-tint: '#465f87'
  primary: '#00091b'
  on-primary: '#ffffff'
  primary-container: '#002045'
  on-primary-container: '#7089b3'
  inverse-primary: '#aec7f5'
  secondary: '#3d57b6'
  on-secondary: '#ffffff'
  secondary-container: '#829bfe'
  on-secondary-container: '#082d8d'
  tertiary: '#06090b'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d2123'
  on-tertiary-container: '#85888b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#aec7f5'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#2e476e'
  secondary-fixed: '#dde1ff'
  secondary-fixed-dim: '#b7c4ff'
  on-secondary-fixed: '#001452'
  on-secondary-fixed-variant: '#223e9d'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c4c7c9'
  on-tertiary-fixed: '#181c1e'
  on-tertiary-fixed-variant: '#434749'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Dm Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Dm Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Dm Sans
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
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.5'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1100px
  section-gap: 8rem
  element-gap: 1.5rem
  gutter: 2rem
  margin: 1rem
---

## Brand & Style
The brand identity is "Technical Blueprint"—a sophisticated, engineering-focused aesthetic that balances high-utility academic rigor with modern, premium software aesthetics. It targets a professional audience in the technology and recruitment sectors.

The visual style is **Corporate Modern with Glassmorphic accents**. It utilizes a clean, "blueprint" grid background to reinforce a sense of precision and construction. The design is characterized by generous whitespace, high-contrast typography, and subtle, layered depth. The emotional response is one of reliability, high intellect, and meticulous craftsmanship.

## Colors
The palette is rooted in a deep "Midnight Navy" (`#002045`) which serves as the primary anchor for headlines and interactive elements, conveying authority and stability. 

A "Cobalt" secondary color provides a bridge to modern software interfaces, while the background uses a very light "Ice Blue" (`#f8f9ff`) to distinguish it from pure white, reducing eye strain while maintaining a clean look. Functional accents like "Success Gold" are used sparingly for achievement callouts.

## Typography
The system employs a multi-font strategy to balance character and utility. **DM Sans** is used for headlines, providing a geometric, modern touch that feels both approachable and professional. **Newsreader** is used for narrative and body descriptions to introduce an intellectual, editorial quality that contrasts with the technical surroundings. **Inter** handles all structural, navigational, and technical data, providing a high-performance, utilitarian feel for labels and metadata.

Headlines use tight tracking and aggressive line heights to create a sense of impactful, modern clarity within the corporate framework.

## Layout & Spacing
The layout follows a **Fixed Grid** approach with a maximum container width of 1100px to ensure optimal readability on large displays. 

Vertical rhythm is defined by significant "Section Gaps" (128px) that allow each content block to breathe independently. A consistent 8px/16px base unit is used for component internal spacing. Large cards often use asymmetrical grid placements (e.g., 7-column / 5-column splits) to create visual interest.

## Elevation & Depth
Depth is created through **Glassmorphism and Tonal Layering** rather than traditional heavy shadows.

1.  **Level 0 (Base):** Light blue background with a 40px radial blueprint grid.
2.  **Level 1 (Cards):** Semi-transparent white surfaces (`rgba(255, 255, 255, 0.75)`) with a 12px backdrop blur and 1px soft borders.
3.  **Level 2 (Active/Hover):** "Hover-lift" effect where elements translate -12px on the Y-axis and gain a diffused, low-opacity shadow (`rgba(0, 32, 69, 0.12)`).

## Shapes
The shape language uses high-radius curves to soften the technical precision of the grid. Standard components use an 8px (0.5rem) radius. Large container cards and image wraps utilize much more aggressive "Oversized" rounding (up to 48px/3rem) to create a friendly, modern tech feel. "Capsule" shapes are reserved strictly for status indicators and decorative tags.

## Components

-   **Buttons:** Primary buttons are solid Midnight Navy with bold white Inter text. Hover states should include a subtle lift and an expanded shadow. Secondary buttons use a thick 2px border with transparent backgrounds.
-   **Tech Tags:** Small, capsule-shaped labels with 1px borders and uppercase bold text. These use a semi-transparent background to blend with the card they sit on.
-   **Cards:** Three variants:
    1.  **Glass Card:** Blurred background, used for informational blocks.
    2.  **Container Card:** Solid light-blue fill, used for large project showcases.
    3.  **Outline Card:** Transparent with a subtle border, used for lower-hierarchy items.
-   **Icons:** Use "Material Symbols Outlined" with a consistent weight of 400. In primary contexts, they should be colored in the primary navy or secondary cobalt.
-   **Navigation:** A sticky top bar with a high blur (backdrop-filter) and a very thin bottom border to separate it from the content without adding visual bulk.