import React from 'react';

export interface IconProps {
  name: string;
  size?: 'small' | 'regular' | 'large';
  color?: string;
  'aria-label'?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'regular',
  color,
  'aria-label': ariaLabel,
  className = '',
}) => {
  const sizeMap = {
    small: '16px',
    regular: '20px',
    large: '24px',
  };

  return (
    <span
      className={`icon ${className}`}
      style={{
        display: 'inline-block',
        width: sizeMap[size],
        height: sizeMap[size],
        color: color || 'currentColor',
        flexShrink: 0,
      }}
      role="img"
      aria-label={ariaLabel || name}
    >
      {/* This would typically be an SVG icon or icon font */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ display: 'block' }}
      >
        {/* Placeholder icon - in real implementation, this would be dynamic based on name */}
        <circle cx="12" cy="12" r="3" />
      </svg>
    </span>
  );
};