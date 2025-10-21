import { useState } from 'react';
import { ChevronLeft, ChevronRight, Zap, TrendingUp, Users, ShoppingBag, Award, Target, BarChart3, Clock, IndianRupee, Rocket, X } from 'lucide-react';
import { APP_NAME, CURRENCY_SYMBOL, BRAND_COLORS } from '../constants';
import { Button } from './ui/button';
import { PresentationExport } from './PresentationExport';
import { SlideDownloader } from './SlideDownloader';
import { PowerPointGenerator } from './PowerPointGenerator';

interface SellerPresentationProps {
  onClose?: () => void;
}

export function SellerPresentation({ onClose }: SellerPresentationProps = {}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { component: TitleSlide },
    { component: OpportunitySlide },
    { component: WhyBlinkDealsSlide },
    { component: ReachMillionsSlide },
    { component: FastSalesSlide },
    { component: SuccessMetricsSlide },
    { component: HowItWorksSlide },
    { component: PartnerBenefitsSlide },
    { component: ContactSlide },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8">
      {/* Exit Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 backdrop-blur-sm border border-white/20 transition-all"
        >
          <X className="w-6 h-6" />
        </button>
      )}

      {/* Presentation Container */}
      <div className="relative w-full max-w-6xl">
        {/* Slide */}
        <div 
          data-slide-container
          className="bg-white rounded-2xl shadow-2xl aspect-[16/9] overflow-hidden"
        >
          <CurrentSlideComponent />
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-3">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              className="bg-white/10 text-white border-white/20 hover:bg-white/20"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <PowerPointGenerator />
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-indigo-400'
                    : 'w-2 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            variant="outline"
            className="bg-white/10 text-white border-white/20 hover:bg-white/20"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Slide Counter and Download */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-white/60 text-sm">
            Slide {currentSlide + 1} of {slides.length}
          </div>
          <SlideDownloader slideNumber={currentSlide} totalSlides={slides.length} />
        </div>
      </div>
    </div>
  );
}

// Slide 1: Title Slide
function TitleSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center p-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <Zap className="w-20 h-20 text-indigo-600" fill="currentColor" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-7xl text-white mb-6 drop-shadow-lg">
          {APP_NAME}
        </h1>
        
        <div className="h-1 w-32 bg-white/50 mx-auto mb-8 rounded-full" />
        
        <p className="text-3xl text-white/90 mb-12">
          Seller Partnership Presentation
        </p>

        <div className="flex items-center justify-center gap-6 text-white/80 text-lg">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            <span>Boost Sales</span>
          </div>
          <div className="w-1 h-6 bg-white/30" />
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span>Reach Millions</span>
          </div>
          <div className="w-1 h-6 bg-white/30" />
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            <span>Grow Together</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-white/60 text-sm">
        Your Gateway to Flash Sale Success
      </div>
    </div>
  );
}

// Slide 2: Opportunity Slide
function OpportunitySlide() {
  return (
    <div className="h-full bg-gradient-to-br from-purple-50 to-pink-50 p-16">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm mb-4">
            The Opportunity
          </div>
          <h2 className="text-5xl text-gray-900 mb-4">
            The Flash Sale Revolution
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* Content Area - Editable */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-dashed border-indigo-200">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-gray-900 mb-4">Market Growth</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              [Add your statistics about flash sale market growth and e-commerce trends in India]
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-dashed border-purple-200">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-gray-900 mb-4">Customer Demand</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              [Add data about customer behavior and demand for flash sales in electronics]
            </p>
          </div>
        </div>

        {/* Footer Logo */}
        <div className="flex items-center justify-end gap-2 text-gray-400 mt-8">
          <Zap className="w-5 h-5 text-indigo-500" fill="currentColor" />
          <span className="text-sm">{APP_NAME}</span>
        </div>
      </div>
    </div>
  );
}

