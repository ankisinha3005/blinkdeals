import React from 'react';

interface LogoFullProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'dark' | 'gradient';
}

export function LogoFull({ className = '', size = 'md', variant = 'default' }: LogoFullProps) {
  const sizes = {
    sm: 'text-xl',
    md: 'text-3xl',
    lg: 'text-5xl',
    xl: 'text-7xl'
  };

  const variants = {
    default: 'text-indigo-600',
    white: 'text-white',
    dark: 'text-gray-900',
    gradient: 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Icon */}
      <div className="relative">
        <div className={`${size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-12 h-12' : size === 'lg' ? 'w-16 h-16' : 'w-24 h-24'} relative`}>
          {/* Lightning bolt */}
          <div className={`absolute inset-0 ${variant === 'gradient' ? 'bg-gradient-to-br from-indigo-500 to-purple-600' : variant === 'white' ? 'bg-white' : variant === 'dark' ? 'bg-gray-900' : 'bg-indigo-600'} rounded-lg flex items-center justify-center transform -rotate-12`}>
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              className={`${size === 'sm' ? 'w-5 h-5' : size === 'md' ? 'w-7 h-7' : size === 'lg' ? 'w-10 h-10' : 'w-14 h-14'} ${variant === 'white' || variant === 'gradient' ? 'text-indigo-600' : 'text-white'}`}
            >
              <path 
                d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" 
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className={`${sizes[size]} ${variants[variant]} tracking-tight`}>
          Blink<span className="opacity-90">d</span>eals
        </span>
      </div>
    </div>
  );
}
