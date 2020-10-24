import React, { useCallback } from 'react';
import './TabTitle.scss';

type Props = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
  isActive: boolean
}

export const TabTitle: React.FC<Props> = ({ title, setSelectedTab, index, isActive }) => {

  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <li className={ isActive ? 'active' : undefined }>
      <button onClick={ onClick }>{ title }</button>
    </li>
  );
};
