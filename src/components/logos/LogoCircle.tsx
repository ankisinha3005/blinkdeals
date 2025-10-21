import React from 'react';

interface LogoCircleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'dark' | 'gradient' | 'outline';
  showText?: boolean;
}

export function LogoCircle({ 
  className = '', 
  size = 'md', 
  variant = 'default',
  showText = false 
}: LogoCircleProps) {
  const containerSizes = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  const iconSizes = {
    sm: 'w-5 h-5',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-lg',
    xl: 'text-2xl'
  };

  if (variant === 'outline') {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <div className={`${containerSizes[size]} relative rounded-full border-3 border-indigo-600 flex items-center justify-center`}>
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
        {showText && (
          <span className={`${textSizes[size]} text-indigo-600 tracking-tight`}>
            Blinkdeals
          </span>
        )}
      </div>
    );
  }

  const bgColor = variant === 'gradient' 
    ? 'bg-gradient-to-br from-indigo-500 to-purple-600' 
    : variant === 'white' 
    ? 'bg-white' 
    : variant === 'dark' 
    ? 'bg-gray-900' 
    : 'bg-indigo-600';

  const iconColor = variant === 'white' || variant === 'gradient' 
    ? 'text-indigo-600' 
    : 'text-white';

  const textColor = variant === 'white' 
    ? 'text-white' 
    : variant === 'dark'
    ? 'text-gray-900'
    : 'text-indigo-600';

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div className={`${containerSizes[size]} ${bgColor} rounded-full flex items-center justify-center shadow-lg`}>
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          className={`${iconSizes[size]} ${iconColor}`}
        >
          <path 
            d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" 
            fill="currentColor"
          />
        </svg>
      </div>
      {showText && (
        <span className={`${textSizes[size]} ${textColor} tracking-tight`}>
          Blinkdeals
        </span>
      )}
    </div>
  );
}
