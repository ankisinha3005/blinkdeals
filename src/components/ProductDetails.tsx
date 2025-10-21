import { useState } from 'react';
import { Product, ProductVariant } from '../types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ShoppingCart, Package, Star, Store, TrendingUp, Shield, Truck, RotateCcw, Check, Weight, Ruler, Package2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Header } from './Header';
import { Footer } from './Footer';
import { ShareDialog } from './ShareDialog';
import { formatCurrency, COLORS, GRADIENTS } from '../constants';
import { motion } from 'motion/react';

interface ProductDetailsProps {
  product: Product;
  onBack: () => void;
  onBuyNow: (variant?: ProductVariant) => void;
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

export function ProductDetails({ product, onBack, onBuyNow, onLogin, onBecomeSeller, onSupport, onAbout, onCareers, onPressMedia, onBlog, onTerms, onPrivacy, onCookiePolicy, onDisclaimer, onAccessibility, onProfile, onOrders, onLogout, isLoggedIn, userName }: ProductDetailsProps) {
  const productImages = product.images || [product.image];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Variant selection state
  const defaultVariant = product.variants?.find(v => v.isDefault) || product.variants?.[0];
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(defaultVariant);

  // Get current price and stock based on selected variant
  const currentPrice = selectedVariant?.price ?? product.price;
  const currentOriginalPrice = selectedVariant?.originalPrice ?? product.originalPrice;
  const currentStock = selectedVariant?.stock ?? product.stock;
  const currentDiscount = Math.round(((currentOriginalPrice - currentPrice) / currentOriginalPrice) * 100);

  // Get variant icon based on type
  const getVariantIcon = () => {
    switch (product.variantType) {
      case 'size':
        return <Ruler className="w-4 h-4" />;
      case 'weight':
        return <Weight className="w-4 h-4" />;
      case 'quantity':
        return <Package2 className="w-4 h-4" />;
      case 'color':
        return null;
      default:
        return null;
    }
  };

  // Get variant label based on type
  const getVariantLabel = () => {
    switch (product.variantType) {
      case 'size':
        return 'Select Size';
      case 'weight':
        return 'Select Weight';
      case 'quantity':
        return 'Select Quantity';
      case 'color':
        return 'Select Color';
      default:
        return 'Select Option';
    }
  };

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

      {/* Main Content - Scrollable */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Product Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden mb-6"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-6 lg:p-10">
              {/* Left: Image Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <motion.div 
                  key={selectedImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100"
                >
                  <ImageWithFallback
                    src={productImages[selectedImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 shadow-lg">
                    Save {currentDiscount}%
                  </Badge>
                </motion.div>

                {/* Thumbnail Gallery */}
                {productImages.length > 1 && (
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {productImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                          selectedImageIndex === index
                            ? `border-${COLORS.primary} ring-2 ring-${COLORS.primary}/20 shadow-md`
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`${product.name} view ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Product Info */}
              <div className="flex flex-col">
                {/* Category Badge */}
                <Badge className={`w-fit mb-3 ${GRADIENTS.primary} border-none`}>
                  {product.category}
                </Badge>

                {/* Product Name */}
                <h1 className="text-gray-900 mb-3">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">(128 reviews)</span>
                </div>

                {/* Price */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
                  <div className="flex items-end gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Special Price</p>
                      <p className={`text-4xl text-${COLORS.primary}`}>{formatCurrency(currentPrice)}</p>
                    </div>
                    <div className="pb-1">
                      <p className="text-gray-400 line-through text-lg">{formatCurrency(currentOriginalPrice)}</p>
                      <p className="text-green-600 text-sm">Save {formatCurrency(currentOriginalPrice - currentPrice)}</p>
                    </div>
                  </div>
                </div>

                {/* Variant Selection */}
                {product.variants && product.variants.length > 0 && (
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      {getVariantIcon()}
                      <span className="text-gray-900">{getVariantLabel()}</span>
                      {selectedVariant && (
                        <span className={`text-sm text-${COLORS.primary}`}>
                          ({selectedVariant.label})
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((variant) => (
                        <button
                          key={variant.id}
                          onClick={() => setSelectedVariant(variant)}
                          disabled={variant.stock === 0}
                          className={`relative px-4 py-2 rounded-lg border-2 transition-all min-w-[80px] ${
                            selectedVariant?.id === variant.id
                              ? `border-${COLORS.primary} bg-indigo-50 text-${COLORS.primary}`
                              : variant.stock === 0
                              ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                              : 'border-gray-300 hover:border-indigo-300 text-gray-700'
                          }`}
                        >
                          <div className="text-center">
                            <div className={selectedVariant?.id === variant.id ? '' : ''}>{variant.label}</div>
                            {variant.price !== currentPrice && (
                              <div className="text-xs text-gray-500 mt-0.5">
                                {formatCurrency(variant.price)}
                              </div>
                            )}
                          </div>
                          {selectedVariant?.id === variant.id && (
                            <Check className={`absolute top-1 right-1 w-4 h-4 text-${COLORS.primary}`} />
                          )}
                          {variant.stock === 0 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-xs bg-white px-2 py-0.5 rounded">Out of Stock</span>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

                {/* Stock Alert */}
                <div className={`flex items-center gap-2 px-4 py-3 rounded-lg mb-6 ${
                  currentStock < 10 
                    ? 'bg-red-50 border border-red-200' 
                    : 'bg-amber-50 border border-amber-200'
                }`}>
                  <Package className={`w-5 h-5 flex-shrink-0 ${
                    currentStock < 10 ? 'text-red-600' : 'text-amber-600'
                  }`} />
                  <span className={`text-sm ${
                    currentStock < 10 ? 'text-red-800' : 'text-amber-800'
                  }`}>
                    {currentStock < 10 ? 'Hurry! ' : ''}Only <span className="font-semibold">{currentStock} items</span> left in stock!
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mb-6">
                  <Button
                    onClick={() => onBuyNow(selectedVariant)}
                    disabled={currentStock === 0}
                    className={`flex-1 ${GRADIENTS.primary} ${GRADIENTS.primaryHover} h-12`}
                    size="lg"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    {currentStock === 0 ? 'Out of Stock' : 'Buy Now'}
                  </Button>
                  <ShareDialog
                    title={product.name}
                    description={product.description}
                    trigger={
                      <Button variant="outline" size="lg" className="px-6 h-12 border-2">
                        Share
                      </Button>
                    }
                  />
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2">
                    <Truck className={`w-4 h-4 text-${COLORS.primary} flex-shrink-0`} />
                    <span>Free Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2">
                    <RotateCcw className={`w-4 h-4 text-${COLORS.primary} flex-shrink-0`} />
                    <span>30-Day Returns</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg px-3 py-2">
                    <Shield className={`w-4 h-4 text-${COLORS.primary} flex-shrink-0`} />
                    <span>1 Year Warranty</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Specifications */}
          {product.details && Object.keys(product.details).length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden mb-6"
            >
              <div className="p-6 lg:p-10">
                <h2 className="text-gray-900 mb-6 flex items-center gap-2">
                  <div className={`w-1 h-6 rounded-full ${GRADIENTS.primary}`}></div>
                  Product Specifications
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.details).map(([key, value], index) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-xl border border-gray-100"
                    >
                      <Check className={`w-5 h-5 text-${COLORS.primary} mt-0.5 flex-shrink-0`} />
                      <div className="flex-1">
                        <dt className="text-sm text-gray-600 mb-1">{key}</dt>
                        <dd className="text-gray-900">{value}</dd>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Seller Information */}
          {product.seller && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-6 lg:p-10">
                <h2 className="text-gray-900 mb-6 flex items-center gap-2">
                  <div className={`w-1 h-6 rounded-full ${GRADIENTS.primary}`}></div>
                  Seller Information
                </h2>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Seller Name & Description */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-full ${GRADIENTS.primary} flex items-center justify-center`}>
                        <Store className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-gray-900">{product.seller.name}</h3>
                        <p className="text-sm text-gray-600">Joined {product.seller.joinedDate}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{product.seller.description}</p>
                  </div>

                  {/* Seller Stats */}
                  <div className="flex md:flex-col gap-6 md:gap-4 md:min-w-[200px]">
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                      <Star className="w-8 h-8 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                      <div>
                        <div className="text-2xl text-gray-900">{product.seller.rating}</div>
                        <div className="text-xs text-gray-600">Rating</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                      <TrendingUp className={`w-8 h-8 text-${COLORS.primary} flex-shrink-0`} />
                      <div>
                        <div className="text-2xl text-gray-900">{product.seller.totalSales.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">Total Sales</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
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
