import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-sans tracking-wide";

  const variants = {
    primary: "bg-forest-800 text-white hover:bg-forest-900 focus:ring-forest-800 shadow-md hover:shadow-lg",
    secondary: "bg-stone-200 text-stone-800 hover:bg-stone-300 focus:ring-stone-400",
    outline: "border border-stone-300 text-stone-700 hover:border-forest-800 hover:text-forest-800 hover:bg-stone-50 focus:ring-stone-300",
    ghost: "text-stone-600 hover:text-forest-800 hover:bg-stone-100/50",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
