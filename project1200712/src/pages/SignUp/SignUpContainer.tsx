import React, { FC } from 'react';
import SignUpPresenter from './SignUpPresenter';
import { Login } from 'Types';

interface IProps {
  login: Login;
}
const SignUpContainer: FC<IProps> = ({ login }) => {
  return <SignUpPresenter login={login} />;
};

export default SignUpContainer;
