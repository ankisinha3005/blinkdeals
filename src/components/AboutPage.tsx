import React from 'react';
import { ArrowLeft, Zap, Target, Users, TrendingUp, Heart, Shield } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { COLORS, GRADIENTS } from '../constants';
import { motion } from 'motion/react';

interface AboutPageProps {
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

export function AboutPage({ 
  onBack, 
  onLogin, 
  onBecomeSeller, 
  onSupport, 
  onAbout,
  onCareers,
  onPressMedia,
  onBlog,
  onTerms,
  onPrivacy,
  onCookiePolicy,
  onDisclaimer,
  onAccessibility,
  onProfile, 
  onOrders, 
  onLogout, 
  isLoggedIn, 
  userName 
}: AboutPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col">
      {/* Header */}
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

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <Zap className={`w-12 h-12 text-${COLORS.primary}`} />
            </div>
            <h1 className={`${GRADIENTS.primary} bg-clip-text text-transparent mb-4`}>
              About BlinkDeals
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A simple and fast-growing flash sale marketplace
            </p>
          </motion.div>

          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 mb-8"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                BlinkDeals is a simple and fast-growing flash sale marketplace where sellers can offer their products at limited-time discounted prices.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Our goal is to help sellers reach new customers, clear stock quickly, and increase visibility — all without paying any commission. Buyers get to discover new products, great discounts, and exclusive deals that last only for a short time.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                At BlinkDeals, every sale is designed to create excitement — real products, real discounts, real value — all in a blink.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-indigo-100"
            >
              <div className={`w-12 h-12 rounded-full ${GRADIENTS.primary} flex items-center justify-center mb-4`}>
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Connect buyers with amazing deals and help sellers grow their business through exciting flash sales.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-indigo-100"
            >
              <div className={`w-12 h-12 rounded-full ${GRADIENTS.primary} flex items-center justify-center mb-4`}>
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Zero Commission</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Sellers keep 100% of their profits. No hidden fees, no commission charges — just pure value.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-indigo-100"
            >
              <div className={`w-12 h-12 rounded-full ${GRADIENTS.primary} flex items-center justify-center mb-4`}>
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">For Everyone</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Whether you're buying or selling, BlinkDeals makes it simple, fast, and exciting for everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-indigo-100"
            >
              <div className={`w-12 h-12 rounded-full ${GRADIENTS.primary} flex items-center justify-center mb-4`}>
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Flash Sales</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Limited-time offers create urgency and excitement, giving buyers unbeatable deals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-indigo-100"
            >
              <div className={`w-12 h-12 rounded-full ${GRADIENTS.primary} flex items-center justify-center mb-4`}>
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Quick Growth</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clear stock fast, reach new customers, and increase your brand visibility instantly.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-indigo-100"
            >
              <div className={`w-12 h-12 rounded-full ${GRADIENTS.primary} flex items-center justify-center mb-4`}>
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">Real Value</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Real products, real discounts, real excitement — authentic deals that create genuine value.
              </p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className={`mt-12 ${GRADIENTS.primary} rounded-2xl shadow-xl p-8 md:p-12 text-center text-white`}
          >
            <h2 className="text-white mb-4">Ready to Join BlinkDeals?</h2>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Start selling your products with zero commission or discover amazing deals that won't last long!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBecomeSeller}
                className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Become a Seller
              </button>
              <button
                onClick={onBack}
                className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-lg hover:bg-white/30 transition-colors"
              >
                Browse Deals
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
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
