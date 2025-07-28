import React from 'react';
import type { NavigationItem } from '../../types/navigation';
import { Icon } from '../shared/Icon';
import { Link } from '../shared/Link';

export interface SidebarItemProps {
  item: NavigationItem;
  className?: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  className = '',
}) => {
  return (
    <li className={className}>
      <Link
        href={item.href}
        external={item.external}
        variant="plain"
      >
        <Icon
          name={item.icon}
          size="regular"
          aria-label={item.icon}
        />
        <span>{item.label}</span>
      </Link>
    </li>
  );
};