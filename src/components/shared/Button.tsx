import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  className = '',
  style = {},
  onClick,
  disabled = false,
}) => {
  const sizeStyles = {
    small: {
      padding: '6px 12px',
      fontSize: '13px',
      fontWeight: '500',
    },
    medium: {
      padding: '8px 16px',
      fontSize: '14px',
      fontWeight: '500',
    },
    large: {
      padding: '12px 20px',
      fontSize: '16px',
      fontWeight: '600',
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#1f2937',
      color: '#fff',
      border: 'none',
    },
    secondary: {
      backgroundColor: '#f3f4f6',
      color: '#374151',
      border: '1px solid #d1d5db',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#374151',
      border: 'none',
    },
  };

  const hoverStyles = {
    primary: {
      backgroundColor: '#111827',
    },
    secondary: {
      backgroundColor: '#e5e7eb',
    },
    ghost: {
      backgroundColor: '#f9fafb',
    },
  };

  const baseStyles: React.CSSProperties = {
    borderRadius: '6px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    fontFamily: 'Inter, -apple-system, system-ui, "system-ui", "Segoe UI", Roboto, Ubuntu, sans-serif',
    opacity: disabled ? 0.5 : 1,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style,
  };

  return (
    <button
      className={`button button--${variant} button--${size} ${className}`}
      style={baseStyles}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={(e) => {
        if (!disabled) {
          Object.assign(e.currentTarget.style, { ...baseStyles, ...hoverStyles[variant] });
        }
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, baseStyles);
      }}
    >
      {children}
    </button>
  );
};