// Slide 3: Why BlinkDeals
function WhyBlinkDealsSlide() {
  return (
    <div className="h-full bg-white p-16">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full text-sm mb-4">
            Why Partner With Us
          </div>
          <h2 className="text-5xl text-gray-900 mb-4">
            Why Choose {APP_NAME}?
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </div>

        {/* Content Area - Editable */}
        <div className="flex-1 grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border-2 border-dashed border-indigo-300">
            <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-gray-900 mb-3">Fast Growth</h3>
            <p className="text-gray-700 text-sm">
              [Add your platform growth statistics and seller success stories]
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-dashed border-purple-300">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-gray-900 mb-3">Targeted Audience</h3>
            <p className="text-gray-700 text-sm">
              [Add data about your user demographics and buying behavior]
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border-2 border-dashed border-pink-300">
            <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-gray-900 mb-3">Premium Platform</h3>
            <p className="text-gray-700 text-sm">
              [Highlight your platform's unique features and advantages]
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 text-gray-400 mt-8">
          <Zap className="w-5 h-5 text-indigo-500" fill="currentColor" />
          <span className="text-sm">{APP_NAME}</span>
        </div>
      </div>
    </div>
  );
}

// Slide 4: Reach Millions
function ReachMillionsSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-600 to-purple-700 p-16">
      <div className="h-full flex flex-col items-center justify-center text-white">
        {/* Main Content */}
        <div className="text-center mb-12">
          <Users className="w-24 h-24 mx-auto mb-8 opacity-90" />
          <h2 className="text-6xl mb-6">
            Reach Millions of<br />Eager Buyers
          </h2>
          <div className="h-1 w-32 bg-white/50 rounded-full mx-auto mb-8" />
        </div>

        {/* Stats Grid - Editable */}
        <div className="grid grid-cols-3 gap-8 w-full max-w-4xl">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="text-5xl mb-3">[XXX]</div>
            <div className="text-xl opacity-90">Active Users</div>
            <p className="text-sm opacity-70 mt-2">[Add your user base stats]</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="text-5xl mb-3">[XX%]</div>
            <div className="text-xl opacity-90">Conversion Rate</div>
            <p className="text-sm opacity-70 mt-2">[Add conversion metrics]</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20">
            <div className="text-5xl mb-3">[XXX]</div>
            <div className="text-xl opacity-90">Daily Visitors</div>
            <p className="text-sm opacity-70 mt-2">[Add traffic statistics]</p>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 text-white/60 text-sm">
          Numbers that speak for themselves
        </div>
      </div>
    </div>
  );
}

// Slide 5: Fast Sales
function FastSalesSlide() {
  return (
    <div className="h-full bg-white p-16">
      <div className="h-full flex items-center gap-12">
        {/* Left Side */}
        <div className="flex-1">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 rounded-full text-sm mb-6">
            Lightning Fast Sales
          </div>
          <h2 className="text-5xl text-gray-900 mb-6">
            Sell Out in Minutes,<br />Not Days
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mb-8" />
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl border-2 border-dashed border-emerald-200">
              <Clock className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl text-gray-900 mb-2">Time-Limited Deals</h3>
                <p className="text-gray-600">
                  [Explain your flash sale timing strategy and urgency creation]
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-dashed border-indigo-200">
              <Zap className="w-8 h-8 text-indigo-600 flex-shrink-0 mt-1" fill="currentColor" />
              <div>
                <h3 className="text-xl text-gray-900 mb-2">Instant Visibility</h3>
                <p className="text-gray-600">
                  [Describe how products get featured and promoted on the platform]
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Visual */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-center text-white">
                <Clock className="w-24 h-24 mx-auto mb-4" />
                <div className="text-6xl mb-2">2:00</div>
                <div className="text-xl opacity-90">Average Sale Time</div>
              </div>
            </div>
            {/* Decorative rings */}
            <div className="absolute inset-0 border-4 border-indigo-300 rounded-full animate-ping opacity-20" />
            <div className="absolute -inset-4 border-4 border-purple-300 rounded-full animate-pulse opacity-10" />
          </div>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="absolute bottom-8 right-8 flex items-center gap-2 text-gray-400">
        <Zap className="w-5 h-5 text-indigo-500" fill="currentColor" />
        <span className="text-sm">{APP_NAME}</span>
      </div>
    </div>
  );
}

// Slide 6: Success Metrics
function SuccessMetricsSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-gray-50 to-indigo-50 p-16">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm mb-4">
            Success Stories
          </div>
          <h2 className="text-5xl text-gray-900 mb-4">
            Proven Results
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </div>

        {/* Content - Editable */}
        <div className="flex-1 grid grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-dashed border-gray-200">
            <BarChart3 className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-3xl text-gray-900 mb-4">Revenue Growth</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span className="text-gray-600">Average seller growth:</span>
                <span className="text-2xl text-indigo-600">[XX%]</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-3/4" />
              </div>
              <p className="text-gray-500 text-sm mt-4">
                [Add specific seller success metrics and case studies]
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-dashed border-gray-200">
            <IndianRupee className="w-12 h-12 text-emerald-600 mb-6" />
            <h3 className="text-3xl text-gray-900 mb-4">Transaction Volume</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-lg">
                <span className="text-gray-600">Monthly GMV:</span>
                <span className="text-2xl text-emerald-600">{CURRENCY_SYMBOL}[XXX]Cr</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-green-500 w-4/5" />
              </div>
              <p className="text-gray-500 text-sm mt-4">
                [Add GMV statistics and transaction data]
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 text-gray-400 mt-8">
          <Zap className="w-5 h-5 text-indigo-500" fill="currentColor" />
          <span className="text-sm">{APP_NAME}</span>
        </div>
      </div>
    </div>
  );
}

