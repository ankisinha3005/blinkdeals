import React from 'react';

interface LogoStackedProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white' | 'dark' | 'gradient';
  showTagline?: boolean;
}

export function LogoStacked({ 
  className = '', 
  size = 'md', 
  variant = 'default',
  showTagline = false 
}: LogoStackedProps) {
  const iconSizes = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32'
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl'
  };

  const taglineSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
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

  const taglineColor = variant === 'white' ? 'text-white/80' : 'text-gray-600';

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      {/* Icon */}
      <div className={`${iconSizes[size]} relative`}>
        <div className={`absolute inset-0 ${iconColor} rounded-2xl flex items-center justify-center transform -rotate-12 shadow-xl`}>
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className={`${size === 'sm' ? 'w-7 h-7' : size === 'md' ? 'w-12 h-12' : 'w-20 h-20'} ${
              variant === 'white' || variant === 'gradient' ? 'text-indigo-600' : 'text-white'
            }`}
          >
            <path 
              d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" 
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col items-center leading-none text-center">
        <span className={`${textSizes[size]} ${textColor} tracking-tight`}>
          Blink<span className="opacity-90">d</span>eals
        </span>
        {showTagline && (
          <span className={`${taglineSizes[size]} ${taglineColor} mt-2`}>
            Flash Sales in a Blink
          </span>
        )}
      </div>
    </div>
  );
}
