# Visual Design Specifications & Guidelines

**Project:** Trustline Professional Services  
**Created:** May 10, 2026  
**Version:** 1.0

---

## 📐 Design System Specifications

### Color Palette Expansion

#### Current Colors (Keep These)
```
PRIMARY: Trust Blue #003366 (RGB: 0, 51, 102)
ACCENT: Sky Blue #E6F0FA (RGB: 230, 240, 250)
GOLD: Brand Gold #C89A2B (RGB: 200, 154, 43)
NEUTRAL: Border Grey #D1D9E6 (RGB: 209, 217, 230)
BACKGROUND: White #FFFFFF (RGB: 255, 255, 255)
```

#### Recommended New Colors
```
SUCCESS: Success Green #22C55E (RGB: 34, 197, 94)
  - Use for: Success states, confirmations, positive feedback
  - Shade: #16A34A (darker for text)

WARNING: Warning Orange #F97316 (RGB: 249, 115, 22)
  - Use for: Alerts, important notices
  - Shade: #EA580C (darker)

ERROR: Error Red #DC2626 (RGB: 220, 38, 38)
  - Use for: Errors, validation failures
  - Shade: #991B1B (darker)

HOVER: Trust Blue Dark #002244 (RGB: 0, 34, 68)
  - Use for: Darker hover states
  - Opacity: 90% of primary

TEXT SECONDARY: #666666 (RGB: 102, 102, 102)
  - Use for: Secondary text, metadata

TEXT LIGHT: #999999 (RGB: 153, 153, 153)
  - Use for: Disabled states, hints
```

#### Gradient Combinations (NEW)
```
GOLD-TO-BLUE:
  background: linear-gradient(135deg, #C89A2B 0%, #003366 100%)
  Use for: Headlines, special CTAs, premium elements

BLUE-TO-SKY:
  background: linear-gradient(180deg, #003366 0%, #E6F0FA 100%)
  Use for: Section backgrounds, depth

GOLD-TO-GREEN:
  background: linear-gradient(90deg, #C89A2B 0%, #22C55E 100%)
  Use for: Success states, achievement cards

SUCCESS-FADE:
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, transparent 100%)
  Use for: Background accents, subtle emphasis
```

### Typography System

#### Font Stack (Already Good)
```
Display/Headlines: Lexend (400, 500, 600, 700, 900)
Body: Inter (400, 500, 600, 700)
```

#### Font Sizing Scale (Refined)
```
h1: 64px (mobile: 40px) | weight: 700 | line-height: 1.2
h2: 48px (mobile: 32px) | weight: 700 | line-height: 1.25
h3: 32px (mobile: 24px) | weight: 600 | line-height: 1.35
h4: 24px (mobile: 20px) | weight: 600 | line-height: 1.4
h5: 20px (mobile: 18px) | weight: 600 | line-height: 1.5
h6: 18px (mobile: 16px) | weight: 600 | line-height: 1.6

p.large: 20px | weight: 400 | line-height: 1.6
p.base: 16px | weight: 400 | line-height: 1.6
p.small: 14px | weight: 400 | line-height: 1.5
p.xs: 12px | weight: 500 | line-height: 1.4
```

#### Text Styling Recommendations
- **Headlines:** Add subtle letter-spacing of 0.5px
- **CTAs:** Use weight 600, letter-spacing 0.25px
- **Labels:** Use weight 500, letter-spacing 0.25px, uppercase for emphasis
- **Emphasis:** Use gold color or gradient instead of italics
- **Links:** Underline on hover, gold color

### Spacing System

#### Spacing Scale
```
2px   - Micro details, borders
4px   - Padding in tight spaces
8px   - Small components, gaps
12px  - Comfortable internal spacing
16px  - Standard padding, margins
24px  - Section spacing
32px  - Component gaps
48px  - Section separators
64px  - Major section padding
96px  - Page-level spacing
```

