import { useState } from 'react';
import { MessageCircle, Mail, Phone, Check, TrendingUp, Users, Zap, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Header } from './Header';
import { Footer } from './Footer';
import { GRADIENTS, APP_NAME } from '../constants';
import { motion, AnimatePresence } from 'motion/react';

interface BecomeSellerPageProps {
  onBack: () => void;
  onLogin: () => void;
  onBecomeSeller?: () => void;
  onSupport?: () => void;
  onAbout?: () => void;
  onCareers?: () => void;
  onPressMedia?: () => void;
  onBlog?: () => void;
  onTerms?: () => void;
  onPrivacy?: () => void;
  onCookiePolicy?: () => void;
  onDisclaimer?: () => void;
  onAccessibility?: () => void;
  onProfile?: () => void;
  onOrders?: () => void;
  onLogout?: () => void;
  isLoggedIn?: boolean;
  userName?: string;
}

export function BecomeSellerPage({ onBack, onLogin, onBecomeSeller, onSupport, onAbout, onCareers, onPressMedia, onBlog, onTerms, onPrivacy, onCookiePolicy, onDisclaimer, onAccessibility, onProfile, onOrders, onLogout, isLoggedIn, userName }: BecomeSellerPageProps) {
  const [formData, setFormData] = useState({ email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919523620235', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:support@blinkdeals.in';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col">
      <Header 
        onLogoClick={onBack} 
        onLoginClick={onLogin}
        onBecomeSellerClick={onBecomeSeller}
        onSupportClick={onSupport}
        onProfileClick={onProfile}
        onOrdersClick={onOrders}
        onLogoutClick={onLogout}
        isLoggedIn={isLoggedIn}
        userName={userName}
      />

      <main className="flex-1 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-md mb-6">
              <Zap className="w-5 h-5 text-indigo-500" />
              <span className="text-sm text-gray-700">Join Our Seller Community</span>
            </div>
            <h1 className={`${GRADIENTS.primary} bg-clip-text text-transparent mb-6 text-6xl`}>
              Grow Your Business<br />with {APP_NAME}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Reach millions of customers and boost your sales with our powerful flash sale platform. 
              Start selling today and watch your business grow.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-indigo-100">
              <div className={`w-14 h-14 ${GRADIENTS.primary} rounded-xl flex items-center justify-center mb-4`}>
                <Users className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl text-gray-900 mb-1">10M+</div>
              <div className="text-gray-600">Active Customers</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
              <div className={`w-14 h-14 ${GRADIENTS.primary} rounded-xl flex items-center justify-center mb-4`}>
                <ShoppingBag className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl text-gray-900 mb-1">5000+</div>
              <div className="text-gray-600">Active Sellers</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-pink-100">
              <div className={`w-14 h-14 ${GRADIENTS.primary} rounded-xl flex items-center justify-center mb-4`}>
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl text-gray-900 mb-1">₹50Cr+</div>
              <div className="text-gray-600">Monthly Sales</div>
            </div>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-center text-gray-800 mb-8 text-3xl">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* WhatsApp Card */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-indigo-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-green-600/10 rounded-bl-full"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <MessageCircle className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 text-xl">WhatsApp Us</h3>
                      <p className="text-sm text-gray-500">Instant Response</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Get instant support and quick answers to all your queries via WhatsApp
                  </p>
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all"
                    size="lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </Button>
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Phone className="w-4 h-4" />
                    <span>+91 9523620235</span>
                  </div>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div 
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-purple-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-bl-full"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 ${GRADIENTS.primary} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 text-xl">Email Us</h3>
                      <p className="text-sm text-gray-500">24/7 Support</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Send us detailed queries and get comprehensive support via email
                  </p>
                  <Button 
                    onClick={handleEmailClick}
                    className={`w-full ${GRADIENTS.primary} ${GRADIENTS.primaryHover} shadow-lg hover:shadow-xl transition-all`}
                    size="lg"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </Button>
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Mail className="w-4 h-4" />
                    <span>support@blinkdeals.in</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-xl mx-auto"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-indigo-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-400/5 to-purple-600/5 rounded-full -mr-32 -mt-32"></div>
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="text-center mb-8">
                      <div className={`inline-flex w-16 h-16 ${GRADIENTS.primary} rounded-2xl items-center justify-center mb-4 shadow-lg`}>
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-gray-900 mb-3 text-2xl">Let's Connect!</h3>
                      <p className="text-gray-600">
                        Leave your details and our team will reach out to you shortly
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="email" className="text-gray-700 mb-2 block">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="h-12 border-gray-200 focus:border-indigo-300 focus:ring-indigo-200"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-gray-700 mb-2 block">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+91 XXXXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12 border-gray-200 focus:border-indigo-300 focus:ring-indigo-200"
                        />
                      </div>

                      <Button 
                        type="submit"
                        className={`w-full h-12 ${GRADIENTS.primary} ${GRADIENTS.primaryHover} shadow-lg hover:shadow-xl transition-all text-lg`}
                      >
                        Submit Details
                      </Button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-center py-12 relative"
                  >
                    {/* Animated Check Circle */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        delay: 0.2,
                        type: "spring",
                        stiffness: 150,
                        damping: 12
                      }}
                      className="relative w-32 h-32 mx-auto mb-8"
                    >
                      {/* Outer ring animation */}
                      <motion.div
                        className={`absolute inset-0 ${GRADIENTS.primary} rounded-full opacity-20`}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: [0.8, 1.2, 1] }}
                        transition={{ 
                          duration: 0.8,
                          delay: 0.1,
                          times: [0, 0.6, 1]
                        }}
                      />
                      
                      {/* Middle ring */}
                      <motion.div
                        className={`absolute inset-2 ${GRADIENTS.primary} rounded-full opacity-40`}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: [0.8, 1.1, 1] }}
                        transition={{ 
                          duration: 0.7,
                          delay: 0.15,
                          times: [0, 0.6, 1]
                        }}
                      />
                      
                      {/* Main circle */}
                      <motion.div
                        className={`absolute inset-4 ${GRADIENTS.primary} rounded-full shadow-2xl`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          duration: 0.5,
                          delay: 0.2,
                          type: "spring",
                          stiffness: 200
                        }}
                      />
                      
                      {/* Checkmark */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: 0.4,
                          type: "spring",
                          stiffness: 200,
                          damping: 15
                        }}
                      >
                        <Check className="w-16 h-16 text-white" strokeWidth={3} />
                      </motion.div>
                      
                      {/* Confetti particles */}
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-2 h-2 rounded-full ${
                            i % 2 === 0 ? 'bg-indigo-400' : 'bg-purple-400'
                          }`}
                          style={{
                            top: '50%',
                            left: '50%',
                          }}
                          initial={{ scale: 0, x: 0, y: 0 }}
                          animate={{
                            scale: [0, 1, 0],
                            x: Math.cos((i * Math.PI * 2) / 8) * 80,
                            y: Math.sin((i * Math.PI * 2) / 8) * 80,
                          }}
                          transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Success Message */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                    >
                      <h3 className="text-gray-900 mb-3 text-2xl">Successfully Submitted!</h3>
                      <p className="text-gray-600 mb-2">
                        Thank you for your interest in joining {APP_NAME}
                      </p>
                      <p className="text-gray-500 text-sm mb-8">
                        Our team will reach out to you within 24 hours
                      </p>
                    </motion.div>

                    {/* Back Button */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Button
                        onClick={onBack}
                        variant="outline"
                        className="px-8 h-12 border-2 hover:border-indigo-300"
                      >
                        Back to Home
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer 
        onAboutClick={onAbout} 
        onCareersClick={onCareers}
        onBecomeSellerClick={onBecomeSeller}
        onPressMediaClick={onPressMedia}
        onBlogClick={onBlog}
        onSupportClick={onSupport}
        onTermsClick={onTerms}
        onPrivacyClick={onPrivacy}
        onCookiePolicyClick={onCookiePolicy}
        onDisclaimerClick={onDisclaimer}
        onAccessibilityClick={onAccessibility}
      />
    </div>
  );
}
