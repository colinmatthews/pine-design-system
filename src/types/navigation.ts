export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  external?: boolean;
}

export interface NavigationSection {
  id: string;
  label: string;
  icon: string;
  items: NavigationItem[];
  defaultOpen?: boolean;
}

export interface NavigationData {
  mainItems: (NavigationItem | NavigationSection)[];
  bottomItems: NavigationItem[];
}

export interface SidebarProps {
  navigationData: NavigationData;
  className?: string;
  width?: number;
  top?: number;
}

export interface SidebarItemProps {
  item: NavigationItem;
  className?: string;
}

export interface SidebarAccordionProps {
  section: NavigationSection;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}