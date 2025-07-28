import React from 'react';

export interface BoxProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  gap?: 'xs' | 'sm' | 'md' | 'lg';
  fit?: boolean;
  slot?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Box: React.FC<BoxProps> = ({
  children,
  direction = 'row',
  alignItems = 'flex-start',
  gap = 'md',
  fit = false,
  className = '',
  style = {},
}) => {
  const gapMap = {
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
  };

  const baseStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: direction,
    alignItems,
    gap: gapMap[gap],
    minHeight: fit ? '0px' : 'auto',
    minWidth: fit ? '100%' : 'auto',
    maxWidth: fit ? '100%' : 'none',
    width: fit ? '100%' : 'auto',
    ...style,
  };

  return (
    <div
      className={`box ${className}`}
      style={baseStyles}
    >
      {children}
    </div>
  );
};