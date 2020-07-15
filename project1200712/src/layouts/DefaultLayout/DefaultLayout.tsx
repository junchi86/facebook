import React, { FC, ReactNode } from 'react';
import { RootState, Logout, Login } from 'Types';
import NavigationDefault from 'components/Navigation/NavigationDefault';

interface IProps {
  state: RootState;
  logout: Logout;
  component: FC<any>;
}

const DefaultLayout: FC<IProps> = ({ component: Component, ...rest }) => {
  return (
    <>
      <NavigationDefault {...rest} />
      <Component />
    </>
  );
};

export default DefaultLayout;
