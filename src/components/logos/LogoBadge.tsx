import React from 'react';

interface LogoBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline' | 'gradient';
  text?: string;
}

export function LogoBadge({ 
  className = '', 
  size = 'md', 
  variant = 'default',
  text = 'FLASH SALE'
}: LogoBadgeProps) {
  const containerSizes = {
    sm: 'px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'px-6 py-3'
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'outline':
        return 'border-2 border-indigo-600 bg-transparent text-indigo-600';
      case 'gradient':
        return 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-0';
      default:
        return 'bg-indigo-600 text-white border-0';
    }
  };

  return (
    <div className={`inline-flex items-center gap-2 ${containerSizes[size]} ${getVariantStyles()} rounded-full ${className}`}>
      {/* Lightning icon */}
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        className={iconSizes[size]}
      >
        <path 
          d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" 
          fill="currentColor"
        />
      </svg>
      
      {/* Text */}
      <span className={`${textSizes[size]} tracking-wide`}>
        {text}
      </span>
    </div>
  );
}
