# BlinkDeals API Documentation

## Overview
This document outlines the complete API requirements for the BlinkDeals flash sale e-commerce platform, based on component analysis.

## Base URL
```
Production: https://api.blinkdeals.in
Development: http://localhost:3001
```

## Authentication
All authenticated endpoints require the Firebase JWT token in the Authorization header:
```
Authorization: Bearer <firebase_jwt_token>
```

---

## 1. Products API

### GET /api/products
**Purpose**: Get all products for homepage carousel and flash sale

**Request**:
```http
GET /api/products
```

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Premium Wireless Headphones",
      "description": "High-quality wireless headphones with active noise cancellation and 30-hour battery life.",
      "price": 149.99,
      "originalPrice": 299.99,
      "discount": 50,
      "image": "https://images.unsplash.com/photo-1592375601764-5dd6be536f99",
      "images": [
        "https://images.unsplash.com/photo-1592375601764-5dd6be536f99",
        "https://images.unsplash.com/photo-1708164333066-dabc2dac17d2"
      ],
      "stock": 25,
      "category": "Audio",
      "variantType": "size",
      "variants": [
        {
          "id": "s",
          "label": "S",
          "price": 149.99,
          "originalPrice": 299.99,
          "stock": 5,
          "isDefault": false
        },
        {
          "id": "m",
          "label": "M",
          "price": 149.99,
          "originalPrice": 299.99,
          "stock": 15,
          "isDefault": true
        }
      ],
      "details": {
        "Brand": "AudioPro Elite",
        "Model": "APE-2000X",
        "Color": "Midnight Black",
        "Connectivity": "Bluetooth 5.2, USB-C",
        "Battery Life": "30 hours"
      },
      "seller": {
        "name": "TechWorld Electronics",
        "rating": 4.8,
        "totalSales": 15420,
        "description": "Your trusted source for premium electronics and audio equipment.",
        "joinedDate": "January 2020"
      }
    }
  ],
  "message": "Products retrieved successfully"
}
```

### GET /api/products/:id
**Purpose**: Get single product details for ProductDetails component

**Request**:
```http
GET /api/products/1
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Premium Wireless Headphones",
    "description": "High-quality wireless headphones with active noise cancellation and 30-hour battery life.",
    "price": 149.99,
    "originalPrice": 299.99,
    "discount": 50,
    "image": "https://images.unsplash.com/photo-1592375601764-5dd6be536f99",
    "images": [
      "https://images.unsplash.com/photo-1592375601764-5dd6be536f99",
      "https://images.unsplash.com/photo-1708164333066-dabc2dac17d2"
    ],
    "stock": 25,
    "category": "Audio",
    "variantType": "size",
    "variants": [
      {
        "id": "s",
        "label": "S",
        "price": 149.99,
        "originalPrice": 299.99,
        "stock": 5,
        "isDefault": false
      },
      {
        "id": "m",
        "label": "M",
        "price": 149.99,
        "originalPrice": 299.99,
        "stock": 15,
        "isDefault": true
      }
    ],
    "details": {
      "Brand": "AudioPro Elite",
      "Model": "APE-2000X",
      "Color": "Midnight Black",
      "Connectivity": "Bluetooth 5.2, USB-C",
      "Battery Life": "30 hours"
    },
    "seller": {
      "name": "TechWorld Electronics",
      "rating": 4.8,
      "totalSales": 15420,
      "description": "Your trusted source for premium electronics and audio equipment.",
      "joinedDate": "January 2020"
    }
  },
  "message": "Product retrieved successfully"
}
```

---

## 2. Flash Sale API

### GET /api/sales/active
**Purpose**: Get active flash sale information for SaleTimer component

**Request**:
```http
GET /api/sales/active
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "sale_001",
    "name": "Electronics Flash Sale",
    "startTime": "2024-01-15T10:00:00Z",
    "endTime": "2024-01-15T18:00:00Z",
    "status": "active",
    "description": "Amazing deals on electronics and gadgets"
  },
  "message": "Active sale retrieved successfully"
}
```

---

## 3. User Profile API

### GET /api/user/profile
**Purpose**: Get user profile data for ProfilePage component

**Request**:
```http
GET /api/user/profile
Authorization: Bearer <firebase_jwt_token>
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "user_123",
    "name": "John Doe",
    "phone": "9876543210",
    "email": "john@example.com",
    "gender": "male",
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  },
  "message": "Profile retrieved successfully"
}
```

### PUT /api/user/profile
**Purpose**: Update user profile data

**Request**:
```http
PUT /api/user/profile
Authorization: Bearer <firebase_jwt_token>
Content-Type: application/json

