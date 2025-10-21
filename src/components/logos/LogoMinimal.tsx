import React from 'react';

interface LogoMinimalProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'white' | 'dark' | 'gradient';
}

export function LogoMinimal({ className = '', size = 'md', variant = 'default' }: LogoMinimalProps) {
  const sizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-3xl',
    xl: 'text-5xl'
  };

  const textColor = variant === 'gradient'
    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'
    : variant === 'white'
    ? 'text-white'
    : variant === 'dark'
    ? 'text-gray-900'
    : 'text-indigo-600';

  return (
    <div className={`${className}`}>
      <span className={`${sizes[size]} ${textColor} tracking-tight`}>
        Blink<span className="opacity-90">d</span>eals
      </span>
    </div>
  );
}
