import { useState, useCallback } from 'react';

export interface SidebarState {
  openSections: Set<string>;
}

export const useSidebarState = (defaultOpenSections: string[] = []) => {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(defaultOpenSections)
  );

  const toggleSection = useCallback((sectionId: string) => {
    setOpenSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  }, []);

  const isSectionOpen = useCallback((sectionId: string) => {
    return openSections.has(sectionId);
  }, [openSections]);

  return {
    toggleSection,
    isSectionOpen,
  };
};