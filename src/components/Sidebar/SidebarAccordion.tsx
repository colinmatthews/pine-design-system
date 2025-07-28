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
  return (
    <li className={className}>
      <div
        style={{
          cursor: 'pointer',
          padding: '8px 12px',
          borderRadius: '8px',
          transition: 'all 0.2s ease',
        }}
        onClick={onToggle}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
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