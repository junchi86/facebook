import React, { useState, FormEvent, SyntheticEvent, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from 'data/users/actions';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    try {
      alert('로그인 하시겠습니까?');
      dispatch(login(email, pass));
      history.push('/');
    } catch (error) {
      alert('로그인이 실패했습니다.');
    }
  };
  const onChangeEmail = (e: SyntheticEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };
  const onChangePass = (e: SyntheticEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setPass(e.currentTarget.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        className="form-control"
        placeholder="Email"
        required
        onChange={onChangeEmail}
        value={email}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        onChange={onChangePass}
        required
        value={pass}
      />
      <button className="btn btn-lg btn-primary btn-block">로그인</button>
    </form>
  );
};

export default memo(LoginForm);
