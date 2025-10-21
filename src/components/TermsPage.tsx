import { ArrowLeft, FileText, Shield, Scale } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { COLORS, GRADIENTS, APP_NAME } from '../constants';
import { motion } from 'motion/react';

interface TermsPageProps {
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

export function TermsPage({ 
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
}: TermsPageProps) {
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
                <Scale className="w-12 h-12" />
              </div>
            </div>
            <h1 className="mb-4">Terms and Conditions</h1>
            <p className="text-lg opacity-90">
              Please read these terms carefully before using {APP_NAME}
            </p>
            <p className="text-sm opacity-75 mt-2">
              Last updated: October 21, 2025
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
          {/* Section 1 */}
          <section>
            <h2 className="text-indigo-600 mb-3">1. Introduction</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                Welcome to {APP_NAME} – a flash-sale marketplace operated by {APP_NAME} Technologies Private Limited ("{APP_NAME}", "we", "us", "our"). These Terms and Conditions ("Terms") govern your use of our website and mobile app (collectively, the "Platform").
              </p>
              <p>
                By accessing or using {APP_NAME}, you agree to these Terms and our Privacy Policy. If you do not agree, please do not use the Platform.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-indigo-600 mb-3">2. Nature of the Platform</h2>
            <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
              <li>{APP_NAME} is an online marketplace that enables independent sellers ("Sellers") to offer their products for limited-time flash sales to buyers ("Users" or "Customers").</li>
              <li>{APP_NAME} is not the owner or seller of any products listed on the Platform. All sales are directly between the Seller and the Buyer.</li>
              <li>{APP_NAME} only provides a platform to connect both parties and facilitate flash sale events.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-indigo-600 mb-3">3. User Eligibility</h2>
            <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
              <li>Use of the Platform is permitted only to individuals aged 18 years or above who can form legally binding contracts under Indian law.</li>
              <li>Minors may use the Platform only with the supervision of a parent or legal guardian.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-indigo-600 mb-3">4. User Account</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                To participate in sales or make purchases, Users may need to create an account using a valid email ID and mobile number.
              </p>
              <p>You are responsible for:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Maintaining confidentiality of your login credentials.</li>
                <li>All activities under your account.</li>
              </ul>
              <p>
                {APP_NAME} shall not be liable for unauthorized access due to your failure to secure your credentials.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-indigo-600 mb-3">5. Seller Responsibilities</h2>
            <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
              <li>Sellers must provide accurate product details, pricing, and available stock before listing.</li>
              <li>Sellers agree to honor confirmed orders and handle delivery using their own logistics or preferred delivery partner.</li>
              <li>{APP_NAME} will share the buyer's name, contact, and address with the Seller solely for fulfillment purposes.</li>
              <li>Sellers are solely responsible for product quality, delivery, warranty, and after-sales service.</li>
              <li>Sellers agree to comply with all applicable Indian laws including taxation, product labeling, and consumer protection.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-indigo-600 mb-3">6. Buyer Responsibilities</h2>
            <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
              <li>Buyers should review product details carefully before purchasing.</li>
              <li>Buyers understand that {APP_NAME} is not the manufacturer, supplier, or seller of the products.</li>
              <li>Payments (if collected by {APP_NAME}) will be held in escrow until order confirmation, after which they are released to the Seller.</li>
              <li>Refunds or replacements are governed by the Seller's policy and applicable law.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-indigo-600 mb-3">7. Platform Role and Limitations</h2>
            <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
              <li>{APP_NAME} acts only as a facilitator and is not a party to the contract between the Seller and Buyer.</li>
              <li>{APP_NAME} does not own, control, or guarantee any product, pricing, or warranty.</li>
              <li>{APP_NAME} is not responsible for non-delivery, defective items, delayed shipments, or disputes between buyers and sellers.</li>
              <li>{APP_NAME} may assist in dispute resolution but is not obligated to mediate.</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-indigo-600 mb-3">8. Pricing and Errors</h2>
            <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
              <li>All prices are listed in Indian Rupees (INR).</li>
              <li>In case of any typographical or technical errors in pricing or product information, Sellers reserve the right to cancel affected orders with due notification.</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-indigo-600 mb-3">9. Payment and Fees</h2>
            <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
              <li>{APP_NAME} currently does not charge any commission to Sellers.</li>
              <li>Future service fees (if any) will be communicated in advance.</li>
              <li>Payments may be facilitated through secure third-party gateways. {APP_NAME} is not responsible for transaction failures or delays caused by banks or payment partners.</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-indigo-600 mb-3">10. Cancellations and Refunds</h2>
            <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
              <li>Sellers reserve the right to cancel orders due to stock unavailability or listing errors.</li>
              <li>Buyers may cancel an order before the sale period ends, subject to Seller approval.</li>
              <li>Refunds, where applicable, will be processed as per Seller's policy through the same mode of payment.</li>
            </ul>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-indigo-600 mb-3">11. Prohibited Activities</h2>
            <p className="text-gray-700 mb-2">Users agree not to:</p>
            <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
              <li>Post or list misleading, illegal, counterfeit, or restricted products.</li>
              <li>Use {APP_NAME} for fraudulent, abusive, or unlawful activities.</li>
              <li>Infringe intellectual property rights of others.</li>
              <li>Interfere with or attempt to hack the Platform.</li>
            </ul>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-indigo-600 mb-3">12. Intellectual Property</h2>
            <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
              <li>All content, logos, and designs on {APP_NAME} belong to {APP_NAME} Technologies Pvt. Ltd.</li>
              <li>Users and Sellers must not copy, modify, or reproduce any material from the Platform without written consent.</li>
            </ul>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-indigo-600 mb-3">13. Privacy and Communication</h2>
            <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
              <li>Use of the Platform implies consent to receive communications (SMS, email, WhatsApp, etc.) related to your activity.</li>
              <li>All personal information is handled as per our Privacy Policy, available on the website.</li>
            </ul>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-indigo-600 mb-3">14. Disclaimer of Liability</h2>
            <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside">
              <li>{APP_NAME} provides the Platform "as is" without warranties of any kind.</li>
              <li>{APP_NAME} shall not be liable for indirect, incidental, or consequential damages arising from the use of the Platform.</li>
              <li>Product descriptions, availability, or performance are solely the responsibility of the Seller.</li>
            </ul>
          </section>

          {/* Section 15 */}
          <section>
            <h2 className="text-indigo-600 mb-3">15. Governing Law and Jurisdiction</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by the laws of India, and any dispute shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
            </p>
          </section>

          {/* Section 16 */}
          <section>
            <h2 className="text-indigo-600 mb-3">16. Amendments</h2>
            <p className="text-gray-700 leading-relaxed">
              {APP_NAME} reserves the right to modify these Terms at any time. Updated versions will be posted on the Platform and shall become effective immediately upon publication.
            </p>
          </section>

          {/* Section 17 */}
          <section>
            <h2 className="text-indigo-600 mb-3">17. Contact Us</h2>
            <div className="space-y-2 text-gray-700 leading-relaxed">
              <p>For any queries or grievances, please contact:</p>
              <div className="bg-indigo-50 p-4 rounded-lg space-y-1">
                <p>📧 support@blinkdeals.in</p>
                <p>📍 {APP_NAME} Technologies Pvt. Ltd., Bengaluru, India</p>
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