#### Application
```
Cards: 24px padding
Buttons: 12px vertical, 24px horizontal
Form inputs: 12px padding
Section padding: 64px vertical, 24px horizontal
Gap between elements: 16px (cards), 12px (inline)
Hero section: 96px top/bottom
```

### Shadow System

#### Shadow Elevation
```
Elevation 1 (subtle):
  box-shadow: 0 1px 2px 0 rgba(0, 51, 102, 0.05)

Elevation 2 (cards):
  box-shadow: 0 4px 6px -1px rgba(0, 51, 102, 0.1),
             0 2px 4px -1px rgba(0, 51, 102, 0.06)

Elevation 3 (lifted):
  box-shadow: 0 10px 15px -3px rgba(0, 51, 102, 0.1),
             0 4px 6px -2px rgba(0, 51, 102, 0.05)

Elevation 4 (modal/important):
  box-shadow: 0 20px 25px -5px rgba(0, 51, 102, 0.1),
             0 10px 10px -5px rgba(0, 51, 102, 0.04)

Elevation 5 (hero/hero):
  box-shadow: 0 25px 50px -12px rgba(0, 51, 102, 0.25)

Glow (emphasis):
  box-shadow: 0 0 20px rgba(200, 154, 43, 0.4)
```

### Border & Radius System

#### Border Radius
```
2px   - Subtle, minimal curves
4px   - Small components, buttons
6px   - Standard elements
8px   - Larger containers
12px  - Cards, modals
16px  - Large sections
20px  - Extra premium feel
```

#### Border Styles
```
Default: 1px solid #D1D9E6
Emphasis: 2px solid #C89A2B (gold)
Primary: 2px solid #003366 (trust blue)
Success: 2px solid #22C55E
Error: 2px solid #DC2626
```

---

## 🎨 Component Visual Specifications

### Cards

#### Standard Card
```
Background: White
Border: 1px solid #D1D9E6
Border-radius: 12px
Padding: 24px
Shadow: Elevation 2
Transition: 0.3s ease

Hover State:
  - Scale: 1.02
  - Shadow: Elevation 3
  - Border-color: #C89A2B (optional accent)
```

#### Featured Card
```
Background: Linear gradient: #E6F0FA → white
Border: 2px solid #003366
Border-radius: 12px
Padding: 24px
Shadow: Elevation 3 + Glow

Hover State:
  - Scale: 1.03
  - Shadow: Elevation 4 + stronger glow
  - Border-color: #C89A2B
```

### Buttons

#### Primary Button
```
Background: Gradient (#003366 → #002244)
Color: White
Padding: 12px 24px
Border-radius: 6px
Font: weight 600, size 16px
Letter-spacing: 0.25px
Shadow: Elevation 2

Hover:
  - Background: Darker
  - Shadow: Elevation 3
  - Scale: 1.02
  - Duration: 0.2s

Active/Tap:
  - Scale: 0.98
  - Shadow: Elevation 1
```

#### Secondary Button
```
Background: Transparent with border
Border: 2px solid #003366
Color: #003366
Padding: 10px 22px (adjusted for border)
Border-radius: 6px

Hover:
  - Background: rgba(0, 51, 102, 0.05)
  - Border-color: #C89A2B
  - Color: #C89A2B
```

#### CTA Button (Gold)
```
Background: Gradient (#C89A2B → #A67C1B)
Color: White
Padding: 12px 28px
Border-radius: 6px
Font: weight 700, size 16px
Shadow: Elevation 3

Hover:
  - Scale: 1.05
  - Shadow: Elevation 4 + Glow
  - Duration: 0.2s

Pulse Animation (optional):
  - Pulse every 3 seconds
  - Slight scale and glow
```

### Form Elements

