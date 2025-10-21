import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Phone, Lock, ArrowLeft, Zap, Shield, Sparkles, User, Mail, CheckCircle } from 'lucide-react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from './ui/input-otp';
import { APP_NAME, COLORS, GRADIENTS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { authService } from '../services/authService';

interface LoginPageProps {
  onBack: () => void;
  onLoginSuccess: (userData: { id: string; name: string; phone: string; email?: string; gender?: 'male' | 'female' | 'other' }) => void;
}

export function LoginPage({ onBack, onLoginSuccess }: LoginPageProps) {
  const [step, setStep] = useState<'phone' | 'otp' | 'register' | 'success'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const validatePhoneNumber = (phone: string) => {
    // Simple validation for phone number (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  };

  const handleSendOTP = async () => {
    setError('');
    
    if (!validatePhoneNumber(phoneNumber)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    setIsLoading(true);
    
    try {
      // API call to send OTP
      const response = await authService.sendOTP(phoneNumber.replace(/\s/g, ''));
      
      if (response.success) {
        // For demo purposes, generate and show OTP
        const mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
        setGeneratedOtp(mockOtp);
        setStep('otp');
        
        // In production, remove this alert - OTP will be sent via SMS
        console.log(`OTP sent to ${phoneNumber}: ${mockOtp}`);
        alert(`Demo OTP sent! Use this code: ${mockOtp}`);
      } else {
        setError('Failed to send OTP. Please try again.');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
      console.error('Send OTP error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    setError('');
    
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    // Validate OTP locally for demo (remove in production)
    if (otp !== generatedOtp) {
      setError('Invalid OTP. Please try again.');
      return;
    }

    setIsLoading(true);
    
    try {
      // API call to verify OTP
      const response = await authService.verifyOTP(phoneNumber.replace(/\s/g, ''), otp);
      
      if (response.success) {
        if (response.isNewUser) {
          // New user - show registration form
          setStep('register');
        } else {
          // Existing user - store token and show success
          if (response.token) {
            authService.storeToken(response.token);
          }
          
          setName(response.user?.name || '');
          setEmail(response.user?.email || '');
          setStep('success');
          
          // Redirect to homepage after 3 seconds
          setTimeout(() => {
            onLoginSuccess({
              id: response.user?.id || '',
              name: response.user?.name || '',
              phone: phoneNumber.replace(/\s/g, ''),
              email: response.user?.email,
              gender: undefined
            });
          }, 3000);
        }
      } else {
        setError('OTP verification failed. Please try again.');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
      console.error('Verify OTP error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    setError('');
    
    if (!name.trim()) {
      setError('Name is required');
      return;
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    try {
      // API call to register user
      const response = await authService.register(
        phoneNumber.replace(/\s/g, ''),
        name,
        email || undefined
      );
      
      if (response.success) {
        // Store authentication token
        authService.storeToken(response.token);
        
        // Show success animation
        setStep('success');
        
        // Redirect to homepage after 3 seconds
        setTimeout(() => {
          onLoginSuccess({
            id: response.user.id,
            name: response.user.name,
            phone: response.user.phone,
            email: response.user.email,
            gender: undefined
          });
        }, 3000);
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      setError('Something went wrong. Please try again.');
      console.error('Register error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = () => {
    setError('');
    setOtp('');
    setIsLoading(true);
    
    // Simulate OTP resend
    setTimeout(() => {
      const mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
      setGeneratedOtp(mockOtp);
      setIsLoading(false);
      console.log(`OTP resent to ${phoneNumber}: ${mockOtp}`);
      alert(`Demo OTP resent! Use this code: ${mockOtp}`);
    }, 1500);
  };

  const handleChangeNumber = () => {
    setStep('phone');
    setOtp('');
    setError('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-md relative z-10">
        {/* Logo & Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <Zap className={`w-12 h-12 text-${COLORS.primaryDarker} fill-${COLORS.primaryDarker} drop-shadow-lg`} />
              <Sparkles className={`w-4 h-4 text-${COLORS.secondary} absolute -top-1 -right-1 animate-pulse`} />
            </div>
            <h1 className={`text-gray-900 bg-clip-text text-transparent ${GRADIENTS.primaryDark}`}>
              {APP_NAME}
            </h1>
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
          {/* Back Button */}
          <button
            onClick={onBack}
            className={`flex items-center gap-2 text-gray-600 hover:text-${COLORS.primaryDarkest} mb-6 transition-colors group`}
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Back to Home</span>
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-${COLORS.primary} via-${COLORS.secondary} to-pink-300 rounded-2xl mb-4 shadow-lg transform transition-transform hover:scale-105`}>
              {step === 'phone' ? (
                <Phone className="w-10 h-10 text-white drop-shadow" />
              ) : step === 'otp' ? (
                <Lock className="w-10 h-10 text-white drop-shadow" />
              ) : (
                <User className="w-10 h-10 text-white drop-shadow" />
              )}
            </div>
            <h2 className="text-gray-900 mb-2">
              {step === 'phone' ? 'Welcome Back!' : step === 'otp' ? 'Verify OTP' : 'Complete Your Profile'}
            </h2>
            <p className="text-gray-600 text-sm">
              {step === 'phone'
                ? 'Enter your phone number to continue'
                : step === 'otp'
                ? `We've sent a 6-digit code to ${phoneNumber}`
                : 'Tell us a bit about yourself'}
            </p>
          </div>

          {/* Phone Number Step */}
          {step === 'phone' && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
                <div className="relative mt-2">
                  <div className={`absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-${COLORS.primaryDarker}`}>
                    <Phone className="w-5 h-5" />
                    <span className="text-sm">+91</span>
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      setError('');
                    }}
                    className={`pl-20 h-14 text-lg border-2 border-gray-200 focus:border-${COLORS.primary} rounded-xl transition-colors`}
                    maxLength={14}
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-1">
                    <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                    {error}
                  </p>
                )}
              </div>

              <Button
                onClick={handleSendOTP}
                disabled={isLoading || !phoneNumber}
                className={`w-full h-14 ${GRADIENTS.primaryDarker} hover:from-${COLORS.primaryDarkest} hover:via-${COLORS.secondaryDarkest} hover:to-pink-600 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]`}
                size="lg"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending OTP...
                  </span>
                ) : (
                  'Send OTP'
                )}
              </Button>

              {/* Security Badge */}
              <div className={`bg-gradient-to-r from-${COLORS.primary} to-${COLORS.secondary} bg-opacity-10 border border-${COLORS.primaryLight} rounded-xl p-4`} style={{ backgroundImage: `linear-gradient(to right, rgb(165 180 252 / 0.1), rgb(216 180 254 / 0.1))` }}>
                <div className="flex items-center gap-3">
                  <Shield className={`w-5 h-5 text-${COLORS.primaryDarker}`} />
                  <div>
                    <p className="text-sm text-gray-700">Secure Authentication</p>
                    <p className="text-xs text-gray-500">Your data is encrypted & protected</p>
                  </div>
                </div>
              </div>

              <div className="text-center text-xs text-gray-600">
                <p>By continuing, you agree to our</p>
                <div className="flex items-center justify-center gap-2 mt-1">
                  <a href="#" className={`text-${COLORS.primaryDarker} hover:text-${COLORS.primaryDarkest} underline`}>
                    Terms of Service
                  </a>
                  <span>and</span>
                  <a href="#" className={`text-${COLORS.primaryDarker} hover:text-${COLORS.primaryDarkest} underline`}>
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* OTP Verification Step */}
          {step === 'otp' && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="otp" className="text-center block mb-6 text-gray-700">
                  Enter Verification Code
                </Label>
                <div className="flex justify-center">
                  <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={(value) => {
                      setOtp(value);
                      setError('');
                    }}
                  >
                    <InputOTPGroup className="gap-3">
                      <InputOTPSlot index={0} className="w-12 h-14 text-xl border-2 rounded-xl" />
                      <InputOTPSlot index={1} className="w-12 h-14 text-xl border-2 rounded-xl" />
                      <InputOTPSlot index={2} className="w-12 h-14 text-xl border-2 rounded-xl" />
                      <InputOTPSlot index={3} className="w-12 h-14 text-xl border-2 rounded-xl" />
                      <InputOTPSlot index={4} className="w-12 h-14 text-xl border-2 rounded-xl" />
                      <InputOTPSlot index={5} className="w-12 h-14 text-xl border-2 rounded-xl" />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                {error && (
                  <p className="text-red-500 text-sm mt-4 text-center flex items-center justify-center gap-1">
                    <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
                    {error}
                  </p>
                )}
              </div>

              <Button
                onClick={handleVerifyOTP}
                disabled={isLoading || otp.length !== 6}
                className="w-full h-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]"
                size="lg"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Verifying...
                  </span>
                ) : (
                  'Verify & Login'
                )}
              </Button>

              <div className="space-y-3">
                <div className="text-center">
                  <button
                    onClick={handleResendOTP}
                    disabled={isLoading}
                    className="text-indigo-500 hover:text-indigo-600 text-sm disabled:opacity-50 transition-colors underline decoration-dotted"
                  >
                    Resend OTP
                  </button>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={handleChangeNumber}
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
                  >
                    ← Change phone number
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 text-sm">
                <p className="text-center text-gray-700">
                  <span className="block mb-1 text-lg">💡</span>
                  <span className="block">Demo Mode Active</span>
                  <span className="text-xs text-gray-600">Check alert popup for the OTP code</span>
                </p>
              </div>
            </div>
          )}

          {/* Registration Step */}
          {step === 'register' && (
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Welcome Message */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mb-3 shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-700">
                    You're new here! Let's get you set up.
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Phone: +91 {phoneNumber}
                  </p>
                </div>

                {/* Name Field (Required) */}
                <div>
                  <Label htmlFor="name" className="text-gray-700 flex items-center gap-2">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative mt-2">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 text-${COLORS.primaryDarker}`}>
                      <User className="w-5 h-5" />
                    </div>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setError('');
                      }}
                      className={`pl-12 h-14 text-lg border-2 border-gray-200 focus:border-${COLORS.primary} rounded-xl transition-colors`}
                      required
                    />
                  </div>
                </div>

                {/* Email Field (Optional) */}
                <div>
                  <Label htmlFor="email" className="text-gray-700 flex items-center gap-2">
                    Email Address <span className="text-sm text-gray-500">(Optional)</span>
                  </Label>
                  <div className="relative mt-2">
                    <div className={`absolute left-4 top-1/2 -translate-y-1/2 text-${COLORS.primaryDarker}`}>
                      <Mail className="w-5 h-5" />
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError('');
                      }}
                      className={`pl-12 h-14 text-lg border-2 border-gray-200 focus:border-${COLORS.primary} rounded-xl transition-colors`}
                    />
                  </div>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-xl p-4"
                  >
                    <p className="text-red-600 text-sm flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
                      {error}
                    </p>
                  </motion.div>
                )}

                {/* Register Button */}
                <Button
                  onClick={handleRegister}
                  disabled={isLoading || !name.trim()}
                  className={`w-full h-14 ${GRADIENTS.primaryDarker} hover:from-${COLORS.primaryDarkest} hover:via-${COLORS.secondaryDarkest} hover:to-pink-600 text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]`}
                  size="lg"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Creating Account...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Complete Registration
                    </span>
                  )}
                </Button>

              </motion.div>
            </AnimatePresence>
          )}

          {/* Success Animation Step */}
          {step === 'success' && (
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="text-center py-8"
              >
                {/* Success Icon with Animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  className="relative inline-flex items-center justify-center mb-6"
                >
                  {/* Animated Rings */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [0.8, 1.5, 1.8], opacity: [0.5, 0.2, 0] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                    className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-indigo-400 to-purple-600"
                  />
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [0.8, 1.3, 1.5], opacity: [0.5, 0.3, 0] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.3
                    }}
                    className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-600"
                  />
                  
                  {/* Center Icon */}
                  <motion.div
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative w-28 h-28 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <CheckCircle className="w-16 h-16 text-white" strokeWidth={2.5} />
                  </motion.div>
                </motion.div>

                {/* Success Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <h2 className={`text-gray-900 mb-3 ${GRADIENTS.primary} bg-clip-text text-transparent`}>
                    Welcome, {name}! 🎉
                  </h2>
                  <p className="text-gray-600 mb-2">
                    Your account has been created successfully
                  </p>
                  <p className="text-sm text-gray-500">
                    Redirecting you to homepage...
                  </p>
                </motion.div>

                {/* Loading Dots */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center justify-center gap-2 mt-8"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 0 }}
                      animate={{ y: [-5, 0, -5] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut"
                      }}
                      className={`w-2 h-2 rounded-full bg-gradient-to-r from-${COLORS.primary} to-${COLORS.secondary}`}
                    />
                  ))}
                </motion.div>

                {/* Confetti Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ 
                        y: -100, 
                        x: Math.random() * 400 - 200,
                        opacity: 1,
                        rotate: 0
                      }}
                      animate={{ 
                        y: 800, 
                        opacity: 0,
                        rotate: Math.random() * 360
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        delay: Math.random() * 0.5,
                        ease: "linear"
                      }}
                      className={`absolute left-1/2 w-2 h-2 rounded-full`}
                      style={{
                        backgroundColor: ['#818cf8', '#a78bfa', '#ec4899'][Math.floor(Math.random() * 3)]
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            Need help?{' '}
            <a href="#" className="text-indigo-600 hover:text-indigo-700 underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
