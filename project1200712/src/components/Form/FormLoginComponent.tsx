import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

interface IProps {
  login: Function;
}

const FormLoginComponent: React.FunctionComponent<IProps> = ({ login }) => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const onChangeEmail = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };

  const onChangePassword = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setPass(e.currentTarget.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const user = { email, pass };
    login(user);
    history.push('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChangeEmail}
        type="email"
        className="form-control"
        placeholder="Email"
        required
        value={email}
      />
      <input
        onChange={onChangePassword}
        type="password"
        className="form-control"
        placeholder="Password"
        required
        value={pass}
      />
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        로그인
      </button>
    </form>
  );
};

export default FormLoginComponent;
