# BlinkDeals Logo Pack

A comprehensive collection of CSS-based logos for the BlinkDeals flash sale application. All logos are built with React and Tailwind CSS - no images required!

## 📦 What's Included

### 1. **LogoFull**
Full logo with icon and text side-by-side.
- **Best for**: Headers, landing pages, main branding
- **Sizes**: `sm`, `md`, `lg`, `xl`
- **Variants**: `default`, `white`, `dark`, `gradient`

```tsx
import { LogoFull } from './components/logos';

<LogoFull size="lg" variant="gradient" />
```

---

### 2. **LogoHorizontal**
Horizontal layout with optional tagline "Flash Sales in a Blink".
- **Best for**: Navigation bars, footers, headers
- **Sizes**: `sm`, `md`, `lg`
- **Variants**: `default`, `white`, `dark`, `gradient`
- **Props**: `showTagline?: boolean`

```tsx
import { LogoHorizontal } from './components/logos';

<LogoHorizontal size="md" variant="default" showTagline />
```

---

### 3. **LogoStacked**
Vertically stacked logo with optional tagline below.
- **Best for**: Mobile views, centered layouts, cards
- **Sizes**: `sm`, `md`, `lg`
- **Variants**: `default`, `white`, `dark`, `gradient`
- **Props**: `showTagline?: boolean`

```tsx
import { LogoStacked } from './components/logos';

<LogoStacked size="md" variant="gradient" showTagline />
```

---

### 4. **LogoIcon**
Icon-only version (lightning bolt in a tilted square).
- **Best for**: Favicons, app icons, buttons, minimal spaces
- **Sizes**: `sm`, `md`, `lg`, `xl`
- **Variants**: `default`, `white`, `dark`, `gradient`, `outline`

```tsx
import { LogoIcon } from './components/logos';

<LogoIcon size="md" variant="outline" />
```

---

### 5. **LogoMinimal**
Text-only version without icon.
- **Best for**: Minimal designs, tight spaces, text-based layouts
- **Sizes**: `sm`, `md`, `lg`, `xl`
- **Variants**: `default`, `white`, `dark`, `gradient`

```tsx
import { LogoMinimal } from './components/logos';

<LogoMinimal size="xl" variant="gradient" />
```

---

### 6. **LogoAnimated**
Animated version with smooth motion effects.
- **Best for**: Loading screens, splash pages, hero sections
- **Sizes**: `sm`, `md`, `lg`
- **Variants**: `default`, `white`, `dark`, `gradient`
- **Note**: Uses Motion (Framer Motion) for animations

```tsx
import { LogoAnimated } from './components/logos';

<LogoAnimated size="lg" variant="gradient" />
```

---

### 7. **LogoBadge**
Badge-style logo with customizable text.
- **Best for**: Promotional banners, tags, labels, notifications
- **Sizes**: `sm`, `md`, `lg`
- **Variants**: `default`, `outline`, `gradient`
- **Props**: `text?: string` (default: "FLASH SALE")

```tsx
import { LogoBadge } from './components/logos';

<LogoBadge size="md" variant="gradient" text="HOT DEAL" />
<LogoBadge size="sm" variant="outline" text="NEW" />
```

---

### 8. **LogoCircle**
Circular icon with optional text below.
- **Best for**: Profile pictures, avatars, app icons, social media
- **Sizes**: `sm`, `md`, `lg`, `xl`
- **Variants**: `default`, `white`, `dark`, `gradient`, `outline`
- **Props**: `showText?: boolean`

```tsx
import { LogoCircle } from './components/logos';

<LogoCircle size="lg" variant="gradient" showText />
```

---

## 🎨 Variants

All logos support multiple color variants:

