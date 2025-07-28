import React from 'react';

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: 'plain' | 'primary' | 'secondary';
  className?: string;
  style?: React.CSSProperties;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  external = false,
  variant = 'plain',
  className = '',
  style = {},
}) => {
  const baseStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    borderRadius: '8px',
    textDecoration: 'none',
    color: 'rgb(52, 51, 50)',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '21px',
    transition: 'all 0.2s ease',
    position: 'relative',
    ...style,
  };

  const hoverStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  };

  return (
    <a
      href={href}
      className={`link link--${variant} ${className}`}
      style={baseStyles}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyles);
      }}
      onMouseLeave={(e) => {
        Object.assign(e.currentTarget.style, baseStyles);
      }}
    >
      {children}
    </a>
  );
};