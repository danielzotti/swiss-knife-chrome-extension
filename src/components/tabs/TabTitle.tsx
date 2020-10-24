import React from 'react';
import './TabTitle.scss';

type Props = {
  title: string
  index: number
  setActiveTab: (index: number) => void
  isActive: boolean
}

export const TabTitle: React.FC<Props> = ({ title, setActiveTab, index, isActive }) => {

  const onClick = () => {
    if(!isActive) {
      setActiveTab(index);
    }
  };

  return (
    <li className={ isActive ? 'active' : undefined }>
      <button onClick={ onClick }>{ title }</button>
    </li>
  );
};