{
  "name": "John Smith",
  "email": "johnsmith@example.com",
  "gender": "male"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "user_123",
    "name": "John Smith",
    "phone": "9876543210",
    "email": "johnsmith@example.com",
    "gender": "male",
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-15T11:00:00Z"
  },
  "message": "Profile updated successfully"
}
```

---

## 4. Address Management API

### GET /api/user/addresses
**Purpose**: Get user's saved addresses for CheckoutPage component

**Request**:
```http
GET /api/user/addresses
Authorization: Bearer <firebase_jwt_token>
```

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": "addr_001",
      "name": "Rajesh Kumar",
      "street": "123 MG Road",
      "city": "Mumbai",
      "state": "Maharashtra",
      "zipCode": "400001",
      "phone": "+91 9876543210",
      "isDefault": true,
      "createdAt": "2024-01-01T00:00:00Z"
    },
    {
      "id": "addr_002",
      "name": "Rajesh Kumar",
      "street": "456 Park Street",
      "city": "Kolkata",
      "state": "West Bengal",
      "zipCode": "700016",
      "phone": "+91 9876543210",
      "isDefault": false,
      "createdAt": "2024-01-05T00:00:00Z"
    }
  ],
  "message": "Addresses retrieved successfully"
}
```

### POST /api/user/addresses
**Purpose**: Add new address

**Request**:
```http
POST /api/user/addresses
Authorization: Bearer <firebase_jwt_token>
Content-Type: application/json

{
  "name": "Rajesh Kumar",
  "street": "789 Main Street",
  "city": "Delhi",
  "state": "Delhi",
  "zipCode": "110001",
  "phone": "+91 9876543210",
  "isDefault": false
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "addr_003",
    "name": "Rajesh Kumar",
    "street": "789 Main Street",
    "city": "Delhi",
    "state": "Delhi",
    "zipCode": "110001",
    "phone": "+91 9876543210",
    "isDefault": false,
    "createdAt": "2024-01-15T12:00:00Z"
  },
  "message": "Address added successfully"
}
```

### PUT /api/user/addresses/:id
**Purpose**: Update existing address

**Request**:
```http
PUT /api/user/addresses/addr_001
Authorization: Bearer <firebase_jwt_token>
Content-Type: application/json

{
  "name": "Rajesh Kumar",
  "street": "123 Updated Street",
  "city": "Mumbai",
  "state": "Maharashtra",
  "zipCode": "400001",
  "phone": "+91 9876543210",
  "isDefault": true
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "addr_001",
    "name": "Rajesh Kumar",
    "street": "123 Updated Street",
    "city": "Mumbai",
    "state": "Maharashtra",
    "zipCode": "400001",
    "phone": "+91 9876543210",
    "isDefault": true,
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-15T12:30:00Z"
  },
  "message": "Address updated successfully"
}
```

### DELETE /api/user/addresses/:id
**Purpose**: Delete address

**Request**:
```http
DELETE /api/user/addresses/addr_002
Authorization: Bearer <firebase_jwt_token>
```

**Response**:
```json
{
  "success": true,
  "message": "Address deleted successfully"
}
```

---

## 5. Orders API

### GET /api/user/orders
**Purpose**: Get user's order history for OrdersPage component

