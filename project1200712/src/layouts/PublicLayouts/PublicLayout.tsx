import React, { FC } from 'react';
import NavigationPublic from 'components/Navigation/NavgationPublic';
import { Route } from 'react-router-dom';

interface IProps {
  component: FC<any>;
  path: string;
  exact: boolean;
}

const PublicLayout: FC<IProps> = ({ component: Component, ...rest }) => {
  return (
    <>
      <NavigationPublic />
      <Route {...rest} render={(props) => <Component {...props} />} />
    </>
  );
};

export default PublicLayout;
