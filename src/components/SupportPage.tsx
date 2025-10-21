import { MessageCircle, Mail, HeadphonesIcon, Clock, CheckCircle, Shield, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Header } from './Header';
import { Footer } from './Footer';
import { GRADIENTS, APP_NAME } from '../constants';
import { motion } from 'motion/react';

interface SupportPageProps {
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

export function SupportPage({ onBack, onLogin, onBecomeSeller, onSupport, onAbout, onCareers, onPressMedia, onBlog, onTerms, onPrivacy, onCookiePolicy, onDisclaimer, onAccessibility, onProfile, onOrders, onLogout, isLoggedIn, userName }: SupportPageProps) {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919523620235', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:support@blinkdeals.in';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
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
              <HeadphonesIcon className="w-5 h-5 text-indigo-500" />
              <span className="text-sm text-gray-700">We're Here to Help</span>
            </div>
            <h1 className={`${GRADIENTS.primary} bg-clip-text text-transparent mb-6 text-6xl`}>
              Customer Support
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Having issues with your order or product? Our dedicated support team is ready to assist you. 
              Reach out to us and we'll resolve your concerns promptly.
            </p>
          </motion.div>

          {/* Features Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-100 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600 text-sm">We respond to all queries within 2-4 hours</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-indigo-100 text-center">
              <div className={`w-14 h-14 ${GRADIENTS.primary} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Quick Resolution</h3>
              <p className="text-gray-600 text-sm">Most issues resolved in 24 hours</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">100% Support</h3>
              <p className="text-gray-600 text-sm">We stand behind every purchase</p>
            </div>
          </motion.div>

          {/* Main Support Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-center text-gray-800 mb-8 text-3xl">Contact Our Support Team</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {/* WhatsApp Card */}
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border-2 border-green-100 relative overflow-hidden group"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400/10 to-green-600/10 rounded-bl-full transition-all group-hover:scale-110"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-400/5 to-green-600/5 rounded-tr-full transition-all group-hover:scale-110"></div>
                
                <div className="relative">
                  {/* Icon Header */}
                  <div className="flex justify-center mb-6">
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl flex items-center justify-center shadow-2xl"
                    >
                      <MessageCircle className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center mb-8">
                    <h3 className="text-gray-900 text-2xl mb-2">WhatsApp Support</h3>
                    <p className="text-sm text-green-600 mb-4">⚡ Instant Response</p>
                    <p className="text-gray-600 leading-relaxed">
                      Get immediate assistance through WhatsApp. Our support team is available to help you with order tracking, returns, refunds, and product issues.
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-green-50 rounded-2xl p-4 mb-6 border border-green-100">
                    <div className="flex items-center justify-center gap-2 text-green-700">
                      <Phone className="w-5 h-5" />
                      <span className="text-lg">+91 9523620235</span>
                    </div>
                  </div>

                  {/* Button */}
                  <Button 
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-xl hover:shadow-2xl transition-all h-14 text-lg"
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Start WhatsApp Chat
                  </Button>

                  {/* Features */}
                  <div className="mt-6 space-y-2">
                    {['Instant replies', 'Share screenshots', 'Real-time tracking'].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Email Card */}
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border-2 border-indigo-100 relative overflow-hidden group"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-400/10 to-purple-600/10 rounded-bl-full transition-all group-hover:scale-110"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-indigo-400/5 to-purple-600/5 rounded-tr-full transition-all group-hover:scale-110"></div>
                
                <div className="relative">
                  {/* Icon Header */}
                  <div className="flex justify-center mb-6">
                    <motion.div 
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`w-24 h-24 ${GRADIENTS.primary} rounded-3xl flex items-center justify-center shadow-2xl`}
                    >
                      <Mail className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center mb-8">
                    <h3 className="text-gray-900 text-2xl mb-2">Email Support</h3>
                    <p className="text-sm text-indigo-600 mb-4">📧 Detailed Assistance</p>
                    <p className="text-gray-600 leading-relaxed">
                      Send us detailed information about your issue via email. Perfect for complex queries, multiple product issues, or when you need documentation.
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className={`bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-4 mb-6 border border-indigo-100`}>
                    <div className="flex items-center justify-center gap-2 text-indigo-700">
                      <Mail className="w-5 h-5" />
                      <span className="text-lg">support@blinkdeals.in</span>
                    </div>
                  </div>

                  {/* Button */}
                  <Button 
                    onClick={handleEmailClick}
                    className={`w-full ${GRADIENTS.primary} ${GRADIENTS.primaryHover} shadow-xl hover:shadow-2xl transition-all h-14 text-lg`}
                  >
                    <Mail className="w-6 h-6 mr-3" />
                    Send Email
                  </Button>

                  {/* Features */}
                  <div className="mt-6 space-y-2">
                    {['Attach files & images', 'Detailed responses', '24/7 availability'].map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-indigo-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Help Topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-gray-900 text-xl mb-6 text-center">Common Support Topics</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: '📦', title: 'Order Tracking', desc: 'Check your order status' },
                  { icon: '↩️', title: 'Returns & Refunds', desc: 'Initiate return or refund' },
                  { icon: '🛍️', title: 'Product Issues', desc: 'Damaged or wrong item' },
                  { icon: '💳', title: 'Payment Problems', desc: 'Payment or billing queries' },
                  { icon: '🚚', title: 'Delivery Issues', desc: 'Late or missing delivery' },
                  { icon: '❓', title: 'General Help', desc: 'Any other questions' },
                ].map((topic, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-indigo-50/30 hover:from-indigo-50 hover:to-purple-50 transition-all cursor-default border border-gray-100"
                  >
                    <span className="text-2xl">{topic.icon}</span>
                    <div>
                      <div className="text-gray-900">{topic.title}</div>
                      <div className="text-sm text-gray-600">{topic.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12 text-gray-600"
          >
            <p className="mb-2">Average Response Time: <span className="text-indigo-600">2-4 hours</span></p>
            <p>Support Hours: <span className="text-indigo-600">24/7 - We're always here for you</span></p>
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
