import React, { useState, FormEvent, SyntheticEvent, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from 'data/users/actions';
import InputComponent from './Input/InputComponent';

const SignUpForm = () => {
  const [state, setState] = useState({ email: '', name: '', password: '', passwordRepeat: '' });
  const { email, name, password, passwordRepeat } = state;
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    try {
      alert('회원가입하시겠습니까?');

      dispatch(signUp(email, passwordRepeat, name));
      alert('회원가입이 완료되었습니다. 로그인하겠습니다.');
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
      <InputComponent type="email" placeholder="Email" name="email" value={email} onChange={onChange} />
      <InputComponent type="text" placeholder="Your Name" name="name" value={name} onChange={onChange} />
      <input type="file" placeholder="Profile" />
      <InputComponent type="password" placeholder="Password" name="password" value={password} onChange={onChange} />
      <InputComponent
        type="password"
        placeholder="Repeat your password"
        name="passwordRepeat"
        value={passwordRepeat}
        onChange={onChange}
      />
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        가입하기
      </button>
    </form>
  );
};

export default memo(SignUpForm);
