import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { formatCurrency, COLORS, GRADIENTS } from '../constants';

interface ProductCarouselProps {
  products: Product[];
  onBuyNow: (product: Product) => void;
  onShowDetails: (product: Product) => void;
}

export function ProductCarousel({ products, onBuyNow, onShowDetails }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle empty products array
  if (!products || products.length === 0) {
    return (
      <div className="flex items-center justify-center py-12 px-4">
        <div className="text-center">
          <div className="text-gray-500 text-lg mb-4">No products available</div>
          <div className="text-gray-400 text-sm">Please try again later</div>
        </div>
      </div>
    );
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const getPreviousIndex = () => {
    return currentIndex === 0 ? products.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === products.length - 1 ? 0 : currentIndex + 1;
  };

  const currentProduct = products[currentIndex];
  const previousProduct = products[getPreviousIndex()];
  const nextProduct = products[getNextIndex()];

  return (
    <div className="relative flex items-center justify-center gap-8 py-12 px-4">
      {/* Left Arrow */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handlePrevious}
        className={`absolute left-2 md:left-8 lg:left-16 z-30 ${GRADIENTS.primary} rounded-full p-4 shadow-2xl hover:shadow-indigo-500/50 transition-shadow`}
        aria-label="Previous product"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </motion.button>

      {/* Left Card (Transparent) */}
      <div className="hidden lg:block opacity-20 scale-75 transform transition-all duration-300 pointer-events-none">
        <ProductCard product={previousProduct} isCenter={false} />
      </div>

      {/* Center Card (In Focus) with Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ 
            duration: 0.4,
            ease: "easeInOut"
          }}
          className="z-10"
        >
          <ProductCard 
            product={currentProduct} 
            isCenter={true}
            onBuyNow={() => onBuyNow(currentProduct)}
            onShowDetails={() => onShowDetails(currentProduct)}
          />
        </motion.div>
      </AnimatePresence>

      {/* Right Card (Transparent) */}
      <div className="hidden lg:block opacity-20 scale-75 transform transition-all duration-300 pointer-events-none">
        <ProductCard product={nextProduct} isCenter={false} />
      </div>

      {/* Right Arrow */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleNext}
        className={`absolute right-2 md:right-8 lg:right-16 z-30 ${GRADIENTS.primary} rounded-full p-4 shadow-2xl hover:shadow-indigo-500/50 transition-shadow`}
        aria-label="Next product"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </motion.button>

      {/* Dots Indicator */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {products.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.2 }}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? `${GRADIENTS.primary} w-8 shadow-lg` 
                : 'bg-gray-300 w-2 hover:bg-gray-400'
            }`}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

interface ProductCardProps {
  product: Product;
  isCenter: boolean;
  onBuyNow?: () => void;
  onShowDetails?: () => void;
}

function ProductCard({ product, isCenter, onBuyNow, onShowDetails }: ProductCardProps) {
  // Defensive programming - handle undefined product properties
  if (!product) {
    return (
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden w-[340px] md:w-[420px]">
        <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden w-[340px] md:w-[420px] hover:shadow-indigo-500/20 transition-all">
      <div className="relative group">
        <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <ImageWithFallback
            src={product.image || '/placeholder-image.jpg'}
            alt={product.name || 'Product'}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 shadow-lg border-none">
          Save {product.discount || 0}%
        </Badge>
        {isCenter && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              className="flex gap-2"
            >
              <Button
                onClick={onShowDetails}
                size="sm"
                variant="outline"
                className="bg-white/95 backdrop-blur-sm border-white hover:bg-white"
              >
                <Eye className="w-4 h-4 mr-1" />
                View
              </Button>
            </motion.div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-3">
          <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200 border-none mb-2">
            {product.category || 'Uncategorized'}
          </Badge>
          <h3 className="text-gray-900 line-clamp-1">{product.name || 'Product'}</h3>
        </div>
        
        {isCenter && (
          <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">{product.description || 'No description available'}</p>
        )}
        
        <div className="flex items-center gap-3 mb-5">
          <div>
            <p className="text-xs text-gray-500 mb-0.5">Sale Price</p>
            <p className={`text-3xl text-${COLORS.primary}`}>{formatCurrency(product.price || 0)}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-gray-400 line-through text-sm">{formatCurrency(product.originalPrice || 0)}</span>
            <span className="text-green-600 text-xs">Save {formatCurrency((product.originalPrice || 0) - (product.price || 0))}</span>
          </div>
        </div>

        {isCenter && (
          <div className="flex gap-3">
            <Button 
              onClick={onBuyNow}
              className={`flex-1 ${GRADIENTS.primary} ${GRADIENTS.primaryHover} shadow-lg hover:shadow-indigo-500/50 transition-shadow h-11`}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Buy Now
            </Button>
            <Button 
              onClick={onShowDetails}
              variant="outline"
              className="flex-1 border-2 hover:border-indigo-300 h-11"
            >
              Details
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
