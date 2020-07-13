import React, { FC } from 'react';
import LoginPresenter from './LoginPresenter';
import { Login } from 'Types';

interface IProps {
  login: Login;
}

const LoginContainter: FC<IProps> = ({ login }) => {
  return <LoginPresenter login={login} />;
};

export default LoginContainter;
