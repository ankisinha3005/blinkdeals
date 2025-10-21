import { APP_NAME, GRADIENTS } from '../constants';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Printer } from 'lucide-react';
import { Button } from './ui/button';

export function ShareableWireframe() {
  const websiteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://blinkdeals.com';

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Create a downloadable version
    const element = document.getElementById('wireframe-content');
    if (element) {
      // In a real implementation, you'd use a library like html2canvas
      alert('Download functionality would be implemented here');
    }
  };

  return (
    <div className="min-h-screen bg-white p-8" id="wireframe-content">
      <div className="max-w-4xl mx-auto">
        {/* Action Buttons - Hide on print */}
        <div className="print:hidden mb-8 flex gap-4 justify-end">
          <Button onClick={handlePrint} variant="outline" className="gap-2">
            <Printer className="w-4 h-4" />
            Print
          </Button>
          <Button onClick={handleDownload} className={`gap-2 ${GRADIENTS.primary}`}>
            <Download className="w-4 h-4" />
            Download
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12 pb-8 border-b-2 border-indigo-200">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full flex items-center justify-center">
              <span className="text-3xl">⚡</span>
            </div>
            <div className="text-left">
              <h1 className="text-4xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {APP_NAME}
              </h1>
              <p className="text-sm text-gray-600">Website Wireframe & Structure</p>
            </div>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Complete flash sale e-commerce platform documentation
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          <div className="text-center p-4 bg-indigo-50 rounded-lg">
            <div className="text-3xl mb-2">4</div>
            <div className="text-sm text-gray-600">Pages</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-3xl mb-2">10</div>
            <div className="text-sm text-gray-600">Products</div>
          </div>
          <div className="text-center p-4 bg-pink-50 rounded-lg">
            <div className="text-3xl mb-2">8+</div>
            <div className="text-sm text-gray-600">Components</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-3xl mb-2">100%</div>
            <div className="text-sm text-gray-600">Responsive</div>
          </div>
        </div>

        {/* Page Flow Diagram */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6 text-gray-900">User Flow</h2>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-xl border-2 border-indigo-200">
            <div className="flex flex-col items-center gap-4">
              {/* Homepage */}
              <div className="w-full max-w-md">
                <div className="bg-white p-4 rounded-lg shadow-md border-2 border-indigo-300">
                  <div className="text-center">
                    <div className="inline-block px-4 py-2 bg-indigo-100 rounded-full text-sm mb-2">
                      Entry Point
                    </div>
                    <h3 className="text-lg text-gray-900">Homepage</h3>
                    <p className="text-sm text-gray-600">Sale Timer + Product Carousel</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-4xl text-indigo-300">↓</div>

              {/* Split paths */}
              <div className="grid grid-cols-2 gap-8 w-full max-w-2xl">
                {/* Product Details Path */}
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-md border-2 border-purple-300 w-full">
                    <h3 className="text-center text-gray-900">Product Details</h3>
                    <p className="text-sm text-gray-600 text-center">View + Share</p>
                  </div>
                  <div className="text-2xl text-purple-300">↓</div>
                </div>

                {/* Login Path */}
                <div className="flex flex-col items-center gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-md border-2 border-pink-300 w-full">
                    <h3 className="text-center text-gray-900">Login</h3>
                    <p className="text-sm text-gray-600 text-center">Phone + OTP</p>
                  </div>
                  <div className="text-2xl text-pink-300">↓</div>
                </div>
              </div>

              {/* Arrow */}
              <div className="text-4xl text-green-300">↓</div>

              {/* Checkout */}
              <div className="w-full max-w-md">
                <div className="bg-white p-4 rounded-lg shadow-md border-2 border-green-300">
                  <div className="text-center">
                    <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-sm mb-2">
                      Conversion
                    </div>
                    <h3 className="text-lg text-gray-900">Checkout</h3>
                    <p className="text-sm text-gray-600">Address + Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6 text-gray-900">Key Features</h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="border-2 border-indigo-200 rounded-lg p-6 bg-indigo-50">
              <h3 className="text-gray-900 mb-2">⏱️ Real-time Countdown</h3>
              <p className="text-sm text-gray-600">Dynamic sale timers with status indicators</p>
            </div>
            <div className="border-2 border-purple-200 rounded-lg p-6 bg-purple-50">
              <h3 className="text-gray-900 mb-2">🎠 Product Carousel</h3>
              <p className="text-sm text-gray-600">3-card interactive display with navigation</p>
            </div>
            <div className="border-2 border-pink-200 rounded-lg p-6 bg-pink-50">
              <h3 className="text-gray-900 mb-2">🔐 Secure Login</h3>
              <p className="text-sm text-gray-600">Phone authentication with OTP verification</p>
            </div>
            <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
              <h3 className="text-gray-900 mb-2">🔗 Social Sharing</h3>
              <p className="text-sm text-gray-600">Multi-platform sharing with QR codes</p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6 text-gray-900">Technology Stack</h2>
          <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-gray-900 mb-2">Frontend</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• React + TypeScript</li>
                  <li>• Tailwind CSS</li>
                  <li>• Motion (Animations)</li>
                  <li>• ShadCN UI</li>
                </ul>
              </div>
              <div>
                <h4 className="text-gray-900 mb-2">Features</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Responsive Design</li>
                  <li>• Image Galleries</li>
                  <li>• Form Validation</li>
                  <li>• State Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="text-center py-8 border-t-2 border-gray-200">
          <p className="text-sm text-gray-600 mb-4">Scan to visit website</p>
          <div className="inline-block p-4 bg-white rounded-lg shadow-md">
            <div className="w-32 h-32 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-lg flex items-center justify-center">
              <div className="w-28 h-28 bg-white rounded grid grid-cols-4 gap-1 p-2">
                {[...Array(16)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`rounded-sm ${
                      [0, 1, 2, 4, 7, 8, 11, 13, 14, 15].includes(i) 
                        ? 'bg-gray-900' 
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">{websiteUrl}</p>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 py-8 border-t border-gray-200">
          <p>© 2025 {APP_NAME}. All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
}
