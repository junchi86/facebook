import React, { FC } from 'react';
import { Route } from 'react-router-dom';

type Layout = {
  path: string;
  component: FC<any>;
};

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
