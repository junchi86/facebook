import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { PublicLayout } from 'Types';

const PublicLayout: FC<PublicLayout> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <>
          <Component {...matchProps} {...rest} />
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
