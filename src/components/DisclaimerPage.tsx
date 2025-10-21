import { AlertTriangle, Info, ShieldAlert } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { COLORS, GRADIENTS, APP_NAME } from '../constants';
import { motion } from 'motion/react';

interface DisclaimerPageProps {
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

export function DisclaimerPage({ 
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
}: DisclaimerPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 flex flex-col">
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
                <AlertTriangle className="w-12 h-12" />
              </div>
            </div>
            <h1 className="mb-4">Disclaimer</h1>
            <p className="text-lg opacity-90">
              Important information about using {APP_NAME}
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
          {/* Introduction */}
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
            <p className="text-gray-800 leading-relaxed">
              The information provided by {APP_NAME} Technologies Private Limited ("{APP_NAME}") on our website and mobile application is for general informational purposes only. All information is provided in good faith, however we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the Platform.
            </p>
          </div>

          {/* Section 1 */}
          <section>
            <h2 className="text-indigo-600 mb-3">1. Marketplace Platform</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                {APP_NAME} operates as an online marketplace connecting independent sellers with buyers. We are not the manufacturer, seller, or distributor of any products listed on our platform.
              </p>
              <p>
                All product descriptions, images, pricing, and availability information are provided by third-party sellers. {APP_NAME} does not independently verify this information and cannot guarantee its accuracy.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-indigo-600 mb-3">2. No Warranties</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                The Platform and all products listed are provided on an "as is" and "as available" basis without any warranties, express or implied, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Merchantability or fitness for a particular purpose</li>
                <li>Non-infringement of intellectual property</li>
                <li>Uninterrupted or error-free service</li>
                <li>Accuracy or reliability of product information</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-indigo-600 mb-3">3. Limitation of Liability</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                {APP_NAME} shall not be held liable for:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Product quality, defects, or non-delivery by sellers</li>
                <li>Loss or damage arising from your use of the Platform</li>
                <li>Any direct, indirect, incidental, or consequential damages</li>
                <li>Transaction disputes between buyers and sellers</li>
                <li>Technical issues, downtime, or data loss</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-indigo-600 mb-3">4. Third-Party Content & Links</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                Our Platform may contain links to third-party websites or services. {APP_NAME} has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
              <p>
                You acknowledge and agree that {APP_NAME} shall not be liable for any damage or loss caused by your use of any third-party content or services.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-indigo-600 mb-3">5. Product Information</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                While we strive to ensure accuracy, product details including prices, descriptions, specifications, and availability may be subject to change without notice. Flash sale timings and discount percentages are determined by sellers and may vary.
              </p>
              <p>
                We recommend verifying product information directly with the seller before making a purchase.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-indigo-600 mb-3">6. User Responsibility</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                By using {APP_NAME}, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Exercise your own judgment when making purchases</li>
                <li>Read and understand seller policies before ordering</li>
                <li>Verify product details and seller credibility</li>
                <li>Report any issues or fraudulent activity immediately</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-indigo-600 mb-3">7. Changes to Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update or modify this Disclaimer at any time. Changes will be effective immediately upon posting. Your continued use of the Platform after any changes constitutes acceptance of the updated Disclaimer.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-indigo-600 mb-3">8. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              This Disclaimer is governed by the laws of India. Any disputes arising from your use of the Platform shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-indigo-600 mb-3">9. Contact Information</h2>
            <div className="space-y-2 text-gray-700 leading-relaxed">
              <p>If you have questions about this Disclaimer, please contact us at:</p>
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
                onClick={onTerms}
                className="px-8 py-3 bg-white border-2 border-indigo-200 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors"
              >
                View Terms & Conditions
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
