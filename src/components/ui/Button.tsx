import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  href?: string;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  href,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';
  
  const variantStyles = {
    primary: 'bg-primary-600 hover:bg-primary-700 active:bg-primary-800 text-white focus:ring-primary-500 shadow-sm hover:shadow-md',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 active:bg-secondary-800 text-white focus:ring-secondary-500 shadow-sm hover:shadow-md',
    outline: 'border-2 border-primary-600 hover:border-primary-700 active:border-primary-800 bg-transparent hover:bg-primary-50 text-primary-700 hover:text-primary-800 focus:ring-primary-500',
    text: 'bg-transparent hover:bg-primary-50 text-primary-700 hover:text-primary-800 focus:ring-primary-500',
  };
  
  const sizeStyles = {
    small: 'text-sm px-3 py-1.5',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3',
  };
  
  const buttonClasses = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth ? 'w-full' : '',
    className
  );
  
  if (href) {
    return (
      <Link to={href} className={buttonClasses}>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </Link>
    );
  }
  
  return (
    <button className={buttonClasses} {...props}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;