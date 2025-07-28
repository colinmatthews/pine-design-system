import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  style = {},
}) => {
  const baseStyles: React.CSSProperties = {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    border: '1px solid #e5e5e5',
    overflow: 'hidden',
    ...style,
  };

  return (
    <div
      className={`card ${className}`}
      style={baseStyles}
    >
      {children}
    </div>
  );
};