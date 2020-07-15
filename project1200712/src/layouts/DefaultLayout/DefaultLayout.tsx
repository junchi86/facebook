import React, { FC, ReactNode } from 'react';
import { RootState, Logout, Login, IHomeProps } from 'Types';
import NavigationDefault from 'components/Navigation/NavigationDefault';
import { Route } from 'react-router-dom';

interface IProps {
  exact: boolean;
  path: string;
  state: RootState;
  logout: Logout;
  component: FC<any>;
}

const DefaultLayout: FC<IProps> = ({ component: Component, ...rest }) => {
  return (
    <>
      <NavigationDefault {...rest} />
      <Route {...rest} render={(props) => <Component {...props} />} />
    </>
  );
};

export default DefaultLayout;
