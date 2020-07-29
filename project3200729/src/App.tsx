import React, { FC, useEffect } from 'react';
import Home from '/pages/Home';
import { Switch } from 'react-router-dom';
import DefaultLayout from '/layouts/DefaultLayout';
import PublicLayout from '/layouts/PublicLayout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import User from './pages/User';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { useDispatch } from 'react-redux';
import * as actions from '@/data/rootActions';

interface IProps {
  history: History;
}

const App: FC<IProps> = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <PublicLayout path="/login" component={Login} />
        <PublicLayout path="/signup" component={SignUp} />
        <DefaultLayout path="/u/:name" component={User} />
        <DefaultLayout path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
