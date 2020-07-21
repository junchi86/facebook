import React, { FC } from 'react';
import Navigation from '../components/Navigation';
import { Route } from 'react-router-dom';

type Layout = {
  path: string;
  component: FC<any>;
};

const DefaultLayout: FC<Layout> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => {
        return (
          <>
            <Navigation />
            <Component {...matchProps} />
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
