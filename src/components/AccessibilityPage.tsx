import React from 'react';
import { Eye, Ear, Hand, Heart } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import { COLORS, GRADIENTS, APP_NAME } from '../constants';
import { motion } from 'motion/react';

interface AccessibilityPageProps {
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

export function AccessibilityPage({ 
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
}: AccessibilityPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 flex flex-col">
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
                <Heart className="w-12 h-12" />
              </div>
            </div>
            <h1 className="mb-4">Accessibility Statement</h1>
            <p className="text-lg opacity-90">
              {APP_NAME} is committed to making shopping accessible to everyone
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
          <div className="bg-teal-50 border-l-4 border-teal-400 p-4">
            <p className="text-gray-800 leading-relaxed">
              At {APP_NAME}, we believe everyone should have equal access to great deals and shopping experiences. We're committed to ensuring our platform is accessible to people with disabilities and strive to meet Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
            </p>
          </div>

          {/* Section 1 */}
          <section>
            <h2 className="text-indigo-600 mb-3">1. Our Commitment</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                {APP_NAME} is dedicated to providing an inclusive shopping experience for all users, including those with:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Visual impairments</li>
                <li>Hearing impairments</li>
                <li>Motor disabilities</li>
                <li>Cognitive disabilities</li>
              </ul>
            </div>
          </section>

          {/* Section 2 - Features */}
          <section>
            <h2 className="text-indigo-600 mb-3">2. Accessibility Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Visual */}
              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-indigo-600" />
                  <h3 className="text-gray-900">Visual Accessibility</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                  <li>High contrast color schemes</li>
                  <li>Resizable text and images</li>
                  <li>Screen reader compatibility</li>
                  <li>Alternative text for images</li>
                  <li>Clear visual indicators</li>
                </ul>
              </div>

              {/* Motor */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Hand className="w-6 h-6 text-purple-600" />
                  <h3 className="text-gray-900">Motor Accessibility</h3>
                </div>
                <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
                  <li>Keyboard navigation support</li>
                  <li>Large clickable areas</li>
                  <li>Skip navigation links</li>
                  <li>No time-limited actions</li>
                  <li>Touch-friendly interface</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-indigo-600 mb-3">3. Technical Standards</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                Our platform is designed to be compatible with:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Modern web browsers (Chrome, Firefox, Safari, Edge)</li>
                <li>Screen readers (JAWS, NVDA, VoiceOver)</li>
                <li>Browser text size controls and zoom functions</li>
                <li>Operating system accessibility features</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-indigo-600 mb-3">4. Keyboard Navigation</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                You can navigate {APP_NAME} using only your keyboard:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Tab</strong> - Move forward through links and buttons</li>
                <li><strong>Shift + Tab</strong> - Move backward</li>
                <li><strong>Enter/Space</strong> - Activate links and buttons</li>
                <li><strong>Arrow keys</strong> - Navigate within menus and carousels</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-indigo-600 mb-3">5. Ongoing Improvements</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                Accessibility is an ongoing effort. We regularly:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Conduct accessibility audits and testing</li>
                <li>Update our platform based on user feedback</li>
                <li>Train our team on accessibility best practices</li>
                <li>Monitor compliance with latest WCAG guidelines</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-indigo-600 mb-3">6. Third-Party Content</h2>
            <p className="text-gray-700 leading-relaxed">
              While we strive to ensure accessibility across our platform, some product images and descriptions are provided by third-party sellers. We encourage sellers to provide accessible content and are working to implement accessibility guidelines for all marketplace participants.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-indigo-600 mb-3">7. Limitations & Alternatives</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                Despite our efforts, some areas may not yet be fully accessible. If you encounter any barriers, we offer alternative ways to shop:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Contact our support team for assistance with orders</li>
                <li>Request product information in accessible formats</li>
                <li>Get help navigating the platform via phone or email</li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-indigo-600 mb-3">8. Feedback & Support</h2>
            <div className="space-y-3 text-gray-700 leading-relaxed">
              <p>
                Your feedback helps us improve. If you experience any accessibility issues or have suggestions, please contact us:
              </p>
              <div className="bg-indigo-50 p-4 rounded-lg space-y-1">
                <p>📧 accessibility@blinkdeals.in</p>
                <p>📧 support@blinkdeals.in</p>
                <p>📞 Customer Support: Available 24/7</p>
                <p>📍 {APP_NAME} Technologies Pvt. Ltd., Bengaluru, India</p>
              </div>
              <p className="mt-3">
                We aim to respond to accessibility inquiries within 2 business days.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-indigo-600 mb-3">9. Formal Complaints</h2>
            <p className="text-gray-700 leading-relaxed">
              If you're not satisfied with our response to your accessibility concern, you may escalate the issue to our senior management team at grievance@blinkdeals.in. We're committed to resolving all accessibility issues promptly and fairly.
            </p>
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
