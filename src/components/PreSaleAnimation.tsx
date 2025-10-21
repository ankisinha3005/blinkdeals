import { motion } from 'motion/react';
import { Sparkles, Tag, Zap, TrendingUp, ShoppingBag, Clock, Percent } from 'lucide-react';
import { APP_NAME, GRADIENTS } from '../constants';

export function PreSaleAnimation() {
  return (
    <div className="relative w-full min-h-[600px] flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-300/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border-2 border-indigo-200 mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-5 h-5 text-indigo-500" />
          </motion.div>
          <span className="text-indigo-700">Coming Soon</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${GRADIENTS.primary} bg-clip-text text-transparent mb-6 text-5xl md:text-6xl lg:text-7xl`}
        >
          Flash Sale Starts Soon!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Get ready for incredible discounts on your favorite products. 
          Amazing deals are just moments away!
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {/* Card 1 - Discounts */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-red-100 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-red-50 to-pink-50 opacity-50"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Tag className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl text-red-600 mb-2">Up to 70%</div>
              <div className="text-gray-600">Massive Discounts</div>
            </div>
          </motion.div>

          {/* Card 2 - Limited Time */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-purple-100 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 opacity-50"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <div className="relative">
              <div className={`w-16 h-16 ${GRADIENTS.primary} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl text-purple-600 mb-2">Limited</div>
              <div className="text-gray-600">Time Only</div>
            </div>
          </motion.div>

          {/* Card 3 - Exclusive */}
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-orange-100 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange-50 to-yellow-50 opacity-50"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg">
                <Zap className="w-8 h-8 text-white fill-white" />
              </div>
              <div className="text-4xl text-orange-600 mb-2">Exclusive</div>
              <div className="text-gray-600">Special Offers</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 px-5 py-3 rounded-full border-2 border-indigo-200 shadow-lg">
            <ShoppingBag className="w-5 h-5 text-indigo-500" />
            <span>Premium Products</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 px-5 py-3 rounded-full border-2 border-purple-200 shadow-lg">
            <TrendingUp className="w-5 h-5 text-purple-500" />
            <span>Trending Deals</span>
          </div>
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 px-5 py-3 rounded-full border-2 border-pink-200 shadow-lg">
            <Percent className="w-5 h-5 text-pink-500" />
            <span>Best Prices</span>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute -top-10 -left-10 opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Sparkles className="w-20 h-20 text-indigo-400 fill-indigo-400" />
        </motion.div>

        <motion.div
          className="absolute -bottom-10 -right-10 opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Sparkles className="w-20 h-20 text-purple-400 fill-purple-400" />
        </motion.div>
      </div>
    </div>
  );
}
