import { BookOpen, Calendar, User, Clock, TrendingUp, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Header } from './Header';
import { Footer } from './Footer';
import { GRADIENTS, COLORS, APP_NAME } from '../constants';
import { motion } from 'motion/react';

interface BlogPageProps {
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

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Tips to Get the Best Deals During Flash Sales',
    excerpt: 'Master the art of flash sale shopping with these proven strategies. Learn how to prepare, what to look for, and how to snag the best deals before they\'re gone.',
    author: 'Priya Sharma',
    date: 'October 18, 2025',
    readTime: '5 min read',
    category: 'Shopping Tips',
    tags: ['Tips', 'Shopping', 'Deals'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
  },
  {
    id: '2',
    title: 'How Flash Sales Are Revolutionizing E-commerce in India',
    excerpt: 'Explore the growing trend of flash sales and how they\'re changing the way Indians shop online. From smartphones to fashion, discover the impact.',
    author: 'Rahul Verma',
    date: 'October 15, 2025',
    readTime: '7 min read',
    category: 'Industry Insights',
    tags: ['E-commerce', 'Trends', 'India'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  },
  {
    id: '3',
    title: 'Seller Success Story: How Raj Grew His Business 10x',
    excerpt: 'Meet Raj Kumar, a small business owner who leveraged BlinkDeals\' zero-commission platform to scale his electronics business from local to national.',
    author: 'Anjali Desai',
    date: 'October 12, 2025',
    readTime: '6 min read',
    category: 'Success Stories',
    tags: ['Sellers', 'Growth', 'Inspiration'],
    imageUrl: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop',
  },
  {
    id: '4',
    title: 'The Psychology Behind Flash Sales: Why We Love Limited Time Offers',
    excerpt: 'Dive into the behavioral economics and psychology that makes flash sales so irresistible. Understanding FOMO, urgency, and decision-making.',
    author: 'Dr. Kavita Menon',
    date: 'October 8, 2025',
    readTime: '8 min read',
    category: 'Psychology',
    tags: ['Psychology', 'Marketing', 'Consumer Behavior'],
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
  },
  {
    id: '5',
    title: 'Smart Shopping: Setting Up Alerts for Your Favorite Products',
    excerpt: 'Never miss a deal again! Learn how to set up product alerts, create wishlists, and stay notified about flash sales on items you love.',
    author: 'Arjun Patel',
    date: 'October 5, 2025',
    readTime: '4 min read',
    category: 'How-To',
    tags: ['Tutorial', 'Features', 'Shopping'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
  },
  {
    id: '6',
    title: 'Sustainability Meets Savings: Eco-Friendly Products on Flash Sale',
    excerpt: 'Discover how you can save money while making environmentally conscious choices. Featured eco-friendly products and sustainable shopping tips.',
    author: 'Neha Gupta',
    date: 'October 1, 2025',
    readTime: '6 min read',
    category: 'Sustainability',
    tags: ['Eco-Friendly', 'Green', 'Sustainability'],
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
  },
];

export function BlogPage({
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
}: BlogPageProps) {
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
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <div className={`${GRADIENTS.primary} p-4 rounded-2xl`}>
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className={`${GRADIENTS.primary} bg-clip-text text-transparent mb-4`}>
              {APP_NAME} Blog
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Tips, insights, and stories about smart shopping, flash sales, and e-commerce trends
            </p>
          </motion.div>

          {/* Featured Post */}
          {blogPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 cursor-pointer group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={blogPosts[0].imageUrl}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4`}>
                    <Badge className={`${GRADIENTS.primary} text-white`}>Featured</Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4" variant="secondary">
                    {blogPosts[0].category}
                  </Badge>
                  <h2 className={`text-gray-900 mb-4 group-hover:text-${COLORS.primary} transition-colors`}>
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-gray-500 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Button className={`${GRADIENTS.primary} ${GRADIENTS.primaryHover} w-fit`}>
                    Read More
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${GRADIENTS.primary} text-white`}>
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`text-gray-900 mb-3 group-hover:text-${COLORS.primary} transition-colors line-clamp-2`}>
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-gray-500 text-xs mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {post.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 text-center"
          >
            <div className={`inline-block ${GRADIENTS.primary} p-4 rounded-2xl mb-4`}>
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-gray-900 mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest blog posts, shopping tips, and exclusive deals delivered straight to your inbox.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Button className={`${GRADIENTS.primary} ${GRADIENTS.primaryHover}`}>
                Subscribe
              </Button>
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
