import React from 'react';
import { motion } from 'motion/react';

interface LogoAnimatedProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white' | 'dark' | 'gradient';
}

export function LogoAnimated({ className = '', size = 'md', variant = 'default' }: LogoAnimatedProps) {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const iconInnerSizes = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-10 h-10'
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl'
  };

  const iconColor = variant === 'gradient' 
    ? 'bg-gradient-to-br from-indigo-500 to-purple-600' 
    : variant === 'white' 
    ? 'bg-white' 
    : variant === 'dark' 
    ? 'bg-gray-900' 
    : 'bg-indigo-600';

  const textColor = variant === 'gradient'
    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'
    : variant === 'white'
    ? 'text-white'
    : variant === 'dark'
    ? 'text-gray-900'
    : 'text-indigo-600';

  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Icon with pulse animation */}
      <motion.div 
        className={`${iconSizes[size]} relative`}
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className={`absolute inset-0 ${iconColor} rounded-lg flex items-center justify-center transform -rotate-12 shadow-lg`}>
          <motion.svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className={`${iconInnerSizes[size]} ${
              variant === 'white' || variant === 'gradient' ? 'text-indigo-600' : 'text-white'
            }`}
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <path 
              d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" 
              fill="currentColor"
            />
          </motion.svg>
        </div>
      </motion.div>

      {/* Text with stagger animation */}
      <div className="flex flex-col leading-none overflow-hidden">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className={`${textSizes[size]} ${textColor} tracking-tight inline-block`}>
            {'Blinkdeals'.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: char === 'd' ? 0.9 : 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
