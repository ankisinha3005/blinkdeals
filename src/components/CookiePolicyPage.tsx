import { Cookie, Shield, Settings } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { COLORS, GRADIENTS, APP_NAME } from '../constants';
import { motion } from 'motion/react';

interface CookiePolicyPageProps {
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

export function CookiePolicyPage({ 
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
}: CookiePolicyPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex flex-col">
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
                <Cookie className="w-12 h-12" />
              </div>
            </div>
            <h1 className="mb-4">Cookie Policy</h1>
            <p className="text-lg opacity-90">
              How we use cookies to enhance your experience on {APP_NAME}
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
          {/* Company Info */}
          <div className="bg-indigo-50 p-4 rounded-lg">
            <p className="text-gray-700">
              <strong>Company:</strong> {APP_NAME} Technologies Private Limited ("{APP_NAME}", "we", "us", "our")
            </p>
          </div>

          {/* Section 1 */}
          <section>
            <h2 className="text-indigo-600 mb-3">1. What Are Cookies?</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                Cookies are small text files that are placed on your device when you visit a website.
              </p>
              <p>
                They help us make {APP_NAME} work better — by remembering your preferences, improving performance, and showing you relevant offers.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-indigo-600 mb-3">2. How We Use Cookies</h2>
            <p className="text-gray-700 mb-3">
              We use cookies and similar technologies (like pixels or tags) to:
            </p>
            <ul className="space-y-2 text-gray-700 leading-relaxed list-disc list-inside ml-4">
              <li><strong>Essential Operations</strong> – Keep you signed in, remember your shopping cart, and enable secure payments.</li>
              <li><strong>Performance Tracking</strong> – Understand how users interact with our site and app, so we can make them faster and smoother.</li>
              <li><strong>Analytics</strong> – Measure visits, clicks, and sales performance through trusted tools (e.g., Google Analytics).</li>
              <li><strong>Personalization</strong> – Recommend products or deals based on your past browsing.</li>
              <li><strong>Marketing</strong> – Show you relevant ads or offers when you visit {APP_NAME} or partner websites.</li>
            </ul>
            <p className="text-gray-700 mt-3">
              We do not store sensitive personal information (like passwords or payment details) in cookies.
            </p>
          </section>

          {/* Section 3 - Cookie Types Table */}
          <section>
            <h2 className="text-indigo-600 mb-3">3. Types of Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-indigo-100">
                    <th className="border border-gray-300 px-4 py-3 text-left">Type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Purpose</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3"><strong>Necessary Cookies</strong></td>
                    <td className="border border-gray-300 px-4 py-3">Enable login, checkout, and core functionality</td>
                    <td className="border border-gray-300 px-4 py-3">Session / short-term</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3"><strong>Analytics Cookies</strong></td>
                    <td className="border border-gray-300 px-4 py-3">Measure usage, improve design</td>
                    <td className="border border-gray-300 px-4 py-3">Up to 12 months</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3"><strong>Preference Cookies</strong></td>
                    <td className="border border-gray-300 px-4 py-3">Save your settings (language, theme)</td>
                    <td className="border border-gray-300 px-4 py-3">Up to 12 months</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3"><strong>Marketing Cookies</strong></td>
                    <td className="border border-gray-300 px-4 py-3">Deliver relevant ads and track campaigns</td>
                    <td className="border border-gray-300 px-4 py-3">Varies (controlled by third parties)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-indigo-600 mb-3">4. Managing Cookies</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                You can control cookies through your browser settings:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Block or delete existing cookies.</li>
                <li>Receive alerts before cookies are stored.</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-gray-800">
                  <strong>Note:</strong> Disabling cookies may affect how {APP_NAME} functions — for example, you may not stay logged in or see relevant offers.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-indigo-600 mb-3">5. Third-Party Cookies</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                We may use cookies from trusted partners like Google Analytics, Meta (Facebook), or advertising networks to improve reach and measure engagement.
              </p>
              <p>
                These third parties have their own privacy and cookie policies, which you can review on their respective websites.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-indigo-600 mb-3">6. Consent</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                By using {APP_NAME}, you consent to our use of cookies as described in this policy.
              </p>
              <p>
                You can change or withdraw your consent anytime by adjusting your browser settings or cookie preferences.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-indigo-600 mb-3">7. Updates to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology or legal requirements.
              All updates will be posted on this page with a new Effective Date.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-indigo-600 mb-3">8. Contact Us</h2>
            <div className="space-y-2 text-gray-700 leading-relaxed">
              <p>If you have any questions about how we use cookies, please contact:</p>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p>📧 privacy@blinkdeals.in</p>
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
                onClick={onPrivacy}
                className="px-8 py-3 bg-white border-2 border-indigo-200 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                View Privacy Policy
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
