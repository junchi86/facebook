import React, { FC } from 'react';
import { State, Logout } from 'Types';
import NavigationDefault from 'components/Navigation/NavigationDefault';

interface IProps {
  state: State;
  logout: Logout;
}

const DefaultLayout: FC<IProps> = ({ state, children, logout }) => {
  return (
    <>
      <NavigationDefault state={state} logout={logout} />
      {children}
    </>
  );
};

export default DefaultLayout;
