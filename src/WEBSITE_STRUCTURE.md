# BlinkDeals - Website Structure & Wireframe Documentation

## 🎯 Overview

**BlinkDeals** is a complete flash sale e-commerce platform featuring real-time countdown timers, interactive product carousels, and a secure checkout flow. Built with React, TypeScript, and Tailwind CSS, it offers a modern and responsive shopping experience.

## 🎨 Brand Identity

- **Name**: BlinkDeals
- **Currency**: ₹ (Indian Rupees)
- **Primary Colors**: 
  - Indigo-300 (#A5B4FC)
  - Purple-300 (#D8B4FE)
- **Logo**: Lightning bolt (Zap icon) with gradient
- **Tagline**: "Amazing flash deals on electronics and gadgets"

## 📱 Pages & Components

### 1. Homepage (`/`)
**File**: `components/FlashSaleHomepage.tsx`

**Layout**:
```
┌─────────────────────────────────────────┐
│            Header Component              │
├─────────────────────────────────────────┤
│            Sale Timer                    │
│  [Countdown] [Status Badge] [Time Left] │
├─────────────────────────────────────────┤
│         Product Carousel                 │
│   [←] [Card] [Card*] [Card] [→]        │
│         * = Center/Focused              │
│         ○ ● ○ ○ ○ (Dots)               │
├─────────────────────────────────────────┤
│            Footer Component              │
└─────────────────────────────────────────┘
```

**Features**:
- Real-time countdown timer with multiple states
- 3-card carousel with center focus
- 10 products with navigation arrows
- Dot indicators for product position
- Responsive design (mobile & desktop)

**Components Used**:
- `Header` - Navigation and branding
- `SaleTimer` - Countdown with status
- `ProductCarousel` - Interactive product display
- `Footer` - Links and newsletter signup

---

### 2. Product Details Page
**File**: `components/ProductDetails.tsx`

**Layout**:
```
┌─────────────────────────────────────────┐
│            Header Component              │
├──────────────┬──────────────────────────┤
│              │  Product Name             │
│  Product     │  ★★★★★ (128 reviews)     │
│  Gallery     │  Description              │
│  [Main Img]  │  ──────────────────────   │
│  [📷][📷][📷]│  Price: ₹XXX  ₹XXX       │
│              │  Save: ₹XXX               │
│              │  Stock: X items left      │
│              │  [Buy Now] [Share]        │
│              │  ──────────────────────   │
│              │  Product Features         │
│              │  ✓ Feature 1              │
│              │  ✓ Feature 2              │
├──────────────┴──────────────────────────┤
│  Product Details (Specifications)        │
│  Seller Information                      │
├─────────────────────────────────────────┤
│            Footer Component              │
└─────────────────────────────────────────┘
```

**Features**:
- Image gallery with thumbnails
- Multiple product views
- Detailed specifications
- Seller information and ratings
- Social sharing functionality
- Buy Now CTA

---

### 3. Checkout Page
**File**: `components/CheckoutPage.tsx`

**Layout**:
```
┌─────────────────────────────────────────┐
│            Header Component              │
├──────────────────────┬──────────────────┤
│  Shipping Address    │  Order Summary   │
│  ○ Saved Address 1   │  [Product Img]   │
│  ● Saved Address 2   │  Product Name    │
│  ○ Saved Address 3   │  Price: ₹XXX     │
│                      │  ─────────────    │
│  [+ Add New Address] │  Quantity: [±]   │
│                      │  ─────────────    │
│  [New Address Form]  │  Subtotal: ₹XXX  │
│  • Name              │  Shipping: FREE   │
│  • Street            │  Total: ₹XXX     │
│  • City, ZIP         │  ─────────────    │
│  • Phone             │  [🔒 Complete]   │
│  [Save] [Cancel]     │  Purchase        │
├──────────────────────┴──────────────────┤
│            Footer Component              │
└─────────────────────────────────────────┘
```

**Features**:
- Saved addresses selection
- Add new address form
- Order summary with product
- Quantity adjustment
- Price breakdown
- Secure payment button

---

### 4. Login Page
**File**: `components/LoginPage.tsx`

**Layout**:
```
┌─────────────────────────────────────────┐
│   [Animated Background Gradients]        │
│                                          │
│        ⚡ BlinkDeals Logo                │
│                                          │
│   ┌──────────────────────────────┐     │
│   │ [← Back to Home]              │     │
│   │                                │     │
│   │  📱 Welcome Back!              │     │
│   │  Enter phone number to continue│     │
│   │                                │     │
│   │  [+91] [Phone Input]           │     │
│   │  [Send OTP Button]             │     │
│   │                                │     │
│   │  🔒 Secure Authentication      │     │
│   │  Your data is encrypted        │     │
│   │                                │     │
│   │  Terms & Privacy links         │     │
│   └──────────────────────────────┘     │
└─────────────────────────────────────────┘
```

**Authentication Flow**:
1. **Phone Number Entry**
   - Country code: +91 (India)
   - 10-digit validation
   - Send OTP button

2. **OTP Verification**
   - 6-digit OTP input
   - Auto-generated OTP (demo mode)
   - Resend OTP option
   - Verify and login

**Features**:
- Animated gradient background
- Two-step authentication
- Security badge
- Terms and privacy links
- Mobile-optimized design

---

## 🔧 Shared Components

### Header
**File**: `components/Header.tsx`

**Elements**:
- Logo (Zap icon + "BlinkDeals" with gradient)
- Navigation:
  - Become a Seller
  - Support
  - Share button (opens share dialog)
  - Login button

### Footer
**File**: `components/Footer.tsx`

**Sections**:
- About BlinkDeals
- Quick Links (About, Careers, Blog, etc.)
- Customer Support (Help, Shipping, Returns)
- Legal (Terms, Privacy, Cookies)
- Newsletter subscription
- Social media links
- Copyright notice

### Share Dialog
**File**: `components/ShareDialog.tsx`

**Features**:
- Social media sharing:
  - Facebook
  - Twitter
  - WhatsApp
  - Email
- Copy link functionality
- QR code display (visual placeholder)
- Responsive modal design

### Pre-Sale Animation
**File**: `components/PreSaleAnimation.tsx`

**Elements**:
- Floating animated icons
- Gradient background circles
- Feature pills
- Product preview images
- Loading state before sale starts

---

## 📊 Technical Stack

### Core Technologies
- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Motion (Framer Motion)** - Animations

### UI Components
- **ShadCN UI** - Component library
- **Lucide React** - Icons
- Custom components for specialized features

### State Management
- React hooks (useState)
- Props drilling for simple state

### Data Flow
```
App.tsx (Root)
  ↓
├─ FlashSaleHomepage
│  ├─ Header
│  ├─ SaleTimer
│  ├─ ProductCarousel
│  └─ Footer
│
├─ ProductDetails
│  ├─ Header
│  ├─ Product Gallery
│  ├─ ShareDialog
│  └─ Footer
│
├─ CheckoutPage
│  ├─ Header
│  ├─ Address Section
│  ├─ Order Summary
│  └─ Footer
│
└─ LoginPage
   └─ Authentication Flow
```

---

## 🎨 Design System

### Colors (Defined in `/constants/index.ts`)

```typescript
COLORS = {
  primary: "indigo-300",
  secondary: "purple-300",
  primaryDarker: "indigo-500",
  secondaryDarker: "purple-500",
  accent: "emerald-600"
}

GRADIENTS = {
  primary: "bg-gradient-to-r from-indigo-300 to-purple-300",
  primaryHover: "hover:from-indigo-400 hover:to-purple-400"
}
```

### Typography
- Default system fonts
- Responsive sizing
- Bold branding text with gradient

### Spacing
- Consistent padding/margins
- Responsive breakpoints
- Mobile-first approach

---

## 📁 File Structure

```
├── App.tsx                          # Root component
├── constants/
│   └── index.ts                     # Brand constants & colors
├── components/
│   ├── FlashSaleHomepage.tsx       # Main landing page
│   ├── ProductDetails.tsx           # Product detail view
│   ├── CheckoutPage.tsx             # Checkout & payment
│   ├── LoginPage.tsx                # Authentication
│   ├── Header.tsx                   # Global header
│   ├── Footer.tsx                   # Global footer
│   ├── SaleTimer.tsx                # Countdown timer
│   ├── ProductCarousel.tsx          # Product slider
│   ├── PreSaleAnimation.tsx         # Loading animation
│   ├── ShareDialog.tsx              # Social sharing
│   ├── WebsiteWireframe.tsx         # This documentation view
│   └── ui/                          # ShadCN components
├── data/
│   └── products.ts                  # Product data (10 items)
├── types/
│   └── index.ts                     # TypeScript interfaces
└── styles/
    └── globals.css                  # Global styles
```

---

## 🎯 Key Features

### 1. Real-time Countdown Timer
- Multiple states: "Starting in...", "Ends in...", "Sale ended"
- Dynamic time calculation
- Visual status badges
- Color-coded urgency

### 2. Interactive Product Carousel
- 3-card simultaneous display
- Center card emphasis
- Left/Right navigation arrows
- Dot indicators
- Smooth animations
- 10 products total

### 3. Product Details
- Image gallery with thumbnails
- Comprehensive specifications
- Seller information
- Stock availability
- Social sharing

### 4. Checkout Flow
- Saved addresses management
- Add new address functionality
- Order summary
- Quantity adjustment
- Price calculations
- Security indicators

### 5. Authentication
- Phone number login
- OTP verification
- Two-step security
- Demo mode for testing

### 6. Social Sharing
- Multi-platform support
- Copy link functionality
- QR code generation
- Shareable product links

---

## 🚀 Usage & Demo

### Test Mode Controls
Located in top-right corner (remove in production):

1. **Sale Started** - Shows active sale with countdown
2. **Sale Starting In** - Shows upcoming sale preview

### View Wireframe
Click "View Wireframe" button to see this documentation view

---

## 📱 Responsive Design

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile Optimizations
- Stacked layouts
- Touch-friendly buttons
- Simplified navigation
- Optimized carousels

---

## 🔒 Security Features

- Encrypted authentication
- Secure checkout indicators
- Protected user data
- HTTPS ready
- Input validation

---

## 💡 Future Enhancements

- Backend integration with Supabase
- Payment gateway integration
- User accounts & profiles
- Order history
- Product reviews system
- Advanced filtering
- Search functionality
- Wishlist feature
- Multi-language support
- Analytics integration

---

## 📄 License & Credits

Built with modern web technologies and best practices. Uses ShadCN UI components, Lucide icons, and Tailwind CSS for styling.

**Created**: 2025
**Version**: 1.0.0
**Platform**: BlinkDeals E-commerce

---

*This documentation is also available as an interactive wireframe view within the application.*
