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
      {state.user.seq === null ? (
        <PublicLayout
          component={() => (
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <HomeContainer
                    uploadPost={uploadPost}
                    uploadComment={uploadComment}
                    upLikes={upLikes}
                    state={state}
                  />
                )}
              />
              <Route path="/login/" exact render={() => <LoginContainer login={login} />} />
              <Route path="/signup/" exact render={() => <SignUpContainer login={login} />} />
            </Switch>
          )}
        />
      ) : (
        <DefaultLayout
          state={state}
          logout={logout}
          component={() => (
            <Route
              path="/"
              exact
              render={() => (
                <HomeContainer uploadPost={uploadPost} uploadComment={uploadComment} upLikes={upLikes} state={state} />
              )}
            />
          )}
        />
      )}
      <Redirect from="*" to="/" />
    </Router>
  );
};

export default RouterComponent;
