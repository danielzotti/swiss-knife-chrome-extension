import React, { ReactElement, useState } from 'react';
import { TabTitle } from './TabTitle';
import './Tabs.scss';

type Props = {
  children: ReactElement[]
}

export const Tabs: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="Tabs">
      <ul>
        { children.map((item, index) => (
          <TabTitle
            key={ index }
            title={ item.props.title }
            index={ index }
            setSelectedTab={ setSelectedTab }
          />
        )) }
      </ul>
      <div className="content">
        { children[selectedTab] }
      </div>
    </div>
  );
};
