import React from 'react';
import { Link } from 'react-router-dom';
import { Login } from '../../Types';
import FormSignUpComponent from '../../components/Form/FormSignUpComponent';

interface IProps {
  login: Login;
}

const SignUpPresenter: React.FunctionComponent<IProps> = ({ login }) => {
  return (
    <>
      <div className="signup container">
        <h1 className="text-center">계정 만들기</h1>
        <FormSignUpComponent login={login} />
        <p className="text-help text-center">
          이미 계정이 있으신가요?
          <Link className="text-center login-here" to="/login">
            로그인 하기
          </Link>
        </p>
      </div>
      <style jsx>{`
        .signup form {
          max-width: 320px;
          padding: 8px;
          margin: 0 auto;
        }
        .signup input.form-control {
          font-size: 16px;
          height: auto;
          padding: 10px;
          margin-bottom: 1rem;
        }
        .signup button.btn {
          background-color: #3b5999;
          color: #fffffe;
          font-weight: 800;
          border-color: unset;
          margin-top: 10px;
        }
        .signup .text-help {
          margin-top: 10px;
        }
        .signup .login-here {
          font-weight: 900;
          color: #3a5999;
        }
      `}</style>
    </>
  );
};

export default SignUpPresenter;
