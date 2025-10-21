# Authentication System - Backend Integration Guide

## Overview
This document describes the authentication flow and how to integrate it with a backend API.

## Current Implementation
The authentication system uses a mock implementation with simulated API calls. All authentication logic is centralized in `/services/authService.ts`.

## Authentication Flow

### 1. Phone Number Entry
- User enters their 10-digit phone number
- Client validates phone number format
- Client calls `authService.sendOTP(phone)`

### 2. OTP Verification
- Backend sends OTP via SMS (not visible to client in production)
- User enters the 6-digit OTP
- Client calls `authService.verifyOTP(phone, otp)`
- Backend responds with:
  - `isNewUser: true` → Proceed to registration
  - `isNewUser: false` → User data + JWT token → Login success

### 3. Registration (New Users Only)
- User enters their name (required) and email (optional)
- Client calls `authService.register(phone, name, email)`
- Backend creates user account and returns JWT token
- Client stores token and shows success animation

### 4. Success Animation
- Beautiful animated welcome screen
- Shows user's name
- Auto-redirects to homepage after 3 seconds

## API Endpoints Required

### 1. Send OTP
```
POST /api/auth/send-otp
Content-Type: application/json

Request:
{
  "phone": "9876543210"
}

Response:
{
  "success": true,
  "message": "OTP sent successfully"
}
```

### 2. Verify OTP
```
POST /api/auth/verify-otp
Content-Type: application/json

Request:
{
  "phone": "9876543210",
  "otp": "123456"
}

Response (Existing User):
{
  "success": true,
  "isNewUser": false,
  "user": {
    "id": "user123",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

Response (New User):
{
  "success": true,
  "isNewUser": true
}
```

### 3. Register User
```
POST /api/auth/register
Content-Type: application/json

Request:
{
  "phone": "9876543210",
  "name": "John Doe",
  "email": "john@example.com"  // optional
}

Response:
{
  "success": true,
  "user": {
    "id": "user123",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## Backend Integration Steps

### Step 1: Update authService.ts
Replace the mock implementations in `/services/authService.ts` with actual API calls:

```typescript
sendOTP: async (phone: string): Promise<SendOTPResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/auth/send-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone })
  });
  
  if (!response.ok) {
    throw new Error('Failed to send OTP');
  }
  
  return response.json();
}
```

### Step 2: Configure API Base URL
Create a configuration file:

```typescript
// /config/api.ts
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
```

### Step 3: Add Error Handling
The UI components already handle errors - just ensure your API returns proper error messages.

### Step 4: Token Storage
The service uses `localStorage` for demo purposes. For production:
- Consider using httpOnly cookies (more secure)
- Or encrypted localStorage with short expiry times
- Implement token refresh mechanism

### Step 5: Remove Mock Data
Once backend is integrated:
1. Remove the mock user database from `authService.ts`
2. Remove the demo OTP generation and alert in `LoginPage.tsx`
3. Update `sendOTP` to not return/display the OTP

## Security Considerations

1. **OTP Security**
   - OTPs should expire after 5-10 minutes
   - Implement rate limiting (max 3 attempts per phone number)
   - OTPs should never be logged or displayed in production

2. **Token Security**
   - Use JWT with appropriate expiry times
   - Store tokens securely (httpOnly cookies recommended)
   - Implement refresh token mechanism
   - Add token validation on protected routes

3. **Phone Number Validation**
   - Validate phone numbers on both client and server
   - Implement CAPTCHA for bot prevention
   - Add phone number verification limits

4. **Data Privacy**
   - Encrypt sensitive data in transit (HTTPS)
   - Hash/encrypt data at rest
   - Follow GDPR/data protection regulations

## Testing Existing Users
The mock system has two test users:
- Phone: 9876543210 → John Doe
- Phone: 9876543211 → Jane Smith

Any other phone number will be treated as a new user.

## Files Modified
- `/components/LoginPage.tsx` - Main authentication UI
- `/services/authService.ts` - Authentication API service
- `/types/index.ts` - Updated Page type to include 'success' step

## UI Features
- ✅ Animated background with floating blobs
- ✅ Step-by-step wizard (Phone → OTP → Register → Success)
- ✅ Beautiful success animation with confetti
- ✅ Auto-redirect after successful login
- ✅ Error handling with visual feedback
- ✅ Loading states for all async operations
- ✅ Responsive design for mobile and desktop
