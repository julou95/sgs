import React from 'react';
import Header from '@module/Header/Header';

type Props = {
  children: React.ReactNode;
};

const Default: React.FC<Props> = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
);

export default Default;
