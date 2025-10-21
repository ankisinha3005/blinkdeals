import { Check, Zap, ArrowRight, Package, TrendingUp, Users, ShoppingBag, Target, BarChart3, Rocket, Mail, Star, Printer, Download } from 'lucide-react';
import { APP_NAME, CURRENCY_SYMBOL, BRAND_COLORS } from '../constants';

export function SellerPitchPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white print:bg-white">
      {/* Print Styles */}
      <style>{`
        @media print {
          body { margin: 0; padding: 0; }
          .no-print { display: none !important; }
          .page-break { page-break-after: always; }
          .page-break-before { page-break-before: always; }
          * { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        }
      `}</style>

      {/* Print/Download Button - Fixed */}
      <button
        onClick={handlePrint}
        title="Press Ctrl+P or Cmd+P to print. Select 'Save as PDF' and enable 'Background graphics' for best results."
        className="no-print fixed bottom-8 right-8 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full shadow-2xl px-6 py-4 flex items-center gap-3 font-semibold transition-all hover:scale-105 group animate-bounce hover:animate-none"
      >
        <Printer className="w-5 h-5 group-hover:animate-pulse" />
        Print / Save as PDF
        <Download className="w-4 h-4" />
      </button>

      {/* Print Instructions Banner */}
      <div className="no-print fixed top-20 left-1/2 transform -translate-x-1/2 z-40 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-3">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <p className="text-sm font-medium">
          💡 Click the button below or press <kbd className="px-2 py-1 bg-white/20 rounded">Ctrl+P</kbd> to save as PDF
        </p>
      </div>

      {/* Header with Logo - Sticky */}
      <header className="sticky top-0 z-50 bg-white border-b-2 border-indigo-100 print:relative print:border-b-4">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
              <Zap className="w-7 h-7 text-white" fill="white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {APP_NAME}
              </h1>
              <p className="text-sm text-gray-600">Seller Partnership Program</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">www.blinkdeals.in</p>
            <p className="text-sm text-indigo-600 font-medium">support@blinkdeals.in</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 print:py-8">
        
        {/* SLIDE 1: WELCOME */}
        <section className="mb-20 print:mb-12 page-break">
          <div className="text-center mb-12">
            {/* Large Logo */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-2xl mx-auto mb-6">
              <Zap className="w-14 h-14 text-white" fill="white" />
            </div>
            
            <div className="inline-block px-6 py-2 bg-indigo-50 rounded-full mb-6">
              <span className="text-indigo-600 font-medium">🖥️ Slide 1</span>
            </div>
            
            <h2 className="text-5xl font-bold text-gray-900 mb-4 print:text-4xl">
              Welcome to <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{APP_NAME}</span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8"></div>
            
            <h3 className="text-3xl font-semibold text-gray-800 mb-8 print:text-2xl">
              Your New Way to Reach Customers Fast!
            </h3>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-12 shadow-xl print:shadow-none print:border-2 print:border-indigo-200">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                A simple marketplace where you can sell your products at special discounted prices for a <strong>limited stock & time</strong>.
              </p>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      Perfect for <strong>new sellers</strong>, <strong>small brands</strong>, and <strong>businesses</strong> wanting to gain quick visibility and boost sales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo watermark */}
          <div className="flex items-center justify-center gap-2 mt-8 opacity-30">
            <Zap className="w-4 h-4 text-indigo-500" />
            <span className="text-sm text-gray-400">{APP_NAME}</span>
          </div>
        </section>

        {/* SLIDE 2: HOW IT WORKS */}
        <section className="mb-20 print:mb-12 page-break-before">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl mx-auto mb-6">
              <Zap className="w-12 h-12 text-white" fill="white" />
            </div>
            
            <div className="inline-block px-6 py-2 bg-purple-50 rounded-full mb-6">
              <span className="text-purple-600 font-medium">🧩 Slide 2</span>
            </div>
            
            <h2 className="text-5xl font-bold text-gray-900 mb-4 print:text-4xl">
              How It Works
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                number: '1',
                title: 'Stock Commitment',
                description: 'You tell us how many units you want to sell.',
                icon: Package,
                color: 'from-indigo-500 to-indigo-600'
              },
              {
                number: '2',
                title: 'Flash Sale Setup',
                description: 'Your product goes live during our next Flash Sale event.',
                icon: Zap,
                color: 'from-purple-500 to-purple-600'
              },
              {
                number: '3',
                title: 'Orders Roll In',
                description: 'Customers buy directly on our site.',
                icon: ShoppingBag,
                color: 'from-pink-500 to-pink-600'
              },
              {
                number: '4',
                title: 'We Share Details',
                description: 'You receive the list of confirmed buyers with contact info.',
                icon: Users,
                color: 'from-indigo-500 to-purple-500'
              },
              {
                number: '5',
                title: 'You Deliver',
                description: 'Ship using your own delivery channel.',
                icon: Rocket,
                color: 'from-purple-500 to-pink-500'
              },
              {
                number: '6',
                title: 'Payment & Follow-up',
                description: 'Customers pay through our platform; you handle fulfilment and can contact them later.',
                icon: BarChart3,
                color: 'from-pink-500 to-indigo-500'
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-indigo-200 transition-all print:shadow-none print:border-indigo-200">
                  <div className="flex items-start gap-6">
                    {/* Number Badge */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-7 h-7 text-gray-700" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Arrow */}
                    {index < 5 && (
                      <div className="absolute -bottom-3 left-8 print:hidden">
                        <ArrowRight className="w-6 h-6 text-indigo-300 rotate-90" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Logo watermark */}
          <div className="flex items-center justify-center gap-2 mt-8 opacity-30">
            <Zap className="w-4 h-4 text-purple-500" />
            <span className="text-sm text-gray-400">{APP_NAME}</span>
          </div>
        </section>

        {/* SLIDE 3: WHY SELLERS LOVE */}
        <section className="mb-20 print:mb-12 page-break-before">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-xl mx-auto mb-6">
              <Zap className="w-12 h-12 text-white" fill="white" />
            </div>
            
            <div className="inline-block px-6 py-2 bg-indigo-50 rounded-full mb-6">
              <span className="text-indigo-600 font-medium">💎 Slide 3</span>
            </div>
            
            <h2 className="text-5xl font-bold text-gray-900 mb-4 print:text-4xl">
              Why Sellers Love <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{APP_NAME}</span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '₹',
                title: 'Zero Commission',
                description: "We don't take a cut of your sales.",
                gradient: 'from-green-500 to-emerald-600'
              },
              {
                icon: '👥',
                title: 'Customer Acquisition',
                description: 'Reach real users who actually try your product.',
                gradient: 'from-indigo-500 to-indigo-600'
              },
              {
                icon: '👁️',
                title: 'Product Visibility',
                description: 'Your product appears in our curated sale lineup.',
                gradient: 'from-purple-500 to-purple-600'
              },
              {
                icon: '📢',
                title: 'Marketing Without Spend',
                description: 'Get exposure without ads or influencer costs.',
                gradient: 'from-pink-500 to-pink-600'
              },
              {
                icon: '🤝',
                title: 'Own the Customer Relationship',
                description: 'You get buyer details for future communication.',
                gradient: 'from-blue-500 to-blue-600'
              },
              {
                icon: '📦',
                title: 'Inventory Clearance',
                description: 'Quickly move slow-moving or excess stock.',
                gradient: 'from-orange-500 to-orange-600'
              },
              {
                icon: '🧪',
                title: 'Testing Ground',
                description: 'Try new product ideas or pricing before a full launch.',
                gradient: 'from-teal-500 to-teal-600'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-indigo-200 transition-all print:shadow-none print:border-indigo-200">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center flex-shrink-0 shadow-md`}>
                    <span className="text-2xl">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Logo watermark */}
          <div className="flex items-center justify-center gap-2 mt-8 opacity-30">
            <Zap className="w-4 h-4 text-indigo-500" />
            <span className="text-sm text-gray-400">{APP_NAME}</span>
          </div>
        </section>

        {/* SLIDE 4: WHAT'S IN IT FOR YOU */}
        <section className="mb-20 print:mb-12 page-break-before">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-xl mx-auto mb-6">
              <Zap className="w-12 h-12 text-white" fill="white" />
            </div>
            
            <div className="inline-block px-6 py-2 bg-pink-50 rounded-full mb-6">
              <span className="text-pink-600 font-medium">🚀 Slide 4</span>
            </div>
            
            <h2 className="text-5xl font-bold text-gray-900 mb-4 print:text-4xl">
              What's in It for You
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-1 shadow-2xl print:p-0 print:shadow-none">
            <div className="bg-white rounded-3xl p-12 print:p-8">
              <div className="space-y-6">
                {[
                  'Gain guaranteed customers, not just clicks.',
                  'Build trust and word-of-mouth through real product use.',
                  'Appear alongside trending brands in our Flash Sale Events.',
                  'Receive data & insights on what\'s selling best.',
                  'Grow repeat buyers with your own outreach after the sale.'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed flex-1 pt-1">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              {/* Feature boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {[
                  { icon: Users, label: 'Real Customers', color: 'from-indigo-500 to-indigo-600' },
                  { icon: TrendingUp, label: 'Data & Insights', color: 'from-purple-500 to-purple-600' },
                  { icon: Star, label: 'Premium Placement', color: 'from-pink-500 to-pink-600' }
                ].map((item, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Logo watermark */}
          <div className="flex items-center justify-center gap-2 mt-8 opacity-30">
            <Zap className="w-4 h-4 text-pink-500" />
            <span className="text-sm text-gray-400">{APP_NAME}</span>
          </div>
        </section>

        {/* SLIDE 5: PROCESS AT A GLANCE */}
        <section className="mb-20 print:mb-12 page-break-before">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-xl mx-auto mb-6">
              <Zap className="w-12 h-12 text-white" fill="white" />
            </div>
            
            <div className="inline-block px-6 py-2 bg-indigo-50 rounded-full mb-6">
              <span className="text-indigo-600 font-medium">🛠 Slide 5</span>
            </div>
            
            <h2 className="text-5xl font-bold text-gray-900 mb-4 print:text-4xl">
              The Process at a Glance
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100 print:shadow-none">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-500 to-purple-500">
                    <th className="px-6 py-4 text-left text-white font-semibold">Step</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">What Happens</th>
                    <th className="px-6 py-4 text-left text-white font-semibold">Who Handles It</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { step: '1', what: 'Seller commits limited stock', who: 'Seller', color: 'bg-indigo-50' },
                    { step: '2', what: 'Flash Sale goes live', who: APP_NAME, color: 'bg-white' },
                    { step: '3', what: 'Customers purchase', who: 'Platform', color: 'bg-purple-50' },
                    { step: '4', what: 'Order summary + contacts shared', who: 'Platform', color: 'bg-white' },
                    { step: '5', what: 'Delivery & follow-up', who: 'Seller', color: 'bg-pink-50' }
                  ].map((row, index) => (
                    <tr key={index} className={`${row.color} border-b border-gray-200 hover:bg-indigo-50 transition-colors`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-md">
                            <span className="text-white font-bold">{row.step}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700 font-medium">{row.what}</td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full font-medium shadow-md">
                          {row.who}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Logo watermark */}
          <div className="flex items-center justify-center gap-2 mt-8 opacity-30">
            <Zap className="w-4 h-4 text-indigo-500" />
            <span className="text-sm text-gray-400">{APP_NAME}</span>
          </div>
        </section>

        {/* SLIDE 6: WHY PARTNER NOW */}
        <section className="mb-20 print:mb-12 page-break-before">
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-xl mx-auto mb-6">
              <Zap className="w-12 h-12 text-white" fill="white" />
            </div>
            
            <div className="inline-block px-6 py-2 bg-purple-50 rounded-full mb-6">
              <span className="text-purple-600 font-medium">🤝 Slide 6</span>
            </div>
            
            <h2 className="text-5xl font-bold text-gray-900 mb-4 print:text-4xl">
              Why Partner Now
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: Star,
                title: 'Early partners get featured placement in the first sale events.',
                highlight: 'Featured Placement',
                gradient: 'from-yellow-500 to-orange-500'
              },
              {
                icon: '₹',
                title: 'No platform fees for first 50 sellers.',
                highlight: 'First 50 Sellers',
                gradient: 'from-green-500 to-emerald-500'
              },
              {
                icon: Users,
                title: 'Dedicated support to onboard your brand and help you sell fast.',
                highlight: 'Dedicated Support',
                gradient: 'from-indigo-500 to-purple-500'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-xl border-2 border-gray-100 hover:border-purple-200 transition-all print:shadow-none print:border-purple-200">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      {typeof item.icon === 'string' ? (
                        <span className="text-3xl">{item.icon}</span>
                      ) : (
                        <item.icon className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-4 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-3">
                        <span className="text-sm font-semibold text-purple-700">{item.highlight}</span>
                      </div>
                      <p className="text-lg text-gray-700 leading-relaxed">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Urgency banner */}
          <div className="mt-12 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-2xl p-8 shadow-2xl text-center print:shadow-none">
            <p className="text-2xl font-bold text-white mb-2">Limited Time Offer</p>
            <p className="text-white/90">Join now to secure your spot as a launch partner</p>
          </div>

          {/* Logo watermark */}
          <div className="flex items-center justify-center gap-2 mt-8 opacity-30">
            <Zap className="w-4 h-4 text-purple-500" />
            <span className="text-sm text-gray-400">{APP_NAME}</span>
          </div>
        </section>

        {/* SLIDE 7: CALL TO ACTION */}
        <section className="mb-20 print:mb-12">
          <div className="text-center mb-12">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl mx-auto mb-6 animate-pulse">
              <Zap className="w-16 h-16 text-white" fill="white" />
            </div>
            
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-medium">🎯 Slide 7</span>
            </div>
            
            <h2 className="text-6xl font-bold mb-4 print:text-5xl">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Join the Next Flash Sale Event!
              </span>
            </h2>
            
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-6"></div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-1 shadow-2xl print:p-0">
            <div className="bg-white rounded-3xl p-12 print:p-8">
              
              {/* Main CTA */}
              <div className="text-center mb-12">
                <div className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-6 shadow-lg">
                  <span className="text-lg font-bold text-gray-900">⚡ Limited Slots Available</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Limited slots for launch partners
                </h3>
                
                <p className="text-xl text-gray-600 mb-8">
                  Be among the first sellers to join our platform and get exclusive benefits
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 print:mb-6">
                  <a 
                    href="mailto:support@blinkdeals.in"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all print:shadow-none no-print"
                  >
                    <Mail className="w-5 h-5" />
                    Apply Now
                  </a>
                  
                  <div className="print:block hidden text-center">
                    <p className="text-lg font-semibold text-indigo-600">Email: support@blinkdeals.in</p>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-indigo-100">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Questions?</h4>
                  <p className="text-gray-600">We're here to help you get started</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Email Support</p>
                    <a href="mailto:support@blinkdeals.in" className="text-lg font-semibold text-indigo-600 hover:text-purple-600 transition-colors">
                      support@blinkdeals.in
                    </a>
                  </div>
                  
                  <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Website</p>
                    <a href="https://www.blinkdeals.in" className="text-lg font-semibold text-purple-600 hover:text-pink-600 transition-colors">
                      www.blinkdeals.in
                    </a>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-indigo-600">0%</p>
                    <p className="text-sm text-gray-600">Commission</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-600">Fast</p>
                    <p className="text-sm text-gray-600">Setup</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-pink-600">24/7</p>
                    <p className="text-sm text-gray-600">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Logo */}
          <div className="flex items-center justify-center gap-3 mt-12">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
              <Zap className="w-7 h-7 text-white" fill="white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {APP_NAME}
            </span>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-8 print:py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <Zap className="w-6 h-6 text-indigo-600" fill="currentColor" />
              </div>
              <div>
                <p className="font-bold text-lg">{APP_NAME}</p>
                <p className="text-sm text-white/80">Flash Sale Platform</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-white/90">© 2025 {APP_NAME}. All rights reserved.</p>
              <p className="text-sm text-white/80">support@blinkdeals.in | www.blinkdeals.in</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
