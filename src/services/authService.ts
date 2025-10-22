// ==================== AUTHENTICATION SERVICE ====================
// This file contains all authentication-related API calls
// Integrated with Firebase Authentication for mobile OTP
// ==============================================================

import { initializeRecaptcha, sendOTP as firebaseSendOTP, verifyOTP as firebaseVerifyOTP, auth, testFirebaseConnection, enableTestingMode, checkFirebaseConfig } from '../firebase';
import { User as FirebaseUser } from 'firebase/auth';

interface SendOTPResponse {
  success: boolean;
  message: string;
  verificationId?: string;
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
  firebaseUser?: FirebaseUser;
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
   * Send OTP to the provided phone number using Firebase
   * @param phone - 10-digit phone number
   * @returns Promise with success status and verification ID
   */
  sendOTP: async (phone: string): Promise<SendOTPResponse> => {
    try {
      // Check Firebase configuration
      checkFirebaseConfig();
      
      // Enable testing mode for development (disables reCAPTCHA)
      enableTestingMode();
      
      // Test Firebase connection first
      testFirebaseConnection();
      
      // Initialize reCAPTCHA if not already done
      try {
        initializeRecaptcha();
      } catch (recaptchaError) {
        console.warn('reCAPTCHA initialization warning:', recaptchaError);
        // Continue anyway, Firebase might handle it
      }
      
      // Send OTP using Firebase
      const result = await firebaseSendOTP(phone);
      
      return {
        success: true,
        message: 'OTP sent successfully',
        verificationId: result.verificationId
      };
    } catch (error: any) {
      console.error('Firebase sendOTP error:', error);
      console.error('Error details:', {
        code: error.code,
        message: error.message,
        stack: error.stack
      });
      
      // Handle specific Firebase errors
      if (error.code === 'auth/too-many-requests') {
        return {
          success: false,
          message: 'Too many requests. Please try again later.'
        };
      } else if (error.code === 'auth/invalid-phone-number') {
        return {
          success: false,
          message: 'Invalid phone number format.'
        };
      } else if (error.code === 'auth/missing-recaptcha-token') {
        return {
          success: false,
          message: 'reCAPTCHA verification required. Please try again.'
        };
      } else if (error.code === 'auth/operation-not-allowed') {
        return {
          success: false,
          message: 'Phone authentication is not enabled. Please contact support.'
        };
      } else if (error.code === 'auth/quota-exceeded') {
        return {
          success: false,
          message: 'SMS quota exceeded. Please try again later.'
        };
      } else {
        return {
          success: false,
          message: `Failed to send OTP: ${error.message || 'Unknown error'}`
        };
      }
    }
  },

  /**
   * Verify the OTP using Firebase
   * @param verificationId - Verification ID from sendOTP
   * @param otp - 6-digit OTP code
   * @returns Promise with Firebase user data
   */
  verifyOTP: async (verificationId: string, otp: string): Promise<VerifyOTPResponse> => {
    try {
      // Verify OTP using Firebase
      const firebaseUser = await firebaseVerifyOTP(verificationId, otp);
      
      // Get user data from Firebase
      const phoneNumber = firebaseUser.phoneNumber?.replace('+91', '') || '';
      
      // Check if user has completed registration before using localStorage
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
      const isRegisteredUser = registeredUsers[phoneNumber];
      
      console.log('User verification check:', {
        phoneNumber,
        isRegisteredUser,
        hasDisplayName: !!firebaseUser.displayName,
        uid: firebaseUser.uid
      });
      
      if (isRegisteredUser) {
        // Existing registered user - return their stored data
        return {
          success: true,
          isNewUser: false,
          user: {
            id: firebaseUser.uid,
            name: isRegisteredUser.name || firebaseUser.displayName || '',
            email: isRegisteredUser.email || firebaseUser.email || undefined,
            phone: phoneNumber
          },
          token: await firebaseUser.getIdToken(),
          firebaseUser: firebaseUser
        };
      } else {
        // New user - needs to complete registration
        return {
          success: true,
          isNewUser: true,
          firebaseUser: firebaseUser
        };
      }
    } catch (error: any) {
      console.error('Firebase verifyOTP error:', error);
      
      // Handle specific Firebase errors
      if (error.code === 'auth/invalid-verification-code') {
        return {
          success: false,
          isNewUser: false,
          message: 'Invalid OTP code. Please try again.'
        };
      } else if (error.code === 'auth/code-expired') {
        return {
          success: false,
          isNewUser: false,
          message: 'OTP code has expired. Please request a new one.'
        };
      } else {
        return {
          success: false,
          isNewUser: false,
          message: 'OTP verification failed. Please try again.'
        };
      }
    }
  },

