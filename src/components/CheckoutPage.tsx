import { useState } from 'react';
import { Product, ProductVariant } from '../types';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Lock, MapPin, Plus, Check, Loader2, Ruler, Weight, Package2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Header } from './Header';
import { Footer } from './Footer';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Badge } from './ui/badge';
import { formatCurrency, COLORS, GRADIENTS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner@2.0.3';

interface CheckoutPageProps {
  product: Product;
  selectedVariant?: ProductVariant | null;
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

interface Address {
  id: string;
  name: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  isDefault?: boolean;
}

// Mock saved addresses - In production, fetch from backend API
const savedAddresses: Address[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    street: '123 MG Road',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400001',
    phone: '+91 9876543210',
    isDefault: true,
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    street: '456 Park Street',
    city: 'Kolkata',
    state: 'West Bengal',
    zipCode: '700016',
    phone: '+91 9876543210',
  },
];

export function CheckoutPage({ product, selectedVariant, onBack, onLogin, onBecomeSeller, onSupport, onAbout, onCareers, onPressMedia, onBlog, onTerms, onPrivacy, onCookiePolicy, onDisclaimer, onAccessibility, onProfile, onOrders, onLogout, isLoggedIn, userName }: CheckoutPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(savedAddresses[0].id);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [addresses, setAddresses] = useState<Address[]>(savedAddresses);
  
  // New address form state
  const [newAddress, setNewAddress] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
  });

  // Get current price and stock based on selected variant
  const currentPrice = selectedVariant?.price ?? product.price;
  const currentStock = selectedVariant?.stock ?? product.stock;

  const subtotal = currentPrice * quantity;
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  // Get variant icon based on type
  const getVariantIcon = () => {
    switch (product.variantType) {
      case 'size':
        return <Ruler className="w-3.5 h-3.5" />;
      case 'weight':
        return <Weight className="w-3.5 h-3.5" />;
      case 'quantity':
        return <Package2 className="w-3.5 h-3.5" />;
      default:
        return null;
    }
  };

  // Get variant display text
  const getVariantDisplayText = () => {
    if (!selectedVariant) return null;
    
    switch (product.variantType) {
      case 'size':
        return `Size: ${selectedVariant.label}`;
      case 'weight':
        return `Weight: ${selectedVariant.label}`;
      case 'quantity':
        return selectedVariant.label;
      case 'color':
        return `Color: ${selectedVariant.label}`;
      default:
        return selectedVariant.label;
    }
  };

  const handleCheckout = async () => {
    setIsProcessing(true);
    
    // Simulate API call to create order
    // In production: POST /api/orders with orderData
    const orderData = {
      productId: product.id,
      productName: product.name,
      quantity,
      addressId: selectedAddressId,
      subtotal,
      shipping,
      total,
      // Include variant information if available
      ...(selectedVariant && {
        variantId: selectedVariant.id,
        variantLabel: selectedVariant.label,
        variantType: product.variantType,
      }),
    };

    console.log('Creating order:', orderData);

    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      toast.success('Order placed successfully! 🎉');
      onBack();
    }, 2000);
  };

  const handleAddAddress = () => {
    // Validate form
    if (!newAddress.name || !newAddress.street || !newAddress.city || !newAddress.state || !newAddress.zipCode || !newAddress.phone) {
      toast.error('Please fill all address fields');
      return;
    }

    // In production: POST /api/addresses with newAddress
    const address: Address = {
      id: Date.now().toString(),
      ...newAddress,
    };
    
    setAddresses([...addresses, address]);
    setSelectedAddressId(address.id);
    setNewAddress({ name: '', street: '', city: '', state: '', zipCode: '', phone: '' });
    setShowAddressForm(false);
    toast.success('Address added successfully');
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

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-gray-900 mb-2">Secure Checkout</h1>
          <p className="text-gray-600 mb-8">Complete your purchase securely</p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              {/* Shipping Address */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-indigo-100">
                <div className="flex items-center gap-2 mb-6">
                  <div className={`w-8 h-8 ${GRADIENTS.primary} rounded-lg flex items-center justify-center`}>
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-gray-900">Delivery Address</h2>
                </div>
                
                {/* Saved Addresses */}
                <RadioGroup value={selectedAddressId} onValueChange={setSelectedAddressId}>
                  <div className="space-y-3 mb-4">
                    {addresses.map((address) => (
                      <motion.div
                        key={address.id}
                        whileHover={{ scale: 1.01 }}
                        className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                          selectedAddressId === address.id
                            ? 'border-indigo-400 bg-indigo-50 shadow-md'
                            : 'border-gray-200 hover:border-indigo-200'
                        }`}
                        onClick={() => setSelectedAddressId(address.id)}
                      >
                        <div className="flex items-start gap-3">
                          <RadioGroupItem value={address.id} id={address.id} className="mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-gray-900">{address.name}</span>
                              {address.isDefault && (
                                <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded">
                                  Default
                                </span>
                              )}
                            </div>
                            <p className="text-gray-600 text-sm">
                              {address.street}, {address.city}, {address.state} - {address.zipCode}
                            </p>
                            {address.phone && (
                              <p className="text-gray-500 text-sm mt-1">📱 {address.phone}</p>
                            )}
                          </div>
                          {selectedAddressId === address.id && (
                            <Check className="w-5 h-5 text-indigo-500" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </RadioGroup>

                {/* Add New Address Button */}
                {!showAddressForm && (
                  <Button
                    variant="outline"
                    onClick={() => setShowAddressForm(true)}
                    className="w-full border-dashed border-2 hover:border-indigo-300 hover:bg-indigo-50 h-12"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Address
                  </Button>
                )}

                {/* Add New Address Form */}
                <AnimatePresence>
                  {showAddressForm && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="border-2 border-dashed border-indigo-300 rounded-xl p-4 bg-indigo-50/50 mt-4">
                        <h3 className="text-gray-900 mb-4">New Delivery Address</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="md:col-span-2">
                            <Label htmlFor="newName">Full Name *</Label>
                            <Input
                              id="newName"
                              value={newAddress.name}
                              onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })}
                              placeholder="Rajesh Kumar"
                              className="mt-1 h-11"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <Label htmlFor="newStreet">Street Address *</Label>
                            <Input
                              id="newStreet"
                              value={newAddress.street}
                              onChange={(e) => setNewAddress({ ...newAddress, street: e.target.value })}
                              placeholder="123 MG Road"
                              className="mt-1 h-11"
                            />
                          </div>
                          <div>
                            <Label htmlFor="newCity">City *</Label>
                            <Input
                              id="newCity"
                              value={newAddress.city}
                              onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })}
                              placeholder="Mumbai"
                              className="mt-1 h-11"
                            />
                          </div>
                          <div>
                            <Label htmlFor="newState">State *</Label>
                            <Input
                              id="newState"
                              value={newAddress.state}
                              onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}
                              placeholder="Maharashtra"
                              className="mt-1 h-11"
                            />
                          </div>
                          <div>
                            <Label htmlFor="newZipCode">PIN Code *</Label>
                            <Input
                              id="newZipCode"
                              value={newAddress.zipCode}
                              onChange={(e) => setNewAddress({ ...newAddress, zipCode: e.target.value })}
                              placeholder="400001"
                              className="mt-1 h-11"
                            />
                          </div>
                          <div>
                            <Label htmlFor="newPhone">Phone Number *</Label>
                            <Input
                              id="newPhone"
                              value={newAddress.phone}
                              onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })}
                              placeholder="+91 9876543210"
                              className="mt-1 h-11"
                            />
                          </div>
                        </div>
                        <div className="flex gap-3 mt-4">
                          <Button
                            onClick={handleAddAddress}
                            className={`flex-1 ${GRADIENTS.primary} ${GRADIENTS.primaryHover} h-11`}
                          >
                            Save Address
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => {
                              setShowAddressForm(false);
                              setNewAddress({ name: '', street: '', city: '', state: '', zipCode: '', phone: '' });
                            }}
                            className="flex-1 h-11"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Order Summary - Sticky */}
            <div className="lg:col-span-1">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sticky top-24 border border-indigo-100">
                <h2 className="text-gray-900 mb-6">Order Summary</h2>

                {/* Product */}
                <div className="flex gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                    
                    {/* Variant Information */}
                    {selectedVariant && (
                      <Badge 
                        variant="outline" 
                        className={`text-xs mb-2 ${
                          product.variantType === 'size' ? 'border-indigo-300 bg-indigo-50 text-indigo-700' :
                          product.variantType === 'weight' ? 'border-green-300 bg-green-50 text-green-700' :
                          product.variantType === 'quantity' ? 'border-purple-300 bg-purple-50 text-purple-700' :
                          'border-gray-300 bg-gray-50 text-gray-700'
                        }`}
                      >
                        <span className="flex items-center gap-1">
                          {getVariantIcon()}
                          {getVariantDisplayText()}
                        </span>
                      </Badge>
                    )}
                    
                    <p className={`text-${COLORS.primary}`}>{formatCurrency(currentPrice)}</p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <Label className="mb-2 block">Quantity</Label>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-10 w-10"
                    >
                      -
                    </Button>
                    <span className="text-gray-900 w-12 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setQuantity(Math.min(currentStock, quantity + 1))}
                      className="h-10 w-10"
                    >
                      +
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {currentStock} items available
                  </p>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Delivery</span>
                    <span>FREE</span>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="flex justify-between text-gray-900 text-lg">
                    <span>Total Amount</span>
                    <span>{formatCurrency(total)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button
                  onClick={handleCheckout}
                  disabled={isProcessing}
                  className={`w-full ${GRADIENTS.primary} ${GRADIENTS.primaryHover} shadow-lg h-12`}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-5 h-5 mr-2" />
                      Place Order
                    </>
                  )}
                </Button>

                {/* Security Badge */}
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Lock className="w-4 h-4" />
                  <span>Secure checkout</span>
                </div>

                {/* Payment Note */}
                <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-100">
                  <p className="text-xs text-gray-600 text-center">
                    💳 Payment options available at delivery
                  </p>
                </div>
              </div>
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
