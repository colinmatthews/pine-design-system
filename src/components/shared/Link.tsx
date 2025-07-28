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
    minHeight: '36px',
    ...style,
  };

  const hoverStyles = {
    backgroundColor: 'rgb(248, 248, 248)',
  };

  const isActive = className.includes('active');
  const activeStyles = {
    backgroundColor: 'rgb(254, 242, 242)',
    color: 'rgb(185, 28, 28)',
  };
  return (
    <a
      href={href}
      className={`link link--${variant} ${className}`}
      style={isActive ? { ...baseStyles, ...activeStyles } : baseStyles}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseEnter={(e) => {
        if (!isActive) {
          Object.assign(e.currentTarget.style, { ...baseStyles, ...hoverStyles });
        }
      }}
      onMouseLeave={(e) => {
        const finalStyles = isActive ? { ...baseStyles, ...activeStyles } : baseStyles;
        Object.assign(e.currentTarget.style, finalStyles);
      }}
    >
      {children}
    </a>
  );
};