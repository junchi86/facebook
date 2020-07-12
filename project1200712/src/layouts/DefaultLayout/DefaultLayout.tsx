import React from 'react';
import { Logout, State } from '../../Types';
import NavigationDefault from '../../components/Navigation/NavigationDefault';

interface IProps {
  state: State;
  logout: Logout;
}

const DefaultLayout: React.FunctionComponent<IProps> = ({ state, children, logout }) => {
  return (
    <>
      <NavigationDefault state={state} logout={logout} />
      {children}
    </>
  );
};

export default DefaultLayout;
