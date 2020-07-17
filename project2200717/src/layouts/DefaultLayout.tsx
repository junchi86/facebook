import React, { Component, FC } from 'react';
import Navigation from '../components/Navigation';
import { Route } from 'react-router-dom';
import { DefaultLayout } from 'Types';

const DefaultLayout: FC<DefaultLayout> = ({ component: Component, ...rest }) => {
  const { user, logOut } = rest;
  return (
    <Route
      render={(matchProps) => {
        return (
          <>
            <Navigation user={user} onLogout={logOut} />
            <Component {...matchProps} {...rest} />
            <style jsx global>{`
              .container {
                padding: 0;
                margin: 0 auto;
              }
            `}</style>
          </>
        );
      }}
    />
  );
};

export default DefaultLayout;
