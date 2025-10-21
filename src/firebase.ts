// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
  getAuth, 
  RecaptchaVerifier, 
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
  User
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYv4wkoE2KCWsgy0IyyDTtjp6X21ZgPU0",
  authDomain: "blinkdeals-43760.firebaseapp.com",
  projectId: "blinkdeals-43760",
  storageBucket: "blinkdeals-43760.firebasestorage.app",
  messagingSenderId: "348277316497",
  appId: "1:348277316497:web:5e50da12cd3943a8c3d830",
  measurementId: "G-CK9XS70L7T"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Set language for auth
auth.useDeviceLanguage();

// Global recaptcha verifier
let recaptchaVerifier: RecaptchaVerifier | null = null;

// Initialize reCAPTCHA verifier according to Firebase documentation
export const initializeRecaptcha = (containerId: string = 'recaptcha-container') => {
  try {
    if (recaptchaVerifier) {
      recaptchaVerifier.clear();
    }
    
    // Check if container exists
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`reCAPTCHA container with id '${containerId}' not found`);
      throw new Error(`reCAPTCHA container not found`);
    }
    
    // Create invisible reCAPTCHA verifier as per Firebase docs
    recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
      size: 'invisible',
      callback: (response: any) => {
        console.log('reCAPTCHA solved automatically');
      },
      'expired-callback': () => {
        console.log('reCAPTCHA expired');
      }
    });
    
    // Render the reCAPTCHA
    recaptchaVerifier.render();
    
    return recaptchaVerifier;
  } catch (error) {
    console.error('reCAPTCHA initialization error:', error);
    throw error;
  }
};

// Send OTP using Firebase according to official documentation
export const sendOTP = async (phoneNumber: string): Promise<{ verificationId: string }> => {
  try {
    // Initialize reCAPTCHA if not already done
    if (!recaptchaVerifier) {
      initializeRecaptcha();
    }
    
    const formattedPhone = `+91${phoneNumber}`;
    console.log('Sending OTP to:', formattedPhone);
    
    // Send OTP using signInWithPhoneNumber as per Firebase docs
    const confirmationResult = await signInWithPhoneNumber(auth, formattedPhone, recaptchaVerifier!);
    
    console.log('OTP sent successfully, verification ID:', confirmationResult.verificationId);
    
    return {
      verificationId: confirmationResult.verificationId
    };
  } catch (error: any) {
    console.error('Firebase sendOTP error:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    throw error;
  }
};

// Verify OTP using Firebase according to official documentation
export const verifyOTP = async (verificationId: string, otp: string): Promise<User> => {
  try {
    // Create credential using verification ID and OTP
    const credential = PhoneAuthProvider.credential(verificationId, otp);
    
    // Sign in with the credential
    const result = await signInWithCredential(auth, credential);
    
    console.log('OTP verified successfully, user:', result.user.uid);
    
    return result.user;
  } catch (error: any) {
    console.error('Firebase verifyOTP error:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    throw error;
  }
};

// Enable testing mode for development (disable app verification)
export const enableTestingMode = () => {
  // This disables reCAPTCHA for testing as per Firebase docs
  (auth as any).settings.appVerificationDisabledForTesting = true;
  console.log('Testing mode enabled - reCAPTCHA disabled');
};

// Check Firebase configuration
export const checkFirebaseConfig = () => {
  console.log('=== Firebase Configuration Check ===');
  console.log('Project ID:', firebaseConfig.projectId);
  console.log('Auth Domain:', firebaseConfig.authDomain);
  console.log('API Key:', firebaseConfig.apiKey ? 'Present' : 'Missing');
  console.log('App ID:', firebaseConfig.appId);
  console.log('=====================================');
  
  // Check if phone auth is enabled (this will show in console if not enabled)
  console.log('Note: If phone authentication fails, check Firebase Console:');
  console.log('1. Go to Authentication > Sign-in method');
  console.log('2. Enable Phone provider');
  console.log('3. Add your domain to authorized domains');
};

// Test Firebase connection
export const testFirebaseConnection = () => {
  console.log('Firebase app:', app);
  console.log('Firebase auth:', auth);
  console.log('Firebase config:', firebaseConfig);
  console.log('Current user:', auth.currentUser);
  console.log('Testing mode:', (auth as any).settings.appVerificationDisabledForTesting);
};

export { app, analytics, auth, recaptchaVerifier };