#### Input Fields
```
Background: White
Border: 1px solid #D1D9E6
Border-radius: 6px
Padding: 12px 16px
Font: size 16px, weight 400
Line-height: 1.5

Focus State:
  - Border: 2px solid #003366
  - Padding: 11px 15px (adjust for border)
  - Box-shadow: 0 0 0 3px rgba(0, 51, 102, 0.1)
  - Background: white (no change)

Error State:
  - Border: 2px solid #DC2626
  - Box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1)

Success State:
  - Border: 2px solid #22C55E
  - Box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.1)
```

#### Labels
```
Font: weight 500, size 14px
Color: #003366
Letter-spacing: 0.25px
Margin-bottom: 6px
Text-transform: (optional) capitalize first letter only
```

### Icons

#### Icon Sizing
```
XS: 16px (spacing info, inline)
S: 20px (list items)
M: 24px (standard)
L: 32px (prominent)
XL: 48px (hero)
2XL: 56px (large displays)
```

#### Icon Styling
```
Standard: Trust Blue (#003366)
Active: Brand Gold (#C89A2B)
Success: Success Green (#22C55E)
Error: Error Red (#DC2626)
Hover: Scale 1.1-1.2, animate 0.2s
```

---

## 🎬 Animation & Motion Guidelines

### Timing & Duration

#### Standard Durations
```
Micro-interactions: 150-200ms (hover effects, button feedback)
Transitions: 300-400ms (page changes, color shifts)
Animations: 500-800ms (entrance animations, shifts)
Long animations: 1500-3000ms (looping, background effects)
```

#### Easing Curves
```
ease-out: Used for entrance animations (UI appears)
ease-in: Used for exit animations (UI disappears)
ease-in-out: Used for transitions (state changes)
cubic-bezier(0.34, 1.56, 0.64, 1): Bounce effect
cubic-bezier(0.4, 0, 0.2, 1): Material Design standard
```

### Stagger Patterns
```
Card entrance: 100ms stagger
Item list: 50-100ms stagger
Section stagger: 150-200ms stagger
```

### Animation Types

#### Entrance Animations
- Fade in (opacity: 0 → 1)
- Slide up (translateY: 20-30px → 0)
- Scale in (scale: 0.9-0.95 → 1)
- Duration: 600-800ms
- Delay: Staggered

#### Hover Animations
- Scale: 1 → 1.02-1.05
- Shadow: Elevation increase
- Color: Transition to accent
- Duration: 200-300ms

#### Loading Animations
- Spinner: 360° rotate, 1s, repeat
- Skeleton: Shimmer, 2s, repeat
- Progress: Linear fill, proportional duration
- Pulse: Opacity pulse, 2-3s, repeat

#### Success/Error Animations
- Success: Slide in + checkmark bounce
- Error: Shake animation (horizontal)
- Duration: 300-500ms
- Visibility: 4-5 seconds before auto-dismiss

---

## 📱 Responsive Design Specifications

### Breakpoints
```
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
Large Desktop: > 1440px
```

### Animation Adjustments by Device
```
Mobile:
  - Reduce animation duration 20-30%
  - Reduce parallax intensity
  - Disable some continuous animations (preserve performance)
  - Shorter stagger delays

Tablet:
  - Standard durations
  - Moderate parallax
  - All animations enabled

Desktop:
  - Standard durations
  - Full parallax effects
  - Complex animations enabled
```

### Spacing Adjustments
```
Mobile: 16px base padding
Tablet: 24px base padding
Desktop: 32px-48px base padding
```

---

## 🎯 Visual Hierarchy Guidelines

### Attention-Grabbing Order
1. **Highest:** Gold/gradient headings, colored buttons with glow
2. **High:** White cards with shadows, primary navigation
3. **Medium:** Secondary text, borders, subtle elements
4. **Low:** Disabled states, helper text, muted colors

### Color Usage Rules
```
- Trust Blue: Primary UI, text, headers
- Brand Gold: Highlights, CTAs, success states, emphasis
- Sky Blue: Backgrounds, subtle sections
- Green: Success, confirmations, positive feedback
- Red: Errors, warnings, critical info
- Gray: Disabled, secondary, tertiary text
```

