import React from 'react';
import { HashRouter as RouterDom, Route, Redirect, Switch } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayouts/PublicLayout';
import HomeContainer from './pages/Home';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import LoginContainer from './pages/Login';
import SignUpContainer from './pages/SignUp';
import { IState } from './Types';

const Router: React.FunctionComponent<IState> = ({ state, logout, login, uploadPost, uploadComment, upLikes }) => {
  return (
    <RouterDom>
      {Object.keys(state.user).length > 0 ? (
        <DefaultLayout state={state} logout={logout}>
          <Route
            path="/"
            exact
            render={() => (
              <HomeContainer uploadPost={uploadPost} uploadComment={uploadComment} upLikes={upLikes} state={state} />
            )}
          />
        </DefaultLayout>
      ) : (
        <PublicLayout>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <HomeContainer uploadPost={uploadPost} uploadComment={uploadComment} upLikes={upLikes} state={state} />
              )}
            />
            <Route path="/login/" exact render={() => <LoginContainer login={login} />} />
            <Route path="/signup/" exact render={() => <SignUpContainer login={login} />} />
          </Switch>
        </PublicLayout>
      )}
      <Redirect from="*" to="/" />
    </RouterDom>
  );
};

export default Router;