**Request**:
```http
GET /api/user/orders
Authorization: Bearer <firebase_jwt_token>
```

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": "ORD001",
      "productId": 1,
      "productName": "Premium Wireless Headphones",
      "productImage": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "price": 2499,
      "quantity": 1,
      "status": "delivered",
      "orderDate": "2024-01-10T10:00:00Z",
      "deliveredDate": "2024-01-15T14:30:00Z",
      "hasReview": false,
      "variantId": "m",
      "variantLabel": "M",
      "variantType": "size",
      "address": {
        "name": "Rajesh Kumar",
        "street": "123 MG Road",
        "city": "Mumbai",
        "state": "Maharashtra",
        "zipCode": "400001",
        "phone": "+91 9876543210"
      }
    },
    {
      "id": "ORD002",
      "productId": 11,
      "productName": "Premium Cotton T-Shirt",
      "productImage": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      "price": 499,
      "quantity": 2,
      "status": "delivered",
      "orderDate": "2024-01-05T15:30:00Z",
      "deliveredDate": "2024-01-12T11:00:00Z",
      "hasReview": true,
      "variantId": "m",
      "variantLabel": "M",
      "variantType": "size",
      "address": {
        "name": "Rajesh Kumar",
        "street": "123 MG Road",
        "city": "Mumbai",
        "state": "Maharashtra",
        "zipCode": "400001",
        "phone": "+91 9876543210"
      }
    }
  ],
  "message": "Orders retrieved successfully"
}
```

### POST /api/orders
**Purpose**: Create new order from CheckoutPage

**Request**:
```http
POST /api/orders
Authorization: Bearer <firebase_jwt_token>
Content-Type: application/json

{
  "productId": 1,
  "variantId": "m",
  "quantity": 1,
  "addressId": "addr_001",
  "paymentMethod": "razorpay",
  "paymentId": "pay_123456789"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "ORD003",
    "productId": 1,
    "productName": "Premium Wireless Headphones",
    "productImage": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    "price": 2499,
    "quantity": 1,
    "status": "confirmed",
    "orderDate": "2024-01-15T12:00:00Z",
    "variantId": "m",
    "variantLabel": "M",
    "variantType": "size",
    "address": {
      "name": "Rajesh Kumar",
      "street": "123 MG Road",
      "city": "Mumbai",
      "state": "Maharashtra",
      "zipCode": "400001",
      "phone": "+91 9876543210"
    },
    "payment": {
      "method": "razorpay",
      "id": "pay_123456789",
      "status": "completed"
    }
  },
  "message": "Order created successfully"
}
```

### POST /api/orders/:id/review
**Purpose**: Submit order review

**Request**:
```http
POST /api/orders/ORD001/review
Authorization: Bearer <firebase_jwt_token>
Content-Type: application/json

{
  "rating": 5,
  "comment": "Excellent product, fast delivery!"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "review_001",
    "orderId": "ORD001",
    "rating": 5,
    "comment": "Excellent product, fast delivery!",
    "createdAt": "2024-01-15T16:00:00Z"
  },
  "message": "Review submitted successfully"
}
```

---

## 6. Seller Registration API

### POST /api/sellers/register
**Purpose**: Register as seller from BecomeSellerPage

**Request**:
```http
POST /api/sellers/register
Authorization: Bearer <firebase_jwt_token>
Content-Type: application/json

{
  "email": "seller@example.com",
  "phone": "9876543210",
  "businessName": "My Electronics Store",
  "businessType": "electronics",
  "experience": "5+ years",
  "message": "I want to sell electronics on your platform"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "seller_001",
    "userId": "user_123",
    "email": "seller@example.com",
    "phone": "9876543210",
    "businessName": "My Electronics Store",
    "businessType": "electronics",
    "experience": "5+ years",
    "status": "pending",
    "createdAt": "2024-01-15T12:00:00Z"
  },
  "message": "Seller registration submitted successfully"
}
```

---

## 7. Payment API

### POST /api/payments/create
**Purpose**: Create payment intent for checkout

**Request**:
```http
POST /api/payments/create
Authorization: Bearer <firebase_jwt_token>
Content-Type: application/json

{
  "amount": 2499,
  "currency": "INR",
  "orderId": "ORD003",
  "productId": 1,
  "variantId": "m",
  "quantity": 1
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "paymentId": "pay_123456789",
    "amount": 2499,
    "currency": "INR",
    "razorpayOrderId": "order_abc123",
    "razorpayKey": "rzp_test_123456789",
    "status": "created"
  },
  "message": "Payment intent created successfully"
}
```

### POST /api/payments/confirm
**Purpose**: Confirm payment after Razorpay success

**Request**:
```http
POST /api/payments/confirm
Authorization: Bearer <firebase_jwt_token>
Content-Type: application/json

