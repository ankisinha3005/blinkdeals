# Complete Variant System Flow

## User Journey: Purchasing a Product with Variants

### Step 1: Product Details Page
**User sees variant options and selects one**

```
┌──────────────────────────────────────────────────────────┐
│  Premium Cotton T-Shirt                                  │
│  ⭐⭐⭐⭐⭐ (128 reviews)                                  │
│                                                          │
│  Special Price: ₹499  ~~₹999~~  Save ₹500               │
│                                                          │
│  📏 Select Size (M)                                      │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                           │
│  │ S  │ │ M✓ │ │ L  │ │ XL │                           │
│  │    │ │    │ │    │ │₹549│                           │
│  └────┘ └────┘ └────┘ └────┘                           │
│                                                          │
│  [🛒 Buy Now]  [Share]                                  │
│                                                          │
│  ⚠️  Only 60 items left in stock!                       │
└──────────────────────────────────────────────────────────┘
```

**What Happens:**
- User clicks "M" size variant
- Price updates to ₹499 (M variant price)
- Stock shows 60 items (M variant stock)
- Selected variant highlighted with checkmark
- Click "Buy Now" → Goes to Checkout

---

### Step 2: Checkout Page
**User sees selected variant and completes purchase**

```
┌──────────────────────────────────────────────────────────┐
│  Order Summary                                           │
│  ┌────────────────────────────────────────────────────┐ │
│  │ [Img] Premium Cotton T-Shirt                       │ │
│  │       ┌──────────────┐                             │ │
│  │       │📏 Size: M    │ (variant badge)            │ │
│  │       └──────────────┘                             │ │
│  │       ₹499                                         │ │
│  └────────────────────────────────────────────────────┘ │
│                                                          │
│  Quantity: [−] 2 [+]                                     │
│  60 items available                                      │
│                                                          │
│  Subtotal      ₹998                                      │
│  Delivery      FREE                                      │
│  ──────────────────                                      │
│  Total Amount  ₹998                                      │
│                                                          │
│  [🔒 Place Order]                                        │
└──────────────────────────────────────────────────────────┘
```

**What Happens:**
- Variant badge shows "Size: M"
- Price calculation uses ₹499 (M variant price)
- Quantity limited to 60 (M variant stock)
- Click "Place Order" → Creates order with variant info

**Order Data Sent to Backend:**
```json
{
  "productId": 11,
  "productName": "Premium Cotton T-Shirt",
  "quantity": 2,
  "addressId": "1",
  "subtotal": 998,
  "shipping": 0,
  "total": 998,
  "variantId": "m",
  "variantLabel": "M",
  "variantType": "size"
}
```

---

### Step 3: Order Confirmation
**User receives confirmation**

```
┌──────────────────────────────────────────────────────────┐
│  ✅ Order placed successfully! 🎉                        │
│                                                          │
│  Order ID: ORD002                                        │
│  Estimated Delivery: 5-7 business days                  │
└──────────────────────────────────────────────────────────┘
```

---

### Step 4: My Orders Page
**User can view order with variant details**

```
┌──────────────────────────────────────────────────────────┐
│  My Orders                                               │
│  ════════════════════════════════════════════════════    │
│                                                          │
│  ┌────────────────────────────────────────────────────┐ │
│  │ [Img] Premium Cotton T-Shirt                       │ │
│  │       ┌──────────────┐                             │ │
│  │       │📏 Size: M    │ (indigo badge)             │ │
│  │       └──────────────┘                             │ │
│  │       Order ID: ORD002                             │ │
│  │                                      ₹499          │ │
│  │                                      Qty: 2        │ │
│  │                                                    │ │
│  │  ✅ Delivered  📅 on 12 Oct, 2025                 │ │
│  │                                                    │ │
│  │  [💬 Review Product]                              │ │
│  └────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

**What's Displayed:**
- Product name with variant badge
- Variant-specific price (₹499 for Size M)
- Quantity ordered (2)
- Delivery status
- Option to review

---

## Multiple Variant Types Examples

### Weight Variant (Groceries)

**Product Details:**
```
Organic Basmati Rice
⚖️  Select Weight (1 kg)

[1 kg✓]  [5 kg]   [10 kg]  [25 kg]
 ₹180     ₹850    ₹1,650   ₹3,999

