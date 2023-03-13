import { useState } from 'react';

export const useTabs = (initialIndex, allTabs) => {
  const [currentTab, setCurrentTab] = useState(initialIndex);
  return {
    currentTab: allTabs[currentTab],
    setCurrentTab: setCurrentTab,
  };
};
