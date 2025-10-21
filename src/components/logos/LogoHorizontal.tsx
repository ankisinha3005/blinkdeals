import React from 'react';

interface LogoHorizontalProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white' | 'dark' | 'gradient';
  showTagline?: boolean;
}

export function LogoHorizontal({ 
  className = '', 
  size = 'md', 
  variant = 'default',
  showTagline = false 
}: LogoHorizontalProps) {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl'
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
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon */}
      <div className={`${iconSizes[size]} relative flex-shrink-0`}>
        <div className={`absolute inset-0 ${iconColor} rounded-lg flex items-center justify-center transform -rotate-12 shadow-md`}>
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-6 h-6' : 'w-8 h-8'} ${
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
      <div className="flex flex-col leading-none">
        <span className={`${textSizes[size]} ${textColor} tracking-tight`}>
          Blink<span className="opacity-90">d</span>eals
        </span>
        {showTagline && (
          <span className={`${taglineSizes[size]} ${taglineColor} mt-1`}>
            Flash Sales in a Blink
          </span>
        )}
      </div>
    </div>
  );
}