{
  "paymentId": "pay_123456789",
  "razorpayPaymentId": "pay_razorpay123",
  "razorpaySignature": "signature_abc123"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "paymentId": "pay_123456789",
    "status": "completed",
    "orderId": "ORD003",
    "amount": 2499,
    "currency": "INR",
    "completedAt": "2024-01-15T12:05:00Z"
  },
  "message": "Payment confirmed successfully"
}
```

---

## Error Responses

All APIs return standardized error responses:

```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    "Specific error details"
  ],
  "code": "ERROR_CODE"
}
```

### Common Error Codes:
- `UNAUTHORIZED` - Invalid or missing authentication token
- `FORBIDDEN` - User doesn't have permission for this action
- `NOT_FOUND` - Resource not found
- `VALIDATION_ERROR` - Request validation failed
- `PAYMENT_FAILED` - Payment processing failed
- `INSUFFICIENT_STOCK` - Product out of stock
- `SERVER_ERROR` - Internal server error

---

## Data Types

### ProductVariant
```typescript
interface ProductVariant {
  id: string;
  label: string;
  price: number;
  originalPrice: number;
  stock: number;
  isDefault?: boolean;
}
```

### Product
```typescript
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  images?: string[];
  stock: number;
  category: string;
  details?: Record<string, string>;
  seller?: {
    name: string;
    rating: number;
    totalSales: number;
    description: string;
    joinedDate: string;
  };
  variantType?: 'size' | 'weight' | 'quantity' | 'color';
  variants?: ProductVariant[];
}
```

### UserData
```typescript
interface UserData {
  id: string;
  name: string;
  phone: string;
  email?: string;
  gender?: 'male' | 'female' | 'other';
  createdAt: string;
  updatedAt: string;
}
```

### Address
```typescript
interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  isDefault?: boolean;
  createdAt: string;
  updatedAt?: string;
}
```

### Order
```typescript
interface Order {
  id: string;
  productId: number;
  productName: string;
  productImage: string;
  price: number;
  quantity: number;
  status: 'confirmed' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  orderDate: string;
  deliveredDate?: string;
  cancelledDate?: string;
  hasReview: boolean;
  variantId?: string;
  variantLabel?: string;
  variantType?: 'size' | 'weight' | 'quantity' | 'color';
  address: Address;
  payment?: {
    method: string;
    id: string;
    status: string;
  };
}
```

---

## Rate Limiting

- **Unauthenticated requests**: 100 requests per hour per IP
- **Authenticated requests**: 1000 requests per hour per user
- **Payment endpoints**: 10 requests per hour per user

---

## Webhooks

### Order Status Updates
```http
POST /webhooks/order-status
Content-Type: application/json

{
  "orderId": "ORD001",
  "status": "delivered",
  "timestamp": "2024-01-15T14:30:00Z",
  "trackingNumber": "TRK123456789"
}
```

### Payment Status Updates
```http
POST /webhooks/payment-status
Content-Type: application/json

{
  "paymentId": "pay_123456789",
  "status": "completed",
  "timestamp": "2024-01-15T12:05:00Z",
  "orderId": "ORD003"
}
```

---

## Implementation Notes

1. **Authentication**: All authenticated endpoints require Firebase JWT token validation
2. **CORS**: Enable CORS for frontend domain
3. **Validation**: Implement request validation for all endpoints
4. **Logging**: Log all API requests and responses for debugging
5. **Caching**: Implement Redis caching for product data
6. **Database**: Use PostgreSQL for relational data, Redis for sessions
7. **File Storage**: Use AWS S3 or similar for product images
8. **Monitoring**: Implement API monitoring and alerting
9. **Security**: Implement rate limiting, input sanitization, and SQL injection prevention
10. **Testing**: Write comprehensive unit and integration tests

---

## Development Environment Setup

```bash
# Install dependencies
npm install

# Set environment variables
cp .env.example .env

# Run database migrations
npm run migrate

# Start development server
npm run dev

# Run tests
npm test
```

---

## Production Deployment

```bash
# Build application
npm run build

# Start production server
npm start

# Run health check
curl http://localhost:3001/health
```

This API documentation covers all the requirements identified from the component analysis and provides a complete backend integration guide for the BlinkDeals platform.
