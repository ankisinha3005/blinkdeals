import { Newspaper, Download, Calendar, User, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Header } from './Header';
import { Footer } from './Footer';
import { GRADIENTS, COLORS, APP_NAME } from '../constants';
import { motion } from 'motion/react';
import { Separator } from './ui/separator';

interface PressMediaPageProps {
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

interface PressRelease {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  author: string;
  downloadUrl?: string;
}

const pressReleases: PressRelease[] = [
  {
    id: '1',
    title: `${APP_NAME} Launches Revolutionary Flash Sales Platform`,
    date: 'October 15, 2025',
    category: 'Product Launch',
    excerpt: 'Today marks the official launch of BlinkDeals, a new flash sales platform that brings time-limited deals on electronics and gadgets to consumers across India.',
    author: 'Press Team',
  },
  {
    id: '2',
    title: 'Zero Commission Model Empowers Indian Sellers',
    date: 'October 10, 2025',
    category: 'Business',
    excerpt: 'BlinkDeals announces its groundbreaking zero-commission policy for sellers, enabling small businesses and entrepreneurs to maximize their profits.',
    author: 'Business Desk',
  },
  {
    id: '3',
    title: `${APP_NAME} Reaches 100,000 Active Users Milestone`,
    date: 'September 28, 2025',
    category: 'Growth',
    excerpt: 'Just three months after launch, BlinkDeals celebrates crossing the 100,000 active users mark, demonstrating strong market demand for flash sales.',
    author: 'Marketing Team',
  },
];

export function PressMediaPage({
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
  userName,
}: PressMediaPageProps) {
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

      <main className="flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <div className={`${GRADIENTS.primary} p-4 rounded-2xl`}>
                <Newspaper className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className={`${GRADIENTS.primary} bg-clip-text text-transparent mb-4`}>
              Press & Media
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Latest news, press releases, and media resources about {APP_NAME}
            </p>
          </motion.div>

          {/* Media Kit Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 mb-8"
          >
            <h2 className="text-gray-900 mb-6">Media Kit</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                <Download className={`w-8 h-8 text-${COLORS.primary} mx-auto mb-3`} />
                <h3 className="text-gray-900 text-lg mb-2">Logo Pack</h3>
                <p className="text-gray-600 text-sm mb-4">High-resolution logos in various formats</p>
                <Button variant="outline" className="w-full">
                  Download
                </Button>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                <Download className={`w-8 h-8 text-${COLORS.primary} mx-auto mb-3`} />
                <h3 className="text-gray-900 text-lg mb-2">Brand Guidelines</h3>
                <p className="text-gray-600 text-sm mb-4">Official brand identity guidelines</p>
                <Button variant="outline" className="w-full">
                  Download
                </Button>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
                <Download className={`w-8 h-8 text-${COLORS.primary} mx-auto mb-3`} />
                <h3 className="text-gray-900 text-lg mb-2">Product Images</h3>
                <p className="text-gray-600 text-sm mb-4">Screenshots and promotional images</p>
                <Button variant="outline" className="w-full">
                  Download
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Press Releases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-gray-900 mb-6">Latest Press Releases</h2>
            <div className="space-y-4">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={release.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge className={`${GRADIENTS.primary} text-white`}>
                          {release.category}
                        </Badge>
                        <span className="text-gray-500 text-sm flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {release.date}
                        </span>
                      </div>
                      <h3 className={`text-gray-900 mb-2 group-hover:text-${COLORS.primary} transition-colors`}>
                        {release.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{release.excerpt}</p>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <User className="w-4 h-4" />
                        <span>{release.author}</span>
                      </div>
                    </div>
                    <ExternalLink className={`w-6 h-6 text-${COLORS.primary} group-hover:translate-x-1 transition-transform duration-300`} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-gray-900 text-center mb-6">Media Inquiries</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-600 mb-6">
                For press inquiries, interviews, or media partnerships, please contact our press team.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <span>Email:</span>
                  <a 
                    href="mailto:press@blinkdeals.in" 
                    className={`text-${COLORS.primary} hover:underline`}
                  >
                    press@blinkdeals.in
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-700">
                  <span>Phone:</span>
                  <a 
                    href="tel:+919876543210" 
                    className={`text-${COLORS.primary} hover:underline`}
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <Separator className="my-6" />
              <p className="text-gray-500 text-sm">
                We typically respond to media inquiries within 24 hours during business days.
              </p>
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
