import React from 'react';
import NavigationPublic from '../../components/Navigation/NavgationPublic';

const PublicLayout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <NavigationPublic />
      {children}
    </>
  );
};

export default PublicLayout;
