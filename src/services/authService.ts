// ==================== AUTHENTICATION SERVICE ====================
// This file contains all authentication-related API calls
// Replace the mock implementations with actual API endpoints
// ==============================================================

interface SendOTPResponse {
  success: boolean;
  message: string;
}

interface VerifyOTPResponse {
  success: boolean;
  isNewUser: boolean;
  user?: {
    id: string;
    name: string;
    email?: string;
    phone: string;
  };
  token?: string;
}

interface RegisterUserResponse {
  success: boolean;
  user: {
    id: string;
    name: string;
    email?: string;
    phone: string;
  };
  token: string;
}

export const authService = {
  /**
   * Send OTP to the provided phone number
   * @param phone - 10-digit phone number
   * @returns Promise with success status
   */
  sendOTP: async (phone: string): Promise<SendOTPResponse> => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/auth/send-otp', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ phone })
    // });
    // return response.json();

    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'OTP sent successfully'
        });
      }, 1500);
    });
  },

  /**
   * Verify the OTP and check if user exists
   * @param phone - 10-digit phone number
   * @param otp - 6-digit OTP code
   * @returns Promise with user data or new user flag
   */
  verifyOTP: async (phone: string, otp: string): Promise<VerifyOTPResponse> => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/auth/verify-otp', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ phone, otp })
    // });
    // return response.json();

    // Mock implementation
    const mockUsers = new Map([
      ['9876543210', { id: '1', name: 'John Doe', email: 'john@example.com', phone: '9876543210' }],
      ['9876543211', { id: '2', name: 'Jane Smith', email: 'jane@example.com', phone: '9876543211' }],
    ]);

    return new Promise((resolve) => {
      setTimeout(() => {
        const user = mockUsers.get(phone);
        
        if (user) {
          // Existing user
          resolve({
            success: true,
            isNewUser: false,
            user: user,
            token: 'mock-jwt-token-' + Date.now()
          });
        } else {
          // New user
          resolve({
            success: true,
            isNewUser: true
          });
        }
      }, 1000);
    });
  },

  /**
   * Register a new user
   * @param phone - 10-digit phone number
   * @param name - User's full name
   * @param email - User's email (optional)
   * @returns Promise with user data and authentication token
   */
  register: async (phone: string, name: string, email?: string): Promise<RegisterUserResponse> => {
    // TODO: Replace with actual API call
    // const response = await fetch('/api/auth/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ phone, name, email })
    // });
    // return response.json();

    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          user: {
            id: 'new-user-' + Date.now(),
            name,
            email,
            phone
          },
          token: 'mock-jwt-token-' + Date.now()
        });
      }, 1000);
    });
  },

  /**
   * Store authentication token (e.g., in localStorage or secure storage)
   * @param token - JWT token from backend
   */
  storeToken: (token: string) => {
    // TODO: Implement secure token storage
    // For web: localStorage or httpOnly cookies (recommended)
    localStorage.setItem('auth_token', token);
  },

  /**
   * Get stored authentication token
   * @returns Stored token or null
   */
  getToken: (): string | null => {
    return localStorage.getItem('auth_token');
  },

  /**
   * Clear authentication token (logout)
   */
  clearToken: () => {
    localStorage.removeItem('auth_token');
  }
};
