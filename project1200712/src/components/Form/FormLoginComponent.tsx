import React, { useState, FC, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { Login, InputEvent, FormEventType } from 'Types';

interface IProps {
  login: Login;
}

const FormLoginComponent: FC<IProps> = ({ login }) => {
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail: InputEvent = (event) => {
    event.preventDefault();
    setEmail(event.currentTarget.value);
  };

  const onChangePassword: InputEvent = (event) => {
    event.preventDefault();
    setPassword(event.currentTarget.value);
  };
  const onSubmit: FormEventType = (event) => {
    event.preventDefault();
    const user = { email, password };
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
        value={password}
      />
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        로그인
      </button>
    </form>
  );
};

export default memo(FormLoginComponent);
