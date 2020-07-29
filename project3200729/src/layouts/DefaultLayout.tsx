import React, { FC } from 'react';
import Navigation from '@/components/Navigation';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import * as selectors from '@/data/rootSelectors';
import * as actions from '@/data/rootActions';

interface IProps {
  path: string;
  component: any;
}

const DefaultLayout: FC<IProps> = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectors.users.getUser);
  const logOut = () => {
    dispatch(actions.user.logout());
  };

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <>
          <Navigation user={user} onLogout={logOut} />
          <Component {...matchProps} {...rest} />
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
      )}
    />
  );
};

export default DefaultLayout;
