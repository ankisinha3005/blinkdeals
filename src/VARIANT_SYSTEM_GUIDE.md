# Product Variant System Guide

## Overview

The BlinkDeals application now supports product variants for handling products with different sizes, weights, quantities, or colors. This guide explains how the variant system works and how it's displayed in the UI.

## Variant Types Supported

1. **Size** - For clothing, shoes, etc. (S, M, L, XL, XXL)
2. **Weight** - For groceries, food items, etc. (500g, 1kg, 5kg, 10kg)
3. **Quantity** - For pack sizes (Pack of 1, Pack of 3, Pack of 6)
4. **Color** - For products available in different colors

## Data Structure

### Type Definitions (types/index.ts)

```typescript
export interface ProductVariant {
  id: string;               // Unique identifier (e.g., 'm', '1kg', 'pack-of-3')
  label: string;            // Display label (e.g., 'M', '1 kg', 'Pack of 3')
  price: number;            // Price for this variant
  originalPrice: number;    // Original price before discount
  stock: number;            // Available stock for this variant
  isDefault?: boolean;      // Whether this is the default selection
}

export interface Product {
  // ... existing fields ...
  variantType?: 'size' | 'weight' | 'quantity' | 'color';
  variants?: ProductVariant[];
}
```

### Example Product with Variants (data/products.ts)

```typescript
// T-Shirt with SIZE variants
{
  id: 11,
  name: "Premium Cotton T-Shirt",
  price: 499,              // Base price (usually same as default variant)
  originalPrice: 999,
  stock: 150,              // Total stock across all variants
  variantType: 'size',
  variants: [
    { id: 's', label: 'S', price: 499, originalPrice: 999, stock: 45 },
    { id: 'm', label: 'M', price: 499, originalPrice: 999, stock: 60, isDefault: true },
    { id: 'l', label: 'L', price: 499, originalPrice: 999, stock: 30 },
    { id: 'xl', label: 'XL', price: 549, originalPrice: 1099, stock: 15 }
  ]
}

// Rice with WEIGHT variants
{
  id: 12,
  name: "Organic Basmati Rice",
  price: 180,
  originalPrice: 250,
  stock: 500,
  variantType: 'weight',
  variants: [
    { id: '1kg', label: '1 kg', price: 180, originalPrice: 250, stock: 200, isDefault: true },
    { id: '5kg', label: '5 kg', price: 850, originalPrice: 1200, stock: 150 },
    { id: '10kg', label: '10 kg', price: 1650, originalPrice: 2300, stock: 100 },
    { id: '25kg', label: '25 kg', price: 3999, originalPrice: 5500, stock: 50 }
  ]
}

// Water Bottle with QUANTITY variants
{
  id: 13,
  name: "Stainless Steel Water Bottle",
  price: 399,
  originalPrice: 799,
  stock: 300,
  variantType: 'quantity',
  variants: [
    { id: 'single', label: 'Pack of 1', price: 399, originalPrice: 799, stock: 150, isDefault: true },
    { id: 'double', label: 'Pack of 2', price: 749, originalPrice: 1499, stock: 100 },
    { id: 'family', label: 'Pack of 4', price: 1399, originalPrice: 2799, stock: 50 }
  ]
}
```

## UI Implementation

### Product Details Page

The ProductDetails component shows variant selection UI with:

1. **Variant Selector Section**
   - Displays appropriate icon based on variant type (Ruler for size, Weight for weight, Package for quantity)
   - Shows label like "Select Size", "Select Weight", or "Select Quantity"
   - Displays currently selected variant in parentheses

2. **Variant Buttons**
   - Grid of clickable buttons for each variant
   - Selected variant has colored border and background
   - Shows checkmark icon on selected variant
   - Displays price if different from default
   - Shows "Out of Stock" overlay for unavailable variants
   - Disabled state for out-of-stock variants

3. **Dynamic Price Display**
   - Price updates based on selected variant
   - Discount percentage recalculated for each variant
   - Stock alert shows remaining stock for selected variant

### Checkout Page

The checkout page can show variant information in the product summary:

```tsx
<div className="product-summary">
  <h3>{product.name}</h3>
  {selectedVariant && (
    <p className="variant-info">
      {product.variantType === 'size' && `Size: ${selectedVariant.label}`}
      {product.variantType === 'weight' && `Weight: ${selectedVariant.label}`}
      {product.variantType === 'quantity' && `Quantity: ${selectedVariant.label}`}
    </p>
  )}
  <p className="price">{formatCurrency(selectedVariant?.price || product.price)}</p>
</div>
```

### Orders Page

Orders should display variant information:

```tsx
<div className="order-item">
  <div className="product-info">
    <h4>{product.name}</h4>
    {order.variant && (
      <p className="text-sm text-gray-600">
        {order.variantLabel}
      </p>
    )}
    <p className="price">{formatCurrency(order.price)}</p>
  </div>
</div>
```

## Backend API Structure

### Creating an Order with Variant

```typescript
POST /api/orders
{
  productId: number,
  variantId?: string,           // Optional - only if product has variants
  quantity: number,
  addressId: string,
  // ... other fields
}
```

### Order Response

