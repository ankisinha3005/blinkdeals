import { useState, useEffect } from 'react';
import { FlashSaleHomepage } from './components/FlashSaleHomepage';
import { ProductDetails } from './components/ProductDetails';
import { CheckoutPage } from './components/CheckoutPage';
import { LoginPage } from './components/LoginPage';
import { BecomeSellerPage } from './components/BecomeSellerPage';
import { SupportPage } from './components/SupportPage';
import { AboutPage } from './components/AboutPage';
import { CareersPage } from './components/CareersPage';
import { PressMediaPage } from './components/PressMediaPage';
import { BlogPage } from './components/BlogPage';
import { ProfilePage } from './components/ProfilePage';
import { OrdersPage } from './components/OrdersPage';
import { TermsPage } from './components/TermsPage';
import { PrivacyPage } from './components/PrivacyPage';
import { CookiePolicyPage } from './components/CookiePolicyPage';
import { DisclaimerPage } from './components/DisclaimerPage';
import { AccessibilityPage } from './components/AccessibilityPage';
import { WebsiteWireframe } from './components/WebsiteWireframe';
import { SellerPresentation } from './components/SellerPresentation';
import { SellerPitchPage } from './components/SellerPitchPage';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';
import { products } from './data/products';
import { Product, ProductVariant, Page, UserData } from './types';
import { FileText, Presentation, FileDown } from 'lucide-react';
import { authService } from './services/authService';
import { apiService } from './services/apiService';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [testMode, setTestMode] = useState<'started' | 'upcoming'>('started');
  const [showWireframe, setShowWireframe] = useState(false);
  const [showPresentation, setShowPresentation] = useState(false);
  const [showPitchPage, setShowPitchPage] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  const [productsError, setProductsError] = useState<string | null>(null);

  // Check login state on app load
  useEffect(() => {
    const storedLoginState = localStorage.getItem('isLoggedIn');
    const storedUserData = localStorage.getItem('userData');
    
    if (storedLoginState === 'true' && storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        setIsLoggedIn(true);
        setUserData(parsedUserData);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userData');
      }
    }
  }, []);

  // Listen for logout events (token expiration, 401 responses, etc.)
  useEffect(() => {
    const handleLogout = () => {
      console.log('Logout event received, updating UI state');
      setIsLoggedIn(false);
      setUserData(null);
      setCurrentPage('home');
      // Clear any stored login state
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userData');
      
      // Show notification to user
      toast.error('Session expired', {
        description: 'Your session has expired. Please login again.',
        duration: 5000,
      });
    };

    window.addEventListener('userLogout', handleLogout);
    
    return () => {
      window.removeEventListener('userLogout', handleLogout);
    };
  }, []);

  // Periodic token validation (check every 5 minutes)
  useEffect(() => {
    if (!isLoggedIn) return;

    const validateToken = () => {
      if (authService.isTokenExpired()) {
        console.log('Token expired during periodic check, logging out');
        authService.logout();
      }
    };

    // Check immediately
    validateToken();

    // Set up interval to check every 5 minutes
    const interval = setInterval(validateToken, 5 * 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isLoggedIn]);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoadingProducts(true);
        setProductsError(null);
        
        const response = await apiService.getProducts();
        
        if (response.success && response.data) {
          setProducts(response.data);
        } else {
          // Fallback to local products if backend fails
          console.warn('Backend products failed, using local products:', response.message);
          const { products: localProducts } = await import('./data/products');
          setProducts(localProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        // Fallback to local products
        const { products: localProducts } = await import('./data/products');
        setProducts(localProducts);
        setProductsError('Failed to load products from server');
      } finally {
        setIsLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);

  // Set sale times based on test mode
  const now = new Date();
  const saleStartTime = testMode === 'started'
    ? new Date(now.getTime() - 30 * 60 * 1000) // Started 30 minutes ago
    : new Date(now.getTime() + 60 * 60 * 1000); // Starts in 1 hour
  
  const saleEndTime = testMode === 'started'
    ? new Date(now.getTime() + 90 * 60 * 1000) // Ends in 90 minutes
    : new Date(now.getTime() + 150 * 60 * 1000); // Ends in 2.5 hours

  const handleBuyNow = (product: Product, variant?: ProductVariant) => {
    setSelectedProduct(product);
    setSelectedVariant(variant || null);
    setCurrentPage('checkout');
  };

  const handleShowDetails = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('details');
  };

  const handleBack = () => {
    setCurrentPage('home');
    setSelectedProduct(null);
    setSelectedVariant(null);
  };
  
  const handleBuyNowFromDetails = (variant?: ProductVariant) => {
    setSelectedVariant(variant || null);
    setCurrentPage('checkout');
  };

  const handleLogin = () => {
    setCurrentPage('login');
  };

  const handleLoginSuccess = (user: { id: string; name: string; phone: string; email?: string; gender?: 'male' | 'female' | 'other' }) => {
    setIsLoggedIn(true);
    setUserData(user);
    // Store in localStorage for persistence
    localStorage.setItem('userData', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    setCurrentPage('home');
    // Use authService.logout() to ensure consistent logout behavior
    authService.logout();
  };

  const handleProfile = () => {
    setCurrentPage('profile');
  };

  const handleOrders = () => {
    setCurrentPage('orders');
  };

  const handleUpdateProfile = (updatedData: { name: string; email?: string; gender?: 'male' | 'female' | 'other' }) => {
    if (userData) {
      const updatedUserData = {
        ...userData,
        ...updatedData
      };
      setUserData(updatedUserData);
      // Update localStorage
      localStorage.setItem('userData', JSON.stringify(updatedUserData));
    }
  };

  const handleBecomeSeller = () => {
    setCurrentPage('becomeSeller');
  };

  const handleSupport = () => {
    setCurrentPage('support');
  };

  const handleAbout = () => {
    setCurrentPage('about');
  };

  const handleCareers = () => {
    setCurrentPage('careers');
  };

  const handlePressMedia = () => {
    setCurrentPage('pressMedia');
  };

  const handleBlog = () => {
    setCurrentPage('blog');
  };

  const handleTerms = () => {
    setCurrentPage('terms');
  };

  const handlePrivacy = () => {
    setCurrentPage('privacy');
  };

  const handleCookiePolicy = () => {
    setCurrentPage('cookiePolicy');
  };

  const handleDisclaimer = () => {
    setCurrentPage('disclaimer');
  };

  const handleAccessibility = () => {
    setCurrentPage('accessibility');
  };

  // Show pitch page if enabled
  if (showPitchPage) {
    return (
      <>
        <button
          onClick={() => setShowPitchPage(false)}
          className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg px-4 py-2 border-2 border-indigo-300 hover:bg-indigo-50 transition-colors flex items-center gap-2 no-print"
        >
          ← Back to Website
        </button>
        <SellerPitchPage />
      </>
    );
  }

  // Show presentation if enabled
  if (showPresentation) {
    return <SellerPresentation onClose={() => setShowPresentation(false)} />;
  }

  // Show wireframe view if enabled
  if (showWireframe) {
    return (
      <>
        <button
          onClick={() => setShowWireframe(false)}
          className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg px-4 py-2 border-2 border-indigo-300 hover:bg-indigo-50 transition-colors flex items-center gap-2"
        >
          ← Back to Website
        </button>
        <WebsiteWireframe />
      </>
    );
  }

  return (
    <>
      {/* Test Mode Toggle & Wireframe Button - Remove in production */}
      {currentPage === 'home' && (
        <div className="fixed top-4 right-4 z-50 space-y-2">
          <div className="bg-white rounded-lg shadow-lg p-4 border-2 border-indigo-300">
            <div className="text-sm text-gray-600 mb-2">🧪 Test Mode</div>
            <div className="flex gap-2">
              <button
                onClick={() => setTestMode('started')}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  testMode === 'started'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Sale Started
              </button>
              <button
                onClick={() => setTestMode('upcoming')}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  testMode === 'upcoming'
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Sale Starting In
              </button>
            </div>
          </div>
          
          <button
            onClick={() => setShowPresentation(true)}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-lg shadow-lg px-4 py-2 border-2 border-indigo-600 transition-all flex items-center justify-center gap-2"
          >
            <Presentation className="w-4 h-4" />
            Seller Pitch
          </button>

          <button
            onClick={() => setShowPitchPage(true)}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-lg shadow-lg px-4 py-2 border-2 border-green-600 transition-all flex items-center justify-center gap-2"
          >
            <FileDown className="w-4 h-4" />
            Pitch Page (PDF)
          </button>

          <button
            onClick={() => setShowWireframe(true)}
            className="w-full bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white rounded-lg shadow-lg px-4 py-2 border-2 border-amber-500 transition-all flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4" />
            View Wireframe
          </button>
        </div>
      )}

      {currentPage === 'home' && (
        <FlashSaleHomepage
          products={products}
          saleStartTime={saleStartTime}
          saleEndTime={saleEndTime}
          onBuyNow={handleBuyNow}
          onShowDetails={handleShowDetails}
          onLogin={handleLogin}
          onBecomeSeller={handleBecomeSeller}
          onSupport={handleSupport}
          onAbout={handleAbout}
          onCareers={handleCareers}
          onPressMedia={handlePressMedia}
          onBlog={handleBlog}
          onTerms={handleTerms}
          onPrivacy={handlePrivacy}
          onCookiePolicy={handleCookiePolicy}
          onDisclaimer={handleDisclaimer}
          onAccessibility={handleAccessibility}
          onProfile={handleProfile}
          onOrders={handleOrders}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          userName={userData?.name}
          isLoadingProducts={isLoadingProducts}
          productsError={productsError}
        />
      )}

      {currentPage === 'details' && selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onBack={handleBack}
          onBuyNow={handleBuyNowFromDetails}
          onLogin={handleLogin}
          onBecomeSeller={handleBecomeSeller}
          onSupport={handleSupport}
          onAbout={handleAbout}
          onCareers={handleCareers}
          onPressMedia={handlePressMedia}
          onBlog={handleBlog}
          onTerms={handleTerms}
          onPrivacy={handlePrivacy}
          onCookiePolicy={handleCookiePolicy}
          onDisclaimer={handleDisclaimer}
          onAccessibility={handleAccessibility}
          onProfile={handleProfile}
          onOrders={handleOrders}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          userName={userData?.name}
        />
      )}

      {currentPage === 'checkout' && selectedProduct && (
        <CheckoutPage
          product={selectedProduct}
          selectedVariant={selectedVariant}
          onBack={handleBack}
          onLogin={handleLogin}
          onBecomeSeller={handleBecomeSeller}
          onSupport={handleSupport}
          onAbout={handleAbout}
          onCareers={handleCareers}
          onPressMedia={handlePressMedia}
          onBlog={handleBlog}
          onTerms={handleTerms}
          onPrivacy={handlePrivacy}
          onCookiePolicy={handleCookiePolicy}
          onDisclaimer={handleDisclaimer}
          onAccessibility={handleAccessibility}
          onProfile={handleProfile}
          onOrders={handleOrders}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          userName={userData?.name}
        />
      )}

      {currentPage === 'login' && (
        <LoginPage
          onBack={handleBack}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {currentPage === 'becomeSeller' && (
        <BecomeSellerPage
          onBack={handleBack}
          onLogin={handleLogin}
          onBecomeSeller={handleBecomeSeller}
          onSupport={handleSupport}
          onAbout={handleAbout}
          onCareers={handleCareers}
          onPressMedia={handlePressMedia}
          onBlog={handleBlog}
          onTerms={handleTerms}
          onPrivacy={handlePrivacy}
          onCookiePolicy={handleCookiePolicy}
          onDisclaimer={handleDisclaimer}
          onAccessibility={handleAccessibility}
          onProfile={handleProfile}
          onOrders={handleOrders}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          userName={userData?.name}
        />
      )}

      {currentPage === 'support' && (
        <SupportPage
          onBack={handleBack}
          onLogin={handleLogin}
          onBecomeSeller={handleBecomeSeller}
          onSupport={handleSupport}
          onAbout={handleAbout}
          onCareers={handleCareers}
          onPressMedia={handlePressMedia}
          onBlog={handleBlog}
          onTerms={handleTerms}
          onPrivacy={handlePrivacy}
          onCookiePolicy={handleCookiePolicy}
          onDisclaimer={handleDisclaimer}
          onAccessibility={handleAccessibility}
          onProfile={handleProfile}
          onOrders={handleOrders}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          userName={userData?.name}
        />
      )}

      {currentPage === 'about' && (
        <AboutPage
          onBack={handleBack}
          onLogin={handleLogin}
          onBecomeSeller={handleBecomeSeller}
          onSupport={handleSupport}
          onAbout={handleAbout}
          onCareers={handleCareers}
          onPressMedia={handlePressMedia}
          onBlog={handleBlog}
          onTerms={handleTerms}
          onPrivacy={handlePrivacy}
          onCookiePolicy={handleCookiePolicy}
          onDisclaimer={handleDisclaimer}
          onAccessibility={handleAccessibility}
          onProfile={handleProfile}
          onOrders={handleOrders}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          userName={userData?.name}
        />
      )}

      {currentPage === 'careers' && (
        <CareersPage
          onBack={handleBack}
          onLogin={handleLogin}
          onBecomeSeller={handleBecomeSeller}
          onSupport={handleSupport}
          onAbout={handleAbout}
          onCareers={handleCareers}
          onPressMedia={handlePressMedia}
          onBlog={handleBlog}
          onTerms={handleTerms}
          onPrivacy={handlePrivacy}
          onCookiePolicy={handleCookiePolicy}
          onDisclaimer={handleDisclaimer}
          onAccessibility={handleAccessibility}
          onProfile={handleProfile}
          onOrders={handleOrders}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          userName={userData?.name}
        />
      )}

      {currentPage === 'pressMedia' && (
        <PressMediaPage
          onBack={handleBack}
          onLogin={handleLogin}
          onBecomeSeller={handleBecomeSeller}
          onSupport={handleSupport}
          onAbout={handleAbout}
          onCareers={handleCareers}
          onPressMedia={handlePressMedia}
          onBlog={handleBlog}
          onTerms={handleTerms}
          onPrivacy={handlePrivacy}
          onCookiePolicy={handleCookiePolicy}
          onDisclaimer={handleDisclaimer}
          onAccessibility={handleAccessibility}
          onProfile={handleProfile}
          onOrders={handleOrders}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          userName={userData?.name}
        />
      )}

      {currentPage === 'blog' && (
        <BlogPage
          onBack={handleBack}
          onLogin={handleLogin}
          onBecomeSeller={handleBecomeSeller}
          onSupport={handleSupport}
          onAbout={handleAbout}
          onCareers={handleCareers}
          onPressMedia={handlePressMedia}
          onBlog={handleBlog}
          onTerms={handleTerms}
          onPrivacy={handlePrivacy}
          onCookiePolicy={handleCookiePolicy}
          onDisclaimer={handleDisclaimer}
          onAccessibility={handleAccessibility}
          onProfile={handleProfile}
          onOrders={handleOrders}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          userName={userData?.name}
        />
      )}

      {currentPage === 'profile' && userData && (
        <ProfilePage
          onBack={handleBack}
          userData={userData}
          onUpdateProfile={handleUpdateProfile}
        />
      )}

      {currentPage === 'orders' && (
        <OrdersPage
          onBack={handleBack}
        />
      )}

      {currentPage === 'terms' && (
        <TermsPage
          onBack={handleBack}
          onLogin={handleLogin}
          onBecomeSeller={handleBecomeSeller}
          onSupport={handleSupport}
          onAbout={handleAbout}
          onCareers={handleCareers}
          onPressMedia={handlePressMedia}
          onBlog={handleBlog}
          onTerms={handleTerms}
          onPrivacy={handlePrivacy}
          onCookiePolicy={handleCookiePolicy}
          onDisclaimer={handleDisclaimer}
          onAccessibility={handleAccessibility}
          onProfile={handleProfile}
          onOrders={handleOrders}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          userName={userData?.name}
        />
      )}

      {currentPage === 'privacy' && (
        <PrivacyPage
          onBack={handleBack}
          onLogin={handleLogin}
          onBecomeSeller={handleBecomeSeller}
          onSupport={handleSupport}
          onAbout={handleAbout}
          onCareers={handleCareers}
          onPressMedia={handlePressMedia}
          onBlog={handleBlog}
          onTerms={handleTerms}
          onPrivacy={handlePrivacy}
          onCookiePolicy={handleCookiePolicy}
          onDisclaimer={handleDisclaimer}
          onAccessibility={handleAccessibility}
          onProfile={handleProfile}
          onOrders={handleOrders}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          userName={userData?.name}
        />
      )}

      {currentPage === 'cookiePolicy' && (
        <CookiePolicyPage
          onBack={handleBack}
          onLogin={handleLogin}
          onBecomeSeller={handleBecomeSeller}
          onSupport={handleSupport}
          onAbout={handleAbout}
          onCareers={handleCareers}
          onPressMedia={handlePressMedia}
          onBlog={handleBlog}
          onTerms={handleTerms}
          onPrivacy={handlePrivacy}
          onCookiePolicy={handleCookiePolicy}
          onDisclaimer={handleDisclaimer}
          onAccessibility={handleAccessibility}
          onProfile={handleProfile}
          onOrders={handleOrders}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          userName={userData?.name}
        />
      )}

      {currentPage === 'disclaimer' && (
        <DisclaimerPage
          onBack={handleBack}
          onLogin={handleLogin}
          onBecomeSeller={handleBecomeSeller}
          onSupport={handleSupport}
          onAbout={handleAbout}
          onCareers={handleCareers}
          onPressMedia={handlePressMedia}
          onBlog={handleBlog}
          onTerms={handleTerms}
          onPrivacy={handlePrivacy}
          onCookiePolicy={handleCookiePolicy}
          onDisclaimer={handleDisclaimer}
          onAccessibility={handleAccessibility}
          onProfile={handleProfile}
          onOrders={handleOrders}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          userName={userData?.name}
        />
      )}

      {currentPage === 'accessibility' && (
        <AccessibilityPage
          onBack={handleBack}
          onLogin={handleLogin}
          onBecomeSeller={handleBecomeSeller}
          onSupport={handleSupport}
          onAbout={handleAbout}
          onCareers={handleCareers}
          onPressMedia={handlePressMedia}
          onBlog={handleBlog}
          onTerms={handleTerms}
          onPrivacy={handlePrivacy}
          onCookiePolicy={handleCookiePolicy}
          onDisclaimer={handleDisclaimer}
          onAccessibility={handleAccessibility}
          onProfile={handleProfile}
          onOrders={handleOrders}
          onLogout={handleLogout}
          isLoggedIn={isLoggedIn}
          userName={userData?.name}
        />
      )}
      
      <Toaster />
    </>
  );
}
