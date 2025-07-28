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

  // Icon mapping for better visual representation
  const getIconPath = (iconName: string) => {
    switch (iconName) {
      case 'rocket-tone':
        return <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />;
      case 'home-tone':
        return <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" />;
      case 'cube-tone':
        return <path d="M12 2L2 7L12 12L22 7L12 2Z M2 17L12 22L22 17 M2 12L12 17L22 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />;
      case 'credit-card-tone':
        return <path d="M21 4H3C1.89 4 1 4.89 1 6V18C1 19.11 1.89 20 3 20H21C22.11 20 23 19.11 23 18V6C23 4.89 22.11 4 21 4ZM3 18V12H21V18H3ZM21 8H3V6H21V8Z" />;
      case 'monitor-tone':
        return <path d="M20 3H4C2.89 3 2 3.89 2 5V15C2 16.11 2.89 17 4 17H9V19H8V21H16V19H15V17H20C21.11 17 22 16.11 22 15V5C22 3.89 21.11 3 20 3ZM20 15H4V5H20V15Z" />;
      case 'phone-tone':
        return <path d="M17 2H7C5.89 2 5 2.89 5 4V20C5 21.11 5.89 22 7 22H17C18.11 22 19 21.11 19 20V4C19 2.89 18.11 2 17 2ZM17 18H7V6H17V18Z" />;
      case 'mail-tone':
        return <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />;
      case 'users-tone':
        return <path d="M16 4C18.21 4 20 5.79 20 8S18.21 12 16 12 12 10.21 12 8 13.79 4 16 4ZM8 6C9.66 6 11 7.34 11 9S9.66 12 8 12 5 10.66 5 9 6.34 6 8 6ZM8 13C10.67 13 16 14.34 16 17V20H0V17C0 14.34 5.33 13 8 13ZM16 13.43C18.11 14.26 20 15.61 20 17V20H18V17C18 16.2 17.43 15.53 16.6 15.1C16.39 14.66 16.05 14.27 15.54 13.94C15.68 13.64 15.84 13.53 16 13.43Z" />;
      case 'bar-chart-tone':
        return <path d="M5 9.2H7V19H5V9.2ZM10.6 5H12.4V19H10.6V5ZM16.2 13H18V19H16.2V13Z" />;
      case 'clapperboard-tone':
        return <path d="M20.84 2.05L16.93 5.96L15.66 4.69L19.57 0.78L20.84 2.05ZM8.5 6.5L12 3L15.5 6.5L12 10L8.5 6.5ZM12 14L8.5 17.5L5 14L8.5 10.5L12 14ZM15.5 17.5L12 21L8.5 17.5L12 14L15.5 17.5Z" />;
      case 'dots-horizontal-tone':
        return <path d="M6 10C4.9 10 4 10.9 4 12S4.9 14 6 14 8 13.1 8 12 7.1 10 6 10ZM12 10C10.9 10 10 10.9 10 12S10.9 14 12 14 14 13.1 14 12 13.1 10 12 10ZM18 10C16.9 10 16 10.9 16 12S16.9 14 18 14 20 13.1 20 12 19.1 10 18 10Z" />;
      case 'chevron-down':
        return <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />;
      case 'chevron-up':
        return <path d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z" />;
      case 'gear':
        return <path d="M12 15.5C10.07 15.5 8.5 13.93 8.5 12S10.07 8.5 12 8.5 15.5 10.07 15.5 12 13.93 15.5 12 15.5ZM19.43 12.97C19.47 12.65 19.5 12.33 19.5 12S19.47 11.35 19.43 11.03L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.51 2.42L9.13 5.07C8.52 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.72 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.21 8.95 2.27 9.22 2.46 9.37L4.57 11.03C4.53 11.35 4.5 11.67 4.5 12S4.53 12.65 4.57 12.97L2.46 14.63C2.27 14.78 2.21 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.95C7.96 18.35 8.52 18.68 9.13 18.93L9.51 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.97Z" />;
      case 'question-circle':
        return <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7S10 7.9 10 9H8C8 6.79 9.79 5 12 5S16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z" />;
      case 'external-link':
        return <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11M15 3H21V9M10 14L21 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />;
      default:
        return <circle cx="12" cy="12" r="3" />;
    }
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
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ display: 'block' }}
      >
        {getIconPath(name)}
      </svg>
    </span>
  );
};