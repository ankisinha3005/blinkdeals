import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { COLORS, GRADIENTS, APP_NAME } from '../constants';
import { motion } from 'motion/react';

interface PrivacyPageProps {
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

export function PrivacyPage({ 
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
}: PrivacyPageProps) {
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

      {/* Hero Section */}
      <div className={`${GRADIENTS.primary} text-white py-16`}>
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                <Shield className="w-12 h-12" />
              </div>
            </div>
            <h1 className="mb-4">Privacy Policy</h1>
            <p className="text-lg opacity-90">
              Your privacy is important to us
            </p>
            <p className="text-sm opacity-75 mt-2">
              Effective Date: October 21, 2025
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8"
        >
          {/* Introduction */}
          <section>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                <strong>Company:</strong> {APP_NAME} Technologies Private Limited ("{APP_NAME}", "we", "us", or "our")
              </p>
              <p>
                Your privacy is important to us. This Privacy Policy explains how we collect, use, share, and protect your personal information when you use our website and mobile application (collectively, the "Platform").
              </p>
              <p>
                By using {APP_NAME}, you agree to this Privacy Policy. If you do not agree, please stop using our Platform.
              </p>
            </div>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-indigo-600 mb-3">1. Information We Collect</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>We collect information to provide and improve our services. This may include:</p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  <strong>Personal details:</strong> Name, email, phone number, address, and login information when you register or place an order.
                </li>
                <li>
                  <strong>Payment details:</strong> Limited payment or transaction information (processed securely through third-party gateways).
                </li>
                <li>
                  <strong>Seller details:</strong> Business name, contact info, product listings, and bank details for payouts.
                </li>
                <li>
                  <strong>Usage data:</strong> Browser type, device ID, IP address, and interactions on the Platform (e.g., viewed products, clicks).
                </li>
                <li>
                  <strong>Optional data:</strong> Feedback, messages, or communications you send to our support team.
                </li>
              </ul>
              <p>
                You can browse {APP_NAME} without logging in, but certain features (like placing orders or listing products) require registration.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-indigo-600 mb-3">2. How We Use Your Information</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>We use your information to:</p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Process and confirm orders placed on the Platform.</li>
                <li>Share customer details with sellers for delivery fulfillment.</li>
                <li>Enable communication between buyers and sellers.</li>
                <li>Improve our Platform's performance, design, and recommendations.</li>
                <li>Provide updates about offers, flash sales, and new features.</li>
                <li>Prevent fraud, secure transactions, and comply with legal obligations.</li>
              </ul>
              <p className="mt-3">
                <strong>We do not sell or rent your personal information to any third party.</strong>
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-indigo-600 mb-3">3. Sharing of Information</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>We may share your data with:</p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  <strong>Sellers:</strong> Only necessary buyer details (name, phone, delivery address) to fulfill orders.
                </li>
                <li>
                  <strong>Service providers:</strong> Payment gateways, IT support, or analytics partners who help operate {APP_NAME}.
                </li>
                <li>
                  <strong>Legal authorities:</strong> When required by law or to protect rights, property, or safety.
                </li>
              </ul>
              <p className="mt-3">
                All third parties are required to handle your data in compliance with applicable privacy laws.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-indigo-600 mb-3">4. Cookies and Tracking</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>We use cookies and similar tools to:</p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Remember your preferences.</li>
                <li>Improve browsing and sale experiences.</li>
                <li>Analyze how users interact with our Platform.</li>
              </ul>
              <p className="mt-3">
                You can disable cookies in your browser settings, but some features may not work properly.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-indigo-600 mb-3">5. Security</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                We use appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, or misuse.
              </p>
              <p>
                However, no method of online transmission or storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-indigo-600 mb-3">6. Data Retention</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>We retain your information for as long as necessary to:</p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Complete transactions and provide services.</li>
                <li>Comply with legal obligations.</li>
                <li>Resolve disputes and enforce agreements.</li>
              </ul>
              <p className="mt-3">
                After that, data may be anonymized for research or analytics.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-indigo-600 mb-3">7. Your Rights</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>You have the right to:</p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Access, update, or correct your personal information.</li>
                <li>Request deletion of your account or data.</li>
                <li>Opt-out of marketing communications anytime.</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, email us at <strong>privacy@blinkdeals.in</strong>
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-indigo-600 mb-3">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              {APP_NAME} is intended for users 18 years and older. We do not knowingly collect information from minors. If you believe a child has provided us information, contact us to remove it.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-indigo-600 mb-3">9. Links to Other Sites</h2>
            <p className="text-gray-700 leading-relaxed">
              Our Platform may contain links to other websites. We are not responsible for their content or privacy practices. Please review their privacy policies before providing any personal data.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-indigo-600 mb-3">10. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy periodically. The latest version will always be available on our website with an updated "Effective Date."
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-indigo-600 mb-3">11. Contact Us</h2>
            <div className="space-y-2 text-gray-700 leading-relaxed">
              <p>For questions, feedback, or privacy concerns, please reach out at:</p>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p>📧 support@blinkdeals.in</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBack}
                className={`px-8 py-3 ${GRADIENTS.primary} ${GRADIENTS.primaryHover} text-white rounded-lg transition-all`}
              >
                Back to Home
              </button>
              <button
                onClick={onSupport}
                className="px-8 py-3 bg-white border-2 border-indigo-200 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Contact Support
              </button>
            </div>
          </div>
        </motion.div>
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
