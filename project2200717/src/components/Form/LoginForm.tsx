import React, { useState, FormEvent, SyntheticEvent, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from 'data/users/actions';
import InputComponent from './Input/InputComponent';

const LoginForm = () => {
  const [state, setState] = useState({ email: '', password: '' });
  const { email, password } = state;
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    try {
      alert('로그인 하시겠습니까?');
      dispatch(login(email, password));
      history.push('/');
    } catch (error) {
      alert(error);
    }
  };
  const onChange = (e: SyntheticEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setState({ ...state, [name]: value });
  };
  return (
    <form onSubmit={onSubmit}>
      <InputComponent type="email" placeholder="Email" onChange={onChange} name="email" value={email} />
      <InputComponent type="password" placeholder="Password" onChange={onChange} name="password" value={password} />
      <button className="btn btn-lg btn-primary btn-block">로그인</button>
    </form>
  );
};

export default memo(LoginForm);
