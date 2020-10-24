import React, { ReactElement, useState } from 'react';
import { TabTitle } from './TabTitle';
import './Tabs.scss';

type Props = {
  children: ReactElement[]
}

export const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className="Tabs">
      <ul className="tabs__list">
        { children.map((item, index) => (
          <TabTitle
            key={ index }
            title={ item.props.title }
            index={ index }
            isActive={ index === selectedTab }
            setSelectedTab={ setSelectedTab }
          />
        )) }
      </ul>
      <div className="tabs__content">
        { children[selectedTab] }
      </div>
    </div>
  );
};
