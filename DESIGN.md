---
name: Ethereal Precision
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffafd3'
  on-tertiary: '#620040'
  tertiary-container: '#e364a7'
  on-tertiary-container: '#560038'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffd8e7'
  tertiary-fixed-dim: '#ffafd3'
  on-tertiary-fixed: '#3d0026'
  on-tertiary-fixed-variant: '#85145a'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Geist
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Geist
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 160px
  section-gap-mobile: 80px
  container-max: 1200px
  gutter: 24px
  margin-page: 40px
---

## Brand & Style
This design system is engineered for a visionary founder portfolio, balancing the restraint of high-end hardware with the kinetic energy of modern software. The brand personality is **Ambitious and Impactful**, designed to evoke a sense of "technological luxury." 

The style is a **Precision-Glassmorphism** hybrid. It takes the spatial depth of Linear, the typographic clarity of Apple, and the energetic fluidity of Stripe. The aesthetic relies on deep obsidian canvases, razor-thin specular highlights, and "hyper-surfaces" that feel both digital and tactile. Every element should feel like a custom-machined component within a larger, seamless machine.

## Colors
The palette is rooted in **Pure Obsidian (#000000)** and **Deep Charcoal (#0A0A0A)** to ensure infinite depth. The primary accent is a "Electric Violet to Cyan" gradient, representing innovation and fluid motion.

- **Primary:** Electric Violet (#6366F1) for key actions and focus states.
- **Secondary:** Cyan (#06B6D4) for data visualization and success indicators.
- **Surface:** We use a monochromatic stack of grays for hierarchy, never exceeding 10% lightness to maintain the dark-mode prestige.
- **Gradients:** Use sparse, high-intensity gradients for backgrounds to create "light leaks" that mimic studio photography.

## Typography
The typography system uses **Geist** for its mathematical precision and technical soul. Headlines should be set with tight tracking and high weights to create a "wall of text" impact for visionary statements. 

**Inter** serves as the workhorse for body copy, ensuring legibility at all sizes, while **JetBrains Mono** is reserved for technical labels, metadata, and "founder's logs," adding a layer of architectural detail. For Display roles, use `text-wrap: balance` to ensure optical perfection in headlines.

## Layout & Spacing
The layout follows a **Rigid 12-Column Grid** with extreme vertical breathing room. 

- **Breathing Room:** We use an 8px base unit. Sections are separated by massive gaps (160px+) to allow the eye to rest and emphasize the importance of each project or thought.
- **The "Linear" Alignment:** Elements should align strictly to the grid edges. Small decorative "plus" icons or hairline extensions should mark the intersections of the grid to provide a "blueprint" feel.
- **Responsiveness:** On mobile, margins reduce to 24px, and section gaps shrink to 80px. Grid columns collapse to a single column while maintaining the vertical rhythm.

## Elevation & Depth
Depth is not created with traditional shadows, but through **Additive Light and Blurs**.

- **Z-Axis Hierarchy:** Layers are defined by their backdrop-blur intensity. The further back an object, the darker and more opaque its surface. Foreground elements use `backdrop-filter: blur(20px)` and a subtle `0.5px` white border at 10% opacity.
- **The "Glow" Effect:** Active elements (like CTA buttons or featured cards) should have a soft, primary-colored outer glow (spread 40px, opacity 10%) to simulate a light source underneath the glass.
- **Specular Highlights:** Apply a linear-gradient border (top-left to bottom-right) that transitions from white (low opacity) to transparent to simulate light hitting the edge of a glass pane.

## Shapes
The design system uses a **Refined Rounded** language. 

- **Cards/Buttons:** Use `1rem` (16px) for standard cards. This provides a modern, friendly touch that contrasts against the sharp, technical typography.
- **Large Containers:** Use `1.5rem` (24px) for hero containers or major section wrappers.
- **Inner Elements:** Nested elements (like images inside cards) should have a radius that is 4px smaller than their parent to maintain concentric visual harmony.

## Components
### Buttons
Buttons are high-contrast. The primary CTA uses a solid-to-gradient background with a white label. The hover state triggers a "beam" effect—a subtle light sweep across the button surface.

### Glass Cards
Cards are the primary container. They feature a `1px` border using the `border_specular` variable. The background is a dark translucent fill. On hover, the border opacity increases, and the backdrop blur sharpens.

### Chips & Tags
Technical tags use **JetBrains Mono** and are styled as "Outline Tags." They use a subtle gray border and no background fill, keeping the UI light and airy.

### Interactive Timeline
A vertical hairline that connects "Milestones." Each milestone is a small dot that glows when scrolled into view. This utilizes the Stripe-inspired fluid motion for storytelling.

### Input Fields
Inputs are minimal: a single bottom border that "charges" (fills with gradient) when focused. No background fill is used until the user begins typing.

### Reveal Animations
All components should utilize `framer-motion` for reveal effects. Use "Spring" physics (stiffness: 100, damping: 20) for a premium, non-robotic feel.