- **`default`** - Indigo color (#4F46E5)
- **`white`** - White (for dark backgrounds)
- **`dark`** - Dark gray (#111827)
- **`gradient`** - Indigo to purple gradient
- **`outline`** - Outlined style (available on some logos)

## 📏 Sizes

Most logos support multiple sizes:

- **`sm`** - Small (compact use)
- **`md`** - Medium (default, general use)
- **`lg`** - Large (prominent placement)
- **`xl`** - Extra Large (hero sections, available on some logos)

## 🚀 Quick Start

### Import Individual Logos

```tsx
import { LogoHorizontal } from './components/logos';
import { LogoIcon } from './components/logos';
import { LogoBadge } from './components/logos';
```

### Import Multiple Logos

```tsx
import { 
  LogoHorizontal, 
  LogoIcon, 
  LogoBadge,
  LogoAnimated 
} from './components/logos';
```

### Use in Your Component

```tsx
export function MyComponent() {
  return (
    <header className="bg-white shadow">
      <LogoHorizontal size="md" variant="gradient" showTagline />
    </header>
  );
}
```

## 📱 Recommended Use Cases

| Logo Type | Best For |
|-----------|----------|
| **LogoFull** | Main website header, landing page hero |
| **LogoHorizontal** | Navigation bar, footer, email headers |
| **LogoStacked** | Mobile layouts, centered cards, login pages |
| **LogoIcon** | Favicon, mobile app icon, sidebar |
| **LogoMinimal** | Tight spaces, breadcrumbs, minimal UI |
| **LogoAnimated** | Loading screen, splash page, onboarding |
| **LogoBadge** | Sale tags, promotional banners, notifications |
| **LogoCircle** | User avatar placeholder, app launcher icon |

## 🎯 Usage Examples

### Header with Horizontal Logo
```tsx
<header className="bg-white border-b">
  <div className="container mx-auto px-4 py-4">
    <LogoHorizontal size="md" variant="default" />
  </div>
</header>
```

### Dark Footer
```tsx
<footer className="bg-gray-900 text-white py-8">
  <LogoHorizontal size="sm" variant="white" showTagline />
</footer>
```

### Loading Screen
```tsx
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
  <LogoAnimated size="lg" variant="white" />
</div>
```

### Sale Badge
```tsx
<div className="relative">
  <img src={productImage} alt="Product" />
  <div className="absolute top-2 right-2">
    <LogoBadge size="sm" variant="gradient" text="FLASH SALE" />
  </div>
</div>
```

### Mobile App Icon
```tsx
<LogoCircle size="xl" variant="gradient" showText />
```

## 🎭 View Showcase

To see all logos in action, check out the `LogoShowcase.tsx` component:

```tsx
import { LogoShowcase } from './components/logos/LogoShowcase';

// Render the showcase
<LogoShowcase />
```

## 🛠️ Customization

All logos accept a `className` prop for additional customization:

```tsx
<LogoHorizontal 
  size="md" 
  variant="gradient" 
  className="hover:scale-105 transition-transform cursor-pointer"
/>
```

## 📝 Notes

- All logos are pure CSS/React - no image files needed
- Fully responsive and scalable
- Accessible with semantic HTML
- Optimized for performance
- Compatible with dark mode (use `white` variant)
- Can be animated with Tailwind or Motion

## 🎨 Brand Colors

The BlinkDeals brand uses the following color palette:

- **Primary**: Indigo (#4F46E5 to #6366F1)
- **Secondary**: Purple (#9333EA to #A855F7)
- **Gradient**: Indigo to Purple

## 📦 File Structure

```
components/logos/
├── index.tsx           # Main export file
├── LogoFull.tsx        # Full logo
├── LogoHorizontal.tsx  # Horizontal layout
├── LogoStacked.tsx     # Stacked layout
├── LogoIcon.tsx        # Icon only
├── LogoMinimal.tsx     # Text only
├── LogoAnimated.tsx    # Animated version
├── LogoBadge.tsx       # Badge style
├── LogoCircle.tsx      # Circular icon
├── LogoShowcase.tsx    # Demo showcase
└── README.md           # This file
```

## 💡 Pro Tips

1. Use `gradient` variant for modern, eye-catching branding
2. Use `white` variant on dark backgrounds for proper contrast
3. Use `LogoAnimated` sparingly to avoid overwhelming users
4. Pair `LogoBadge` with products to highlight special offers
5. Use `LogoIcon` for favicons and bookmarks
6. Consider using `LogoStacked` for mobile-first designs

---

**Created for BlinkDeals** - Flash Sales in a Blink ⚡
