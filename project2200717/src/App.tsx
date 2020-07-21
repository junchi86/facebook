import React, { FC } from 'react';
import Home from './pages/Home';
import { BrowserRouter, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import PublicLayout from './layouts/PublicLayout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublicLayout path="/login" component={Login} />
          <PublicLayout path="/signup" component={SignUp} />
          <DefaultLayout path="/u/:seq" component={Home} />
          <DefaultLayout path="/" component={Home} />
        </Switch>
      </BrowserRouter>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body {
          font-family: Dotum, '맑은 고딕', 'roboto', 'Helvetica Neue', Helvetica, Arial, '맑은 고딕', malgun gothic,
            '돋움', Dotum, sans-serif;
          color: #202b3d;
          background-color: #e9eaed;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;
        }

        body {
          padding: 100px 0;
        }
      `}</style>
    </>
  );
};

export default App;
