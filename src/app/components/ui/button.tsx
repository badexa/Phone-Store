import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  hoverBg?: string;
  hoverText?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  hoverBg,
  hoverText,
  className = '', 
  style,
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-bold rounded transition-all duration-300';
  const variantStyles = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-white text-black',
    custom: '',
  };
  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  const hoverStyles = hoverBg || hoverText 
    ? `hover:style-[--hover-bg:${hoverBg};--hover-text:${hoverText}]` 
    : '';

  const combinedStyle = {
    ...style,
    '--hover-bg': hoverBg,
    '--hover-text': hoverText,
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${hoverStyles} ${className}`}
      style={combinedStyle}
      {...props}
    >
      {children}
    </button>
  );
}
