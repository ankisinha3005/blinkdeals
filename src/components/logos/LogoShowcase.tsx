import React from 'react';
import { 
  LogoFull, 
  LogoHorizontal, 
  LogoStacked, 
  LogoIcon, 
  LogoMinimal, 
  LogoAnimated, 
  LogoBadge, 
  LogoCircle 
} from './index';

export function LogoShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl mb-4">BlinkDeals Logo Pack</h1>
          <p className="text-gray-600 text-lg">
            A comprehensive collection of CSS-based logos for different use cases
          </p>
        </div>

        {/* Logo Full */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl mb-6 text-gray-900">Logo Full</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-4">Default - Medium</p>
                <LogoFull size="md" variant="default" />
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-4">Gradient - Large</p>
                <LogoFull size="lg" variant="gradient" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="p-6 bg-gray-900 rounded-lg">
                <p className="text-sm text-gray-400 mb-4">White - Medium</p>
                <LogoFull size="md" variant="white" />
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-4">Small Size</p>
                <LogoFull size="sm" variant="default" />
              </div>
            </div>
          </div>
        </section>

        {/* Logo Horizontal */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl mb-6 text-gray-900">Logo Horizontal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-4">With Tagline</p>
                <LogoHorizontal size="md" variant="default" showTagline />
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-4">Gradient</p>
                <LogoHorizontal size="md" variant="gradient" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="p-6 bg-gray-900 rounded-lg">
                <p className="text-sm text-gray-400 mb-4">White with Tagline</p>
                <LogoHorizontal size="md" variant="white" showTagline />
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-4">Small</p>
                <LogoHorizontal size="sm" variant="default" />
              </div>
            </div>
          </div>
        </section>

        {/* Logo Stacked */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl mb-6 text-gray-900">Logo Stacked</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg flex justify-center">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">With Tagline</p>
                <LogoStacked size="md" variant="default" showTagline />
              </div>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg flex justify-center">
              <div className="text-center">
                <p className="text-sm text-gray-400 mb-4">White</p>
                <LogoStacked size="md" variant="white" showTagline />
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg flex justify-center">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-4">Gradient</p>
                <LogoStacked size="md" variant="gradient" />
              </div>
            </div>
          </div>
        </section>

        {/* Logo Icons */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl mb-6 text-gray-900">Logo Icons</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg flex flex-col items-center">
              <p className="text-sm text-gray-600 mb-4">Default</p>
              <LogoIcon size="lg" variant="default" />
            </div>
            <div className="p-6 bg-gray-50 rounded-lg flex flex-col items-center">
              <p className="text-sm text-gray-600 mb-4">Gradient</p>
              <LogoIcon size="lg" variant="gradient" />
            </div>
            <div className="p-6 bg-gray-50 rounded-lg flex flex-col items-center">
              <p className="text-sm text-gray-600 mb-4">Outline</p>
              <LogoIcon size="lg" variant="outline" />
            </div>
            <div className="p-6 bg-gray-900 rounded-lg flex flex-col items-center">
              <p className="text-sm text-gray-400 mb-4">White</p>
              <LogoIcon size="lg" variant="white" />
            </div>
          </div>
        </section>

        {/* Logo Minimal */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl mb-6 text-gray-900">Logo Minimal (Text Only)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-4">Default</p>
                <LogoMinimal size="lg" variant="default" />
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-4">Gradient</p>
                <LogoMinimal size="lg" variant="gradient" />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="p-6 bg-gray-900 rounded-lg">
                <p className="text-sm text-gray-400 mb-4">White</p>
                <LogoMinimal size="lg" variant="white" />
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-4">Dark</p>
                <LogoMinimal size="lg" variant="dark" />
              </div>
            </div>
          </div>
        </section>

        {/* Logo Animated */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl mb-6 text-gray-900">Logo Animated</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-lg flex justify-center">
              <div>
                <p className="text-sm text-gray-600 mb-4 text-center">Gradient with Animation</p>
                <LogoAnimated size="lg" variant="gradient" />
              </div>
            </div>
            <div className="p-8 bg-gray-900 rounded-lg flex justify-center">
              <div>
                <p className="text-sm text-gray-400 mb-4 text-center">White with Animation</p>
                <LogoAnimated size="lg" variant="white" />
              </div>
            </div>
          </div>
        </section>

        {/* Logo Badges */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl mb-6 text-gray-900">Logo Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg flex flex-col gap-4">
              <p className="text-sm text-gray-600">Default</p>
              <LogoBadge size="md" variant="default" text="FLASH SALE" />
              <LogoBadge size="sm" variant="default" text="NEW" />
              <LogoBadge size="lg" variant="default" text="HOT DEAL" />
            </div>
            <div className="p-6 bg-gray-50 rounded-lg flex flex-col gap-4">
              <p className="text-sm text-gray-600">Outline</p>
              <LogoBadge size="md" variant="outline" text="FLASH SALE" />
              <LogoBadge size="sm" variant="outline" text="NEW" />
              <LogoBadge size="lg" variant="outline" text="HOT DEAL" />
            </div>
            <div className="p-6 bg-gray-50 rounded-lg flex flex-col gap-4">
              <p className="text-sm text-gray-600">Gradient</p>
              <LogoBadge size="md" variant="gradient" text="FLASH SALE" />
              <LogoBadge size="sm" variant="gradient" text="NEW" />
              <LogoBadge size="lg" variant="gradient" text="HOT DEAL" />
            </div>
          </div>
        </section>

        {/* Logo Circles */}
        <section className="mb-16 bg-white rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl mb-6 text-gray-900">Logo Circles</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg flex justify-center">
              <LogoCircle size="lg" variant="default" showText />
            </div>
            <div className="p-6 bg-gray-50 rounded-lg flex justify-center">
              <LogoCircle size="lg" variant="gradient" showText />
            </div>
            <div className="p-6 bg-gray-50 rounded-lg flex justify-center">
              <LogoCircle size="lg" variant="outline" showText />
            </div>
            <div className="p-6 bg-gray-900 rounded-lg flex justify-center">
              <LogoCircle size="lg" variant="white" showText />
            </div>
          </div>
        </section>

        {/* Usage Guide */}
        <section className="bg-indigo-50 rounded-xl p-8">
          <h2 className="text-2xl mb-4 text-gray-900">Usage Guide</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              Import any logo component from the logos folder:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { LogoHorizontal, LogoIcon } from './components/logos';

// Use in your component
<LogoHorizontal size="md" variant="gradient" showTagline />
<LogoIcon size="sm" variant="outline" />`}
            </pre>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg mb-2">Available Sizes</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">sm</code> - Small</li>
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">md</code> - Medium (default)</li>
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">lg</code> - Large</li>
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">xl</code> - Extra Large (some logos)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg mb-2">Available Variants</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">default</code> - Indigo color</li>
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">white</code> - White (for dark backgrounds)</li>
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">dark</code> - Dark gray</li>
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">gradient</code> - Indigo to purple gradient</li>
                  <li>• <code className="bg-gray-200 px-2 py-1 rounded">outline</code> - Outlined (some logos)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