  /**
   * Register a new user by updating Firebase user profile and backend
   * @param firebaseUser - Firebase user object from verifyOTP
   * @param name - User's full name
   * @param email - User's email (optional)
   * @returns Promise with user data and authentication token
   */
  register: async (firebaseUser: FirebaseUser, name: string, email?: string): Promise<RegisterUserResponse> => {
    try {
      console.log('Registering user:', {
        uid: firebaseUser.uid,
        phoneNumber: firebaseUser.phoneNumber,
        currentEmail: firebaseUser.email,
        newEmail: email,
        displayName: firebaseUser.displayName,
        userType: typeof firebaseUser,
        hasUpdateProfile: typeof firebaseUser.updateProfile
      });

      // Check if firebaseUser is valid
      if (!firebaseUser || !firebaseUser.uid) {
        throw new Error('Invalid Firebase user object');
      }

      // Try to update profile, but don't fail if it's not available
      try {
        if (typeof firebaseUser.updateProfile === 'function') {
          await firebaseUser.updateProfile({
            displayName: name,
            photoURL: undefined
          });
          console.log('Profile updated successfully');
        } else {
          console.warn('updateProfile method not available, skipping profile update');
        }
      } catch (profileError) {
        console.warn('Profile update failed, continuing without it:', profileError);
        // Continue without updating profile - this is not critical
      }

      // Get Firebase token
      const token = await firebaseUser.getIdToken();
      
      const phoneNumber = firebaseUser.phoneNumber?.replace('+91', '') || '';
      
      console.log('Registration completed successfully');
      
      // Store user data in localStorage to track completed registrations
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
      registeredUsers[phoneNumber] = {
        name: name,
        email: email || undefined,
        phone: phoneNumber,
        uid: firebaseUser.uid,
        registeredAt: new Date().toISOString()
      };
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
      
      console.log('User data stored in localStorage');
      
      return {
        success: true,
        user: {
          id: firebaseUser.uid,
          name: name,
          email: email || undefined, // Store email separately, not in Firebase profile
          phone: phoneNumber
        },
        token: token
      };
    } catch (error: any) {
      console.error('Firebase register error:', error);
      console.error('Error details:', {
        code: error.code,
        message: error.message,
        stack: error.stack
      });
      
      // Handle specific Firebase errors
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('Email is already in use by another account.');
      } else if (error.code === 'auth/invalid-email') {
        throw new Error('Invalid email address.');
      } else if (error.code === 'auth/requires-recent-login') {
        throw new Error('Please sign in again to update your profile.');
      } else {
        throw new Error(`Registration failed: ${error.message || 'Unknown error'}`);
      }
    }
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
  },

  /**
   * Clear all stored user data (for testing/logout)
   */
  clearAllUserData: () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('registeredUsers');
    console.log('All user data cleared');
  },

  /**
   * Check if a phone number is already registered
   * @param phoneNumber - Phone number to check
   * @returns boolean indicating if user is registered
   */
  isUserRegistered: (phoneNumber: string): boolean => {
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '{}');
    return !!registeredUsers[phoneNumber];
  }
};