// Slide 7: How It Works
function HowItWorksSlide() {
  return (
    <div className="h-full bg-white p-16">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm mb-4">
            Simple Process
          </div>
          <h2 className="text-5xl text-gray-900 mb-4">
            How It Works
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto" />
        </div>

        {/* Steps - Editable */}
        <div className="flex-1 flex items-center justify-between gap-4">
          {/* Step 1 */}
          <div className="flex-1 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl shadow-lg">
              1
            </div>
            <h3 className="text-2xl text-gray-900 mb-4">Register</h3>
            <div className="bg-indigo-50 rounded-xl p-6 border-2 border-dashed border-indigo-200 min-h-32">
              <p className="text-gray-600">
                [Describe the registration and onboarding process]
              </p>
            </div>
          </div>

          <div className="text-3xl text-gray-300">→</div>

          {/* Step 2 */}
          <div className="flex-1 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl shadow-lg">
              2
            </div>
            <h3 className="text-2xl text-gray-900 mb-4">List Products</h3>
            <div className="bg-purple-50 rounded-xl p-6 border-2 border-dashed border-purple-200 min-h-32">
              <p className="text-gray-600">
                [Explain product listing process and requirements]
              </p>
            </div>
          </div>

          <div className="text-3xl text-gray-300">→</div>

          {/* Step 3 */}
          <div className="flex-1 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl shadow-lg">
              3
            </div>
            <h3 className="text-2xl text-gray-900 mb-4">Start Selling</h3>
            <div className="bg-pink-50 rounded-xl p-6 border-2 border-dashed border-pink-200 min-h-32">
              <p className="text-gray-600">
                [Describe how sales work and payment process]
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 text-gray-400 mt-8">
          <Zap className="w-5 h-5 text-indigo-500" fill="currentColor" />
          <span className="text-sm">{APP_NAME}</span>
        </div>
      </div>
    </div>
  );
}

// Slide 8: Partner Benefits
function PartnerBenefitsSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-16">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm mb-4">
            Partnership Benefits
          </div>
          <h2 className="text-5xl text-gray-900 mb-4">
            What You Get
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
        </div>

        {/* Benefits Grid - Editable */}
        <div className="flex-1 grid grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border-2 border-dashed border-indigo-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-gray-900">Benefit #1</h3>
            </div>
            <p className="text-gray-600">
              [Add details about marketing support, promotional opportunities, or featured placements]
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-2 border-dashed border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-gray-900">Benefit #2</h3>
            </div>
            <p className="text-gray-600">
              [Add information about analytics dashboard, insights, or reporting tools]
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-2 border-dashed border-pink-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                <IndianRupee className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-gray-900">Benefit #3</h3>
            </div>
            <p className="text-gray-600">
              [Add details about commission structure, payment terms, or financial benefits]
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md border-2 border-dashed border-emerald-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-gray-900">Benefit #4</h3>
            </div>
            <p className="text-gray-600">
              [Add information about seller support, training programs, or dedicated account management]
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 text-gray-400 mt-8">
          <Zap className="w-5 h-5 text-indigo-500" fill="currentColor" />
          <span className="text-sm">{APP_NAME}</span>
        </div>
      </div>
    </div>
  );
}

// Slide 9: Contact / Thank You Slide
function ContactSlide() {
  return (
    <div className="h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center p-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <Zap className="w-16 h-16 text-indigo-600" fill="currentColor" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-6xl text-white mb-6">
          Let's Grow Together
        </h1>
        
        <div className="h-1 w-32 bg-white/50 mx-auto mb-12 rounded-full" />
        
        <p className="text-2xl text-white/90 mb-12 max-w-2xl">
          Join {APP_NAME} and start reaching millions of customers today
        </p>

        {/* Contact Info - Editable */}
        <div className="space-y-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 inline-block border border-white/20">
            <p className="text-white/80 text-sm mb-1">Email</p>
            <p className="text-white text-xl">sellers@blinkdeals.com</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 inline-block border border-white/20">
            <p className="text-white/80 text-sm mb-1">Phone</p>
            <p className="text-white text-xl">+91 [Your Contact Number]</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 inline-block border border-white/20">
            <p className="text-white/80 text-sm mb-1">Website</p>
            <p className="text-white text-xl">www.blinkdeals.com</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-white text-indigo-600 px-12 py-4 rounded-full text-xl hover:bg-indigo-50 transition-all shadow-2xl hover:scale-105">
          Become a Seller Today
        </button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-white/60 text-sm">
        Thank you for your time
      </div>
    </div>
  );
}
