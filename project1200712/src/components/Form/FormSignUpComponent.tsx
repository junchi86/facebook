import React, { useState, FC, memo } from 'react';
import { userList } from 'Dummy';
import { useHistory } from 'react-router-dom';
import { Login, InputEvent, FormEventType } from 'Types';

interface IProps {
  login: Login;
}

const FormSignUpComponent: FC<IProps> = ({ login }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [passRepeat, setPassRepeat] = useState('');
  const onChangeEmail: InputEvent = (event) => {
    event.preventDefault();
    setEmail(event.currentTarget.value);
  };
  const onChangeName: InputEvent = (event) => {
    event.preventDefault();
    setName(event.currentTarget.value);
  };
  const onChangePass: InputEvent = (event) => {
    event.preventDefault();
    setPass(event.currentTarget.value);
  };
  const onChangePassRepeat: InputEvent = (event) => {
    event.preventDefault();
    setPassRepeat(event.currentTarget.value);
  };
  const onSubmit: FormEventType = (event) => {
    event.preventDefault();
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
      const isExistEmail = userList.filter((listUser) => listUser.user.email === user.user.email);
      if (isExistEmail.length) {
        alert('이메일이 이미 등록되어 있습니다.');
        return history.push('/');
      }
      if (pass !== passRepeat) {
        alert('비밀번호가 일치하지 않습니다.');
        return history.push('/');
      }
      userList.push(user);
      const logUser = { email: user.user.email, password: user.user.password };
      login(logUser);
      alert('회원가입과 로그인에 성공했습니다.');
      return history.push('/');
    } catch (error) {
      console.log(error);
      alert('회원가입에 실패했습니다.');
      return history.push('/');
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        value={email}
        onChange={onChangeEmail}
        type="email"
        className="form-control"
        placeholder="Email"
        required
      />
      <input
        value={name}
        onChange={onChangeName}
        type="text"
        className="form-control"
        placeholder="Your Name"
        required
      />
      <input type="file" className="form-control" placeholder="Profile" />
      <input
        value={pass}
        onChange={onChangePass}
        type="password"
        className="form-control"
        placeholder="Password"
        min-length="5"
        required
      />
      <input
        value={passRepeat}
        onChange={onChangePassRepeat}
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

export default memo(FormSignUpComponent);
