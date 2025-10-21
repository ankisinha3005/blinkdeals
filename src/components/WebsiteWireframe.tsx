import { APP_NAME } from '../constants';
import { 
  Home, 
  ShoppingBag, 
  CreditCard, 
  LogIn, 
  Layout,
  Smartphone,
  Monitor,
  Zap,
  User,
  Share2,
  Clock,
  Package
} from 'lucide-react';

export function WebsiteWireframe() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Zap className="w-12 h-12 text-indigo-500 fill-indigo-500" />
            <h1 className="text-gray-900 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {APP_NAME} - Website Structure
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete flash sale e-commerce platform with real-time countdown timers, 
            carousel product display, and secure checkout flow
          </p>
        </div>

        {/* Wireframe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Page 1: Homepage */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-indigo-200 hover:border-indigo-400 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">Homepage</h3>
                <p className="text-sm text-gray-500">Main landing page</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="border-2 border-dashed border-gray-200 rounded p-3">
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                  <Layout className="w-4 h-4" />
                  <span>Header Component</span>
                </div>
                <div className="text-xs text-gray-500 pl-6">
                  • Logo & Branding<br/>
                  • Navigation Menu<br/>
                  • Share Button<br/>
                  • Login/User Profile
                </div>
              </div>

              <div className="border-2 border-dashed border-indigo-200 rounded p-3 bg-indigo-50">
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Sale Timer</span>
                </div>
                <div className="text-xs text-gray-500 pl-6">
                  • Countdown timer<br/>
                  • Sale status indicator<br/>
                  • Time remaining display
                </div>
              </div>

              <div className="border-2 border-dashed border-purple-200 rounded p-3 bg-purple-50">
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                  <Package className="w-4 h-4" />
                  <span>Product Carousel</span>
                </div>
                <div className="text-xs text-gray-500 pl-6">
                  • 3-card carousel view<br/>
                  • Center card focus<br/>
                  • Left/Right navigation<br/>
                  • 10 products total
                </div>
              </div>

              <div className="border-2 border-dashed border-gray-200 rounded p-3">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Layout className="w-4 h-4" />
                  <span>Footer Component</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Monitor className="w-4 h-4" />
                <span>Desktop & Mobile Responsive</span>
              </div>
            </div>
          </div>

          {/* Page 2: Product Details */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-300 to-pink-300 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">Product Details</h3>
                <p className="text-sm text-gray-500">Detailed product view</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="border-2 border-dashed border-gray-200 rounded p-3">
                <div className="text-sm text-gray-700 mb-2">Header</div>
              </div>

              <div className="border-2 border-dashed border-purple-200 rounded p-3 bg-purple-50">
                <div className="text-sm text-gray-700 mb-2">Product Gallery</div>
                <div className="text-xs text-gray-500 pl-4">
                  • Main image display<br/>
                  • Thumbnail navigation<br/>
                  • Multiple product views
                </div>
              </div>

              <div className="border-2 border-dashed border-indigo-200 rounded p-3 bg-indigo-50">
                <div className="text-sm text-gray-700 mb-2">Product Info</div>
                <div className="text-xs text-gray-500 pl-4">
                  • Name & Description<br/>
                  • Price & Discount<br/>
                  • Stock availability<br/>
                  • Ratings & Reviews
                </div>
              </div>

              <div className="border-2 border-dashed border-green-200 rounded p-3 bg-green-50">
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                  <Share2 className="w-4 h-4" />
                  <span>Action Buttons</span>
                </div>
                <div className="text-xs text-gray-500 pl-6">
                  • Buy Now button<br/>
                  • Share dialog
                </div>
              </div>

              <div className="border-2 border-dashed border-gray-200 rounded p-3">
                <div className="text-sm text-gray-700 mb-2">Seller Info</div>
                <div className="text-xs text-gray-500 pl-4">
                  • Seller name & rating<br/>
                  • Total sales count<br/>
                  • Seller description
                </div>
              </div>

              <div className="border-2 border-dashed border-gray-200 rounded p-3">
                <div className="text-sm text-gray-700">Footer</div>
              </div>
            </div>
          </div>

          {/* Page 3: Checkout */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-300 to-emerald-300 rounded-lg flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">Checkout Page</h3>
                <p className="text-sm text-gray-500">Payment & shipping</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="border-2 border-dashed border-gray-200 rounded p-3">
                <div className="text-sm text-gray-700">Header</div>
              </div>

              <div className="border-2 border-dashed border-green-200 rounded p-3 bg-green-50">
                <div className="text-sm text-gray-700 mb-2">Shipping Address</div>
                <div className="text-xs text-gray-500 pl-4">
                  • Saved addresses list<br/>
                  • Address selection<br/>
                  • Add new address form<br/>
                  • Default address marker
                </div>
              </div>

              <div className="border-2 border-dashed border-indigo-200 rounded p-3 bg-indigo-50">
                <div className="text-sm text-gray-700 mb-2">Order Summary</div>
                <div className="text-xs text-gray-500 pl-4">
                  • Product thumbnail<br/>
                  • Quantity selector<br/>
                  • Price breakdown<br/>
                  • Subtotal & Total<br/>
                  • Free shipping badge
                </div>
              </div>

              <div className="border-2 border-dashed border-purple-200 rounded p-3 bg-purple-50">
                <div className="text-sm text-gray-700 mb-2">Payment Button</div>
                <div className="text-xs text-gray-500 pl-4">
                  • Complete purchase CTA<br/>
                  • Security badge<br/>
                  • Loading states
                </div>
              </div>

              <div className="border-2 border-dashed border-gray-200 rounded p-3">
                <div className="text-sm text-gray-700">Footer</div>
              </div>
            </div>
          </div>

          {/* Page 4: Login */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-pink-200 hover:border-pink-400 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-300 to-rose-300 rounded-lg flex items-center justify-center">
                <LogIn className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">Login Page</h3>
                <p className="text-sm text-gray-500">Authentication flow</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="border-2 border-dashed border-pink-200 rounded p-3 bg-pink-50">
                <div className="text-sm text-gray-700 mb-2">Branding</div>
                <div className="text-xs text-gray-500 pl-4">
                  • {APP_NAME} logo<br/>
                  • Welcome message<br/>
                  • Animated background
                </div>
              </div>

              <div className="border-2 border-dashed border-indigo-200 rounded p-3 bg-indigo-50">
                <div className="text-sm text-gray-700 mb-2">Phone Auth</div>
                <div className="text-xs text-gray-500 pl-4">
                  • Phone number input<br/>
                  • +91 country code<br/>
                  • 10-digit validation<br/>
                  • Send OTP button
                </div>
              </div>

              <div className="border-2 border-dashed border-purple-200 rounded p-3 bg-purple-50">
                <div className="text-sm text-gray-700 mb-2">OTP Verification</div>
                <div className="text-xs text-gray-500 pl-4">
                  • 6-digit OTP input<br/>
                  • Auto-focus fields<br/>
                  • Resend OTP option<br/>
                  • Verify button
                </div>
              </div>

              <div className="border-2 border-dashed border-green-200 rounded p-3 bg-green-50">
                <div className="text-sm text-gray-700 mb-2">Security Badge</div>
                <div className="text-xs text-gray-500 pl-4">
                  • Encrypted data notice<br/>
                  • Terms & Privacy links
                </div>
              </div>
            </div>
          </div>

          {/* Shared Components */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-amber-200 hover:border-amber-400 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-300 to-orange-300 rounded-lg flex items-center justify-center">
                <Layout className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">Shared Components</h3>
                <p className="text-sm text-gray-500">Reusable elements</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="border-2 border-dashed border-amber-200 rounded p-3 bg-amber-50">
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                  <Share2 className="w-4 h-4" />
                  <span>Share Dialog</span>
                </div>
                <div className="text-xs text-gray-500 pl-6">
                  • Social media sharing<br/>
                  • Copy link functionality<br/>
                  • QR code display<br/>
                  • Facebook, Twitter, WhatsApp, Email
                </div>
              </div>

              <div className="border-2 border-dashed border-indigo-200 rounded p-3 bg-indigo-50">
                <div className="text-sm text-gray-700 mb-2">Header</div>
                <div className="text-xs text-gray-500 pl-4">
                  • Logo with gradient<br/>
                  • Become a Seller<br/>
                  • Support<br/>
                  • Share button<br/>
                  • Login button
                </div>
              </div>

              <div className="border-2 border-dashed border-purple-200 rounded p-3 bg-purple-50">
                <div className="text-sm text-gray-700 mb-2">Footer</div>
                <div className="text-xs text-gray-500 pl-4">
                  • About section<br/>
                  • Quick links<br/>
                  • Customer support<br/>
                  • Newsletter signup<br/>
                  • Social media links
                </div>
              </div>

              <div className="border-2 border-dashed border-green-200 rounded p-3 bg-green-50">
                <div className="text-sm text-gray-700 mb-2">Pre-Sale Animation</div>
                <div className="text-xs text-gray-500 pl-4">
                  • Animated background<br/>
                  • Floating icons<br/>
                  • Feature pills<br/>
                  • Loading state
                </div>
              </div>
            </div>
          </div>

          {/* Design System */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-lg flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-gray-900">Design System</h3>
                <p className="text-sm text-gray-500">Brand & styling</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="border-2 border-dashed border-blue-200 rounded p-3 bg-blue-50">
                <div className="text-sm text-gray-700 mb-2">Brand Identity</div>
                <div className="text-xs text-gray-500 pl-4">
                  • Name: {APP_NAME}<br/>
                  • Currency: ₹ (Rupees)<br/>
                  • Logo: Lightning bolt icon
                </div>
              </div>

              <div className="border-2 border-dashed border-indigo-200 rounded p-3 bg-indigo-50">
                <div className="text-sm text-gray-700 mb-2">Color Palette</div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-indigo-300"></div>
                    <span className="text-xs">Primary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-purple-300"></div>
                    <span className="text-xs">Secondary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-emerald-600"></div>
                    <span className="text-xs">Accent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-gradient-to-r from-indigo-300 to-purple-300"></div>
                    <span className="text-xs">Gradient</span>
                  </div>
                </div>
              </div>

              <div className="border-2 border-dashed border-purple-200 rounded p-3 bg-purple-50">
                <div className="text-sm text-gray-700 mb-2">Typography</div>
                <div className="text-xs text-gray-500 pl-4">
                  • Default system fonts<br/>
                  • Responsive sizing<br/>
                  • Bold branding text
                </div>
              </div>

              <div className="border-2 border-dashed border-green-200 rounded p-3 bg-green-50">
                <div className="text-sm text-gray-700 mb-2">Components</div>
                <div className="text-xs text-gray-500 pl-4">
                  • ShadCN UI library<br/>
                  • Custom buttons<br/>
                  • Form inputs<br/>
                  • Dialogs & modals
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Technical Stack */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200">
          <h3 className="text-gray-900 mb-4">Technical Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
              <div className="text-2xl mb-2">⚛️</div>
              <div className="text-sm text-gray-900">React</div>
              <div className="text-xs text-gray-500">UI Framework</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg">
              <div className="text-2xl mb-2">🎨</div>
              <div className="text-sm text-gray-900">Tailwind CSS</div>
              <div className="text-xs text-gray-500">Styling</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
              <div className="text-2xl mb-2">📘</div>
              <div className="text-sm text-gray-900">TypeScript</div>
              <div className="text-xs text-gray-500">Type Safety</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
              <div className="text-2xl mb-2">✨</div>
              <div className="text-sm text-gray-900">Motion</div>
              <div className="text-xs text-gray-500">Animations</div>
            </div>
          </div>
        </div>

        {/* Features Summary */}
        <div className="mt-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-lg p-8 text-white">
          <h3 className="text-white mb-6 text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6" />
              </div>
              <h4 className="text-white mb-2">Real-time Countdown</h4>
              <p className="text-sm text-indigo-100">Dynamic sale timers with multiple states</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Package className="w-6 h-6" />
              </div>
              <h4 className="text-white mb-2">Carousel Display</h4>
              <p className="text-sm text-indigo-100">Interactive 3-card product carousel</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <Share2 className="w-6 h-6" />
              </div>
              <h4 className="text-white mb-2">Social Sharing</h4>
              <p className="text-sm text-indigo-100">Share products across multiple platforms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
