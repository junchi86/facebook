import React from 'react';
import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { thunkGetMe } from '/data/users/actions';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues = {
    email: '',
    password: '',
  };
  const onSubmit = () => {
    try {
      dispatch(thunkGetMe());
      alert('로그인에 성공했습니다');
      return history.push('/');
    } catch (error) {
      return alert(`로그인 실패 : ${error}`);
    }
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Field className="form-control" name="email" placeholder="Email" type="email" requird />
        <Field className="form-control" name="password" placeholder="Password" type="password" required />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          로그인
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
