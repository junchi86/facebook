import React, { FC } from 'react';
import NavigationPublic from 'components/Navigation/NavgationPublic';
import { Route } from 'react-router-dom';

interface IProps {
  component: FC<any>;
}

const PublicLayout: FC<IProps> = ({ component: Component }) => {
  return (
    <>
      <NavigationPublic />
      <Component />
    </>
  );
};

export default PublicLayout;
