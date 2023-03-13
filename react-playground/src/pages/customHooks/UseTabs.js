import React from 'react';
import { Link } from 'react-router-dom';
import { useTabs } from '../../hooks/useTabs';

const CONTENT = [
  {
    tab: 'Section 1',
    content: 'THIS IS SECTION 1',
  },
  {
    tab: 'Section 2',
    content: 'THIS IS SECTION 2',
  },
];

const UseTabs = () => {
  const { currentTab, setCurrentTab } = useTabs(0, CONTENT);

  return (
    <div>
      <Link to={'/'}>MAIN</Link>
      <h1>UseTabs</h1>
      {CONTENT.map((content, index) => {
        return (
          <button key={index} onClick={() => setCurrentTab(index)}>
            {content.tab}
          </button>
        );
      })}

      <div>{currentTab.content}</div>
    </div>
  );
};

export default UseTabs;
