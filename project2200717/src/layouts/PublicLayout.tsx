import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'Types';

const PublicLayout: FC<Layout> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <>
          <Component {...matchProps} />
          <style jsx global>{`
            .container {
              padding: 0;
              margin: 0 auto;
            }
          `}</style>
        </>
      )}
    />
  );
};

export default PublicLayout;
