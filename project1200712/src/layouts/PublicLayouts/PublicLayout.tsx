import React, { FC } from 'react';
import NavigationPublic from 'components/Navigation/NavgationPublic';

const PublicLayout: FC = ({ children }) => {
  return (
    <>
      <NavigationPublic />
      {children}
    </>
  );
};

export default PublicLayout;
