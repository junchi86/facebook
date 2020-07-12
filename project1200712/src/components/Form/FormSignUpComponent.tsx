import React, { useState } from 'react';
import { userList } from '../../Dummy';
import { useHistory } from 'react-router-dom';

interface IProps {
  login: Function;
}

const FormSignUpComponent: React.FunctionComponent<IProps> = ({ login }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [passRepeat, setPassRepeat] = useState('');
  const onchangeEmail = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };
  const onchangeName = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setName(e.currentTarget.value);
  };
  const onchangePass = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setPass(e.currentTarget.value);
  };
  const onchangePassRepeat = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setPassRepeat(e.currentTarget.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const user = {
      user: {
        seq: userList.length,
        email,
        password: pass,
        name: name,
        profileImageUrl:
          'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
      },
      posts: [],
    };
    try {
      const emailFilter = userList.filter((listUser) => listUser.user.email === user.user.email);
      if (emailFilter.length === 1) {
        alert('이메일이 이미 등록되어 있습니다.');
        return history.push('/');
      }
      if (pass !== passRepeat) {
        alert('비밀번호가 일치하지 않습니다.');
        return history.push('/');
      }
      if (emailFilter.length === 0) {
        userList.push(user);
        const logUser = { email: user.user.email, pass: user.user.password };
        login(logUser);
        return history.push('/');
      }
    } catch (error) {
      console.log(error);
      return history.push('/');
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={email}
        onChange={onchangeEmail}
        type="email"
        className="form-control"
        placeholder="Email"
        required
      />
      <input
        value={name}
        onChange={onchangeName}
        type="text"
        className="form-control"
        placeholder="Your Name"
        required
      />
      <input type="file" className="form-control" placeholder="Profile" />
      <input
        value={pass}
        onChange={onchangePass}
        type="password"
        className="form-control"
        placeholder="Password"
        min-length="5"
        required
      />
      <input
        value={passRepeat}
        onChange={onchangePassRepeat}
        type="password"
        className="form-control"
        placeholder="Repeat your password"
        required
      />
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        가입하기
      </button>
    </form>
  );
};

export default FormSignUpComponent;