### Size & Weight Hierarchy
```
Page title (h1): 64px / 700
Section headers (h2): 48px / 700
Subsections (h3): 32px / 600
Card titles: 20px / 600
Body text: 16px / 400
Helper text: 12px / 500
```

---

## ✨ Polish & Refinement Details

### Micro-interactions
```
Button click: 50ms press, 200ms release
Form validation: Instant visual feedback with animation
Hover effects: Consistent 300ms smooth transition
Focus states: Clear 2-3px ring around interactive elements
Loading: Smooth spinner at corner/button
```

### Affordances
```
Clickable elements: Opacity change on hover
Form fields: Bottom border highlight on focus
Cards: Subtle shadow lift on hover
Links: Underline appear on hover
CTA buttons: Pulse or glow effect
```

### Visual Feedback States
```
Idle: Default styling
Hover: Color shift, scale 1.02-1.05
Active: Color darken, scale 0.98
Disabled: Opacity 0.5, no hover effect
Loading: Spinner, cursor pointer
Success: Green highlight + checkmark
Error: Red highlight + error icon
```

---

## 🎓 Design System Implementation

### CSS Classes for Quick Application
```css
.text-gradient-gold-blue {
  background: linear-gradient(135deg, #C89A2B 0%, #003366 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.card-elevated {
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 51, 102, 0.1);
  border: 1px solid #D1D9E6;
  transition: all 0.3s ease;
}

.card-elevated:hover {
  box-shadow: 0 20px 40px rgba(0, 51, 102, 0.15);
  border-color: #C89A2B;
  transform: translateY(-4px);
}

.btn-primary {
  background: linear-gradient(135deg, #003366 0%, #002244 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 15px -3px rgba(0, 51, 102, 0.1);
}
```

### Tailwind Extensions (tailwind.config.ts)
```typescript
colors: {
  'trust-blue': '#003366',
  'trust-blue-dark': '#002244',
  'accent-sky': '#E6F0FA',
  'brand-gold': '#C89A2B',
  'border-grey': '#D1D9E6',
  'success': '#22C55E',
  'warning': '#F97316',
  'error': '#DC2626',
}

// Add custom gradients
backgroundImage: {
  'gradient-gold-blue': 'linear-gradient(135deg, #C89A2B 0%, #003366 100%)',
  'gradient-blue-sky': 'linear-gradient(180deg, #003366 0%, #E6F0FA 100%)',
  'gradient-success': 'linear-gradient(90deg, #C89A2B 0%, #22C55E 100%)',
}
```

---

## 📋 Component Checklist

- [ ] Navigation: Sticky on scroll, smooth transitions
- [ ] Hero: Gradient text, floating elements, parallax
- [ ] Cards: Hover scale, shadow lift, border glow
- [ ] Buttons: Micro-interactions, loading states
- [ ] Forms: Floating labels, validation feedback
- [ ] Icons: Animation on hover, color transitions
- [ ] Sections: Background gradients, smooth transitions
- [ ] Footer: Subtle animations, hover effects
- [ ] Mobile: All animations adjusted for performance

---

## 🎨 Brand Visual Identity

### Core Visual Characteristics
- **Professional:** Clean lines, spaced generously
- **Trustworthy:** Blues dominate, gold accents for quality
- **Dynamic:** Smooth animations, gradient highlights
- **Accessible:** High contrast, readable text
- **Modern:** Contemporary spacing, smooth transitions

### Forbidden/Avoid
- ❌ Harsh animations (> 1 second without purpose)
- ❌ Overly bright colors (maintain professionalism)
- ❌ Clashing typefaces (stick to Lexend + Inter)
- ❌ Excessive shadows (maintain hierarchy)
- ❌ Too many color transitions (distract from content)

---

**Design System v1.0 - Complete**  
*All specifications ready for implementation*