Stock: 200 items available
```

**Checkout:**
```
Order Summary
[Img] Organic Basmati Rice
      ┌─────────────────┐
      │⚖️  Weight: 5 kg │ (green badge)
      └─────────────────┘
      ₹850
```

**My Orders:**
```
[Img] Organic Basmati Rice
      ┌─────────────────┐
      │⚖️  Weight: 5 kg │ (green badge)
      └─────────────────┘
      Order ID: ORD003
                  ₹850
```

---

### Quantity Variant (Pack Sizes)

**Product Details:**
```
Stainless Steel Water Bottle
📦 Select Quantity (Pack of 1)

[Pack of 1✓]  [Pack of 2]  [Pack of 4]
    ₹399         ₹749        ₹1,399

Stock: 150 items available
```

**Checkout:**
```
Order Summary
[Img] Stainless Steel Water Bottle
      ┌──────────────┐
      │📦 Pack of 4  │ (purple badge)
      └──────────────┘
      ₹1,399
```

**My Orders:**
```
[Img] Stainless Steel Water Bottle
      ┌──────────────┐
      │📦 Pack of 4  │ (purple badge)
      └──────────────┘
      Order ID: ORD004
              ₹1,399
```

---

## Data Flow Diagram

```
┌─────────────────┐
│ Product Details │
│   Select: M     │
└────────┬────────┘
         │ onBuyNow(variant)
         ↓
┌─────────────────┐
│    App.tsx      │
│ setSelectedVariant
└────────┬────────┘
         │ Pass variant
         ↓
┌─────────────────┐
│  Checkout Page  │
│  Display: M     │
│  Price: ₹499    │
│  Stock: 60      │
└────────┬────────┘
         │ handleCheckout()
         ↓
┌─────────────────┐
│  Backend API    │
│  POST /orders   │
│  with variant   │
└────────┬────────┘
         │ Order Created
         ↓
┌─────────────────┐
│  Orders Page    │
│  GET /orders    │
│  Display variant│
└─────────────────┘
```

---

## State Management

### App.tsx State
```typescript
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);

// When user clicks Buy Now from ProductDetails
const handleBuyNowFromDetails = (variant?: ProductVariant) => {
  setSelectedVariant(variant || null);
  setCurrentPage('checkout');
};

// Clear on back navigation
const handleBack = () => {
  setCurrentPage('home');
  setSelectedProduct(null);
  setSelectedVariant(null);
};
```

### ProductDetails.tsx State
```typescript
const defaultVariant = product.variants?.find(v => v.isDefault) || product.variants?.[0];
const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(defaultVariant);

// Update price/stock based on selected variant
const currentPrice = selectedVariant?.price ?? product.price;
const currentStock = selectedVariant?.stock ?? product.stock;
```

### CheckoutPage.tsx Props
```typescript
interface CheckoutPageProps {
  product: Product;
  selectedVariant?: ProductVariant | null;
  // ... other props
}

// Use variant price for calculations
const currentPrice = selectedVariant?.price ?? product.price;
const currentStock = selectedVariant?.stock ?? product.stock;
const subtotal = currentPrice * quantity;
```

---

## Variant Badge Color System

| Type     | Border      | Background | Text       | Use Case |
|----------|-------------|------------|------------|----------|
| Size     | indigo-300  | indigo-50  | indigo-700 | Clothing, Shoes |
| Weight   | green-300   | green-50   | green-700  | Groceries, Food |
| Quantity | purple-300  | purple-50  | purple-700 | Pack Sizes |
| Color    | gray-300    | gray-50    | gray-700   | Future Use |

---

## Key Features

### ✅ Implemented
1. Variant selection in Product Details
2. Real-time price updates
3. Real-time stock updates
4. Visual feedback (checkmarks, borders)
5. Variant display in Checkout
6. Variant in order creation
7. Variant badges in Orders page
8. Color-coded by type
9. Contextual icons
10. Out-of-stock handling

### 🚀 Future Enhancements
1. Image switching based on variant
2. Variant combinations (Size + Color)
3. Bulk pricing for quantity variants
4. Variant comparison tables
5. Quick variant change in cart
6. Variant filters in order history
7. Reorder with variant pre-selection

---

## Summary

The variant system is now **fully functional** across all major pages:

- **Product Details**: Select variant → See updated price/stock
- **Checkout**: Review variant → Complete purchase
- **Orders**: View variant → Identify exact product ordered

This provides a complete, professional e-commerce experience for products with multiple options! 🎉
