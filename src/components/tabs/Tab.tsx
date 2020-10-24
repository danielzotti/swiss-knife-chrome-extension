import React from 'react';

import './Tab.scss';

type Props = {
  title: string
}

export const Tab: React.FC<Props> = ({ children }) => {
  return <div>{ children }</div>;
};