```typescript
{
  id: string,
  productId: number,
  productName: string,
  variantId?: string,
  variantLabel?: string,        // e.g., "M", "1 kg", "Pack of 3"
  variantType?: string,         // e.g., "size", "weight", "quantity"
  price: number,                // Price for the specific variant
  quantity: number,
  total: number,
  // ... other fields
}
```

## Best Practices

1. **Always Set a Default Variant**
   - Mark one variant as `isDefault: true`
   - This ensures users see a pre-selected option

2. **Validate Stock**
   - Check variant stock before allowing purchase
   - Disable out-of-stock variants in UI

3. **Price Consistency**
   - Update all price displays when variant changes
   - Recalculate discounts based on variant prices

4. **Clear Communication**
   - Show variant selection prominently
   - Display selected variant in cart/checkout
   - Include variant info in order confirmation

5. **Mobile Responsiveness**
   - Ensure variant buttons are touch-friendly
   - Use horizontal scrolling for many variants
   - Stack variant options on small screens

## Visual Examples

### Size Selector (Clothing)
```
┌─────────────────────────────────────┐
│ 📏 Select Size (M)                  │
├─────────────────────────────────────┤
│  ┌──┐  ┌──┐  ┌──┐  ┌──┐           │
│  │S │  │M✓│  │L │  │XL│           │
│  └──┘  └──┘  └──┘  └──┘           │
│                                     │
│        Selected variant              │
│        has colored border            │
└─────────────────────────────────────┘
```

### Weight Selector (Groceries)
```
┌─────────────────────────────────────┐
│ ⚖️  Select Weight (1 kg)            │
├─────────────────────────────────────┤
│  ┌─────┐  ┌─────┐  ┌──────┐        │
│  │1 kg✓│  │5 kg │  │10 kg │        │
│  │ ₹180│  │ ₹850│  │₹1,650│        │
│  └─────┘  └─────┘  └──────┘        │
│                                     │
│   Different prices shown             │
│   for each weight option             │
└─────────────────────────────────────┘
```

### Quantity Selector (Pack Sizes)
```
┌─────────────────────────────────────┐
│ 📦 Select Quantity (Pack of 1)      │
├─────────────────────────────────────┤
│  ┌───────────┐  ┌───────────┐      │
│  │Pack of 1✓ │  │Pack of 2  │      │
│  │   ₹399    │  │   ₹749    │      │
│  └───────────┘  └───────────┘      │
│                                     │
│  ┌───────────┐                      │
│  │Pack of 4  │                      │
│  │  ₹1,399   │                      │
│  └───────────┘                      │
└─────────────────────────────────────┘
```

## Integration Checklist

- [x] Update types/index.ts with variant interfaces
- [x] Add sample products with variants in data/products.ts
- [x] Update ProductDetails component to show variant selector
- [x] Handle variant selection state
- [x] Update price/stock display based on selected variant
- [x] Update CheckoutPage to pass variant information
- [x] Update OrdersPage to display variant in order history
- [x] Add variant info to order creation API calls
- [x] Store selected variant in app state
- [ ] Include variant in share functionality (optional enhancement)

## Complete Implementation Summary

### ✅ What's Been Implemented

1. **Type System** (`types/index.ts`)
   - `ProductVariant` interface with full variant support
   - Extended `Product` interface with `variantType` and `variants` array

2. **Sample Data** (`data/products.ts`)
   - Product #11: Premium Cotton T-Shirt (SIZE variants)
   - Product #12: Organic Basmati Rice (WEIGHT variants)
   - Product #13: Stainless Steel Water Bottle (QUANTITY variants)

3. **Product Details Page** (`components/ProductDetails.tsx`)
   - Dynamic variant selector with icons
   - Color-coded variant buttons
   - Real-time price/stock updates
   - Visual feedback for selection
   - Out-of-stock handling

4. **Checkout Page** (`components/CheckoutPage.tsx`)
   - Displays selected variant with badge
   - Uses variant price for calculations
   - Shows variant stock limits
   - Includes variant in order data

5. **Orders Page** (`components/OrdersPage.tsx`)
   - Shows variant badges in order history
   - Color-coded by variant type
   - Displays variant icons
   - Mock orders include variant examples

6. **App State Management** (`App.tsx`)
   - Tracks selected variant across pages
   - Passes variant from Details → Checkout
   - Clears variant on navigation back

### 🎨 UI Features

- **Size Variants**: Indigo-themed badges with Ruler icon
- **Weight Variants**: Green-themed badges with Weight icon  
- **Quantity Variants**: Purple-themed badges with Package icon
- **Smart Labels**: Context-aware display text (e.g., "Size: M" vs "1 kg")

### 📊 Data Flow

```
ProductDetails (select variant)
    ↓
App.tsx (store selectedVariant)
    ↓
CheckoutPage (display & use variant)
    ↓
Order Creation (include variant in API call)
    ↓
OrdersPage (display variant in history)
```

## Future Enhancements

1. **Color Variants** - Show color swatches instead of buttons
2. **Image Variants** - Change product image based on selected variant
3. **Variant Combinations** - Support multiple variant types (e.g., Size + Color)
4. **Bulk Discounts** - Apply discounts for higher quantity variants
5. **Variant Availability Notifications** - Alert users when variants come back in stock
6. **Quick Add to Cart** - Add variant selection in carousel/homepage
7. **Variant Comparison** - Show price comparison table for all variants
