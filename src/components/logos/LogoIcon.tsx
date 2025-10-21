import React from 'react';

interface LogoIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'dark' | 'gradient' | 'outline';
}

export function LogoIcon({ className = '', size = 'md', variant = 'default' }: LogoIconProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-10 h-10',
    xl: 'w-14 h-14'
  };

  if (variant === 'outline') {
    return (
      <div className={`${sizes[size]} relative ${className}`}>
        <div className="absolute inset-0 border-2 border-indigo-600 rounded-lg flex items-center justify-center transform -rotate-12">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className={`${iconSizes[size]} text-indigo-600`}
          >
            <path 
              d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className={`${sizes[size]} relative ${className}`}>
      <div className={`absolute inset-0 ${
        variant === 'gradient' 
          ? 'bg-gradient-to-br from-indigo-500 to-purple-600' 
          : variant === 'white' 
          ? 'bg-white' 
          : variant === 'dark' 
          ? 'bg-gray-900' 
          : 'bg-indigo-600'
      } rounded-lg flex items-center justify-center transform -rotate-12 shadow-lg`}>
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className={`${iconSizes[size]} ${
            variant === 'white' || variant === 'gradient' 
              ? 'text-indigo-600' 
              : 'text-white'
          }`}
        >
          <path 
            d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
