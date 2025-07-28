import React from 'react';
import type { NavigationData, NavigationItem, NavigationSection } from '../../types/navigation';
import { useSidebarState } from '../../hooks/useSidebarState';
import { SidebarItem } from './SidebarItem';
import { SidebarAccordion } from './SidebarAccordion';

export interface SidebarProps {
  navigationData: NavigationData;
  className?: string;
  width?: number;
  top?: number;
}

const isNavigationSection = (item: NavigationItem | NavigationSection): item is NavigationSection => {
  return 'items' in item;
};

export const Sidebar: React.FC<SidebarProps> = ({
  navigationData,
  className = '',
  width = 250,
  top = 64,
}) => {
  const { toggleSection, isSectionOpen } = useSidebarState(['products', 'sales']);

  const sidebarStyles: React.CSSProperties = {
    position: 'fixed',
    zIndex: 1,
    top: `${top}px`,
    left: '0px',
    width: `${width}px`,
    height: `calc(100vh - ${top}px)`,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRight: '1px solid rgb(240, 240, 240)',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '14px',
    fontWeight: '500',
    color: 'rgb(52, 51, 50)',
    lineHeight: '21px',
    fontFamily: 'Inter, -apple-system, system-ui, "system-ui", "Segoe UI", Roboto, Ubuntu, sans-serif',
    transition: 'all 0.2s cubic-bezier(1, 0, 0, 1)',
  };

  const scrollAreaStyles: React.CSSProperties = {
    padding: '16px 16px 8px 16px',
    overflowX: 'hidden',
    overflowY: 'auto',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
    overscrollBehavior: 'contain',
  };

  const bottomAreaStyles: React.CSSProperties = {
    padding: '16px',
    height: '98px',
    position: 'relative',
  };

  const listStyles: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  return (
    <div
      className={`sidebar ${className}`}
      style={sidebarStyles}
    >
      <div style={scrollAreaStyles}>
        <nav aria-label="Main navigation">
          <ul style={listStyles}>
            {navigationData.mainItems.map((item) => {
              if (isNavigationSection(item)) {
                return (
                  <SidebarAccordion
                    key={item.id}
                    section={item}
                    isOpen={isSectionOpen(item.id)}
                    onToggle={() => toggleSection(item.id)}
                  />
                );
              } else {
                return (
                  <SidebarItem
                    key={item.id}
                    item={item}
                  />
                );
              }
            })}
          </ul>
        </nav>
      </div>

      <div style={bottomAreaStyles}>
        <nav aria-label="Secondary navigation">
          <ul style={listStyles}>
            {navigationData.bottomItems.map((item) => (
              <SidebarItem
                key={item.id}
                item={item}
              />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};