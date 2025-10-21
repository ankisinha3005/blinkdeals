import { useState, useEffect } from 'react';
import { Product } from '../types';
import { SaleTimer } from './SaleTimer';
import { ProductCarousel } from './ProductCarousel';
import { Header } from './Header';
import { Footer } from './Footer';
import { PreSaleAnimation } from './PreSaleAnimation';
import { motion } from 'motion/react';

interface FlashSaleHomepageProps {
  products: Product[];
  saleStartTime: Date;
  saleEndTime: Date;
  onBuyNow: (product: Product) => void;
  onShowDetails: (product: Product) => void;
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

export function FlashSaleHomepage({
  products,
  saleStartTime,
  saleEndTime,
  onBuyNow,
  onShowDetails,
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
  userName,
}: FlashSaleHomepageProps) {
  const [saleStarted, setSaleStarted] = useState(false);

  useEffect(() => {
    const checkSaleStatus = () => {
      const now = new Date();
      setSaleStarted(now >= saleStartTime);
    };

    // Check immediately
    checkSaleStatus();

    // Check every second
    const interval = setInterval(checkSaleStatus, 1000);

    return () => clearInterval(interval);
  }, [saleStartTime]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex flex-col">
      {/* Header */}
      <Header 
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
      <main className="flex-1 py-8">
        {/* Timer Section */}
        <div className="max-w-4xl mx-auto px-4 mb-12">
          <SaleTimer saleStartTime={saleStartTime} saleEndTime={saleEndTime} />
        </div>

        {/* Conditional Content Based on Sale Status */}
        {!saleStarted ? (
          /* Pre-Sale Animation Section */
          <div className="mb-8 px-4">
            <PreSaleAnimation />
          </div>
        ) : (
          /* Active Sale - Products Section */
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block"
                >
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent mb-2">
                    <h2 className="text-5xl font-bold">Featured Deals</h2>
                  </div>
                  <p className="text-gray-600 text-lg">Exclusive offers you don't want to miss</p>
                </motion.div>
              </div>
              <ProductCarousel
                products={products}
                onBuyNow={onBuyNow}
                onShowDetails={onShowDetails}
              />
            </motion.div>
          </div>
        )}
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
