import React, { FC } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import PublicLayout from 'layouts/PublicLayouts/PublicLayout';
import HomeContainer from 'pages/Home';
import DefaultLayout from 'layouts/DefaultLayout/DefaultLayout';
import LoginContainer from 'pages/Login';
import SignUpContainer from 'pages/SignUp';
import { Logout, RootState, Login, UploadPost, UploadComment, UpLikes } from '../../Types';

interface IProps {
  state: RootState;
  logout: Logout;
  login: Login;
  uploadPost: UploadPost;
  uploadComment: UploadComment;
  upLikes: UpLikes;
}

const RouterComponent: FC<IProps> = ({ state, logout, login, uploadPost, uploadComment, upLikes }) => {
  return (
    <Router>
      <Switch>
        {state.user ? (
          <PublicLayout
            path="/"
            exact
            component={() => (
              <HomeContainer uploadPost={uploadPost} uploadComment={uploadComment} upLikes={upLikes} state={state} />
            )}
          />
        ) : (
          <DefaultLayout
            path="/"
            exact
            state={state}
            logout={logout}
            component={() => (
              <HomeContainer uploadPost={uploadPost} uploadComment={uploadComment} upLikes={upLikes} state={state} />
            )}
          />
        )}
        <PublicLayout path="/login/" exact component={() => <LoginContainer login={login} />} />
        <PublicLayout path="/signup/" exact component={() => <SignUpContainer login={login} />} />
      </Switch>

      <Redirect from="*" to="/" />
    </Router>
  );
};

export default RouterComponent;
