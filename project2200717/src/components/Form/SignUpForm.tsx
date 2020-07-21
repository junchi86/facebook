import React, { useState, FormEvent, SyntheticEvent, memo } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signUp } from 'data/users/actions';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [pass2, setPass2] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(signUp(email, pass, name));
    alert('회원가입이 완료되었습니다. 로그인하겠습니다.');
    history.push('/');
  };
  const onChangeEmail = (e: SyntheticEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };
  const onChangePass = (e: SyntheticEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setPass(e.currentTarget.value);
  };
  const onChangePass2 = (e: SyntheticEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setPass2(e.currentTarget.value);
  };
  const onChangeName = (e: SyntheticEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setName(e.currentTarget.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        className="form-control"
        placeholder="Email"
        required
        value={email}
        onChange={onChangeEmail}
      />
      <input
        type="text"
        className="form-control"
        placeholder="Your Name"
        required
        value={name}
        onChange={onChangeName}
      />
      <input type="file" className="form-control" placeholder="Profile" />
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        minLength={5}
        required
        value={pass}
        onChange={onChangePass}
      />
      <input
        type="password"
        className="form-control"
        placeholder="Repeat your password"
        required
        value={pass2}
        onChange={onChangePass2}
      />
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        가입하기
      </button>
    </form>
  );
};

export default memo(SignUpForm);
