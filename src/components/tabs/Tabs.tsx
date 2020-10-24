import React, { ReactElement, useEffect, useState } from 'react';
import { TabTitle } from './TabTitle';
import './Tabs.scss';
import { getItemFromLocalStorage, setItemToLocalStorage } from '../../services/LocalStorage';

type Props = {
  children: ReactElement[]
}

export const Tabs: React.FC<Props> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    getItemFromLocalStorage('tabIndex', (tabIndex) => {
      setActiveTab(!isNaN(parseInt(tabIndex, 10)) ? parseInt(tabIndex) : 0);
    });
  });

  const onActiveTabChanged = (tabIndex: number) => {
    setActiveTab(tabIndex);
    setItemToLocalStorage('tabIndex', tabIndex.toString());
  };

  return (
    <div className="Tabs">
      <ul className="tabs__list">
        { children.map((item, index) => (
          <TabTitle
            key={ index }
            title={ item.props.title }
            index={ index }
            isActive={ index === activeTab }
            setActiveTab={ onActiveTabChanged }
          />
        )) }
      </ul>
      <div className="tabs__content">
        { children[activeTab] }
      </div>
      <div>Current tab: { activeTab }</div>
    </div>
  );
};
