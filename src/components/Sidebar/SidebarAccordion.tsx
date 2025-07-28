import React from 'react';
import type { NavigationSection } from '../../types/navigation';
import { Icon } from '../shared/Icon';
import { Link } from '../shared/Link';
import { Box } from '../shared/Box';

export interface SidebarAccordionProps {
  section: NavigationSection;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export const SidebarAccordion: React.FC<SidebarAccordionProps> = ({
  section,
  isOpen,
  onToggle,
  className = '',
}) => {
  const triggerStyles: React.CSSProperties = {
    cursor: 'pointer',
    padding: '8px 12px',
    borderRadius: '8px',
    transition: 'all 0.2s ease',
    minHeight: '36px',
    display: 'flex',
    alignItems: 'center',
  };

  const hoverStyles = {
    backgroundColor: 'rgb(248, 248, 248)',
  };
  return (
    <li className={className}>
      <div
        style={triggerStyles}
        onClick={onToggle}
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, { ...triggerStyles, ...hoverStyles });
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, triggerStyles);
        }}
      >
        <Box alignItems="center" gap="sm">
          <Icon
            name={section.icon}
            size="regular"
            aria-label={section.icon}
          />
          <span style={{ flex: 1 }}>{section.label}</span>
          <Icon
            name={isOpen ? 'chevron-up' : 'chevron-down'}
            size="small"
            style={{
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
              opacity: 0.6,
            }}
          />
        </Box>
      </div>
      
      {isOpen && (
        <Box
          direction="column"
          fit
          style={{
            paddingLeft: '32px',
            marginTop: '4px',
            gap: '2px',
          }}
        >
          {section.items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              external={item.external}
              variant="plain"
              style={{
                padding: '6px 12px',
                fontSize: '13px',
                minHeight: '32px',
              }}
            >
              {item.label}
            </Link>
          ))}
        </Box>
      )}
    </li>
  );
};