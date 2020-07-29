import React, { Dispatch, SetStateAction, FC } from 'react';
import { Link } from 'react-router-dom';
import { STEPS } from '@/pages/SignUp/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues, Formik, Form, Field, ErrorMessage } from 'formik';
import FormGroup from '/components/Form/FormGroup';
import { secondSignUp } from '/data/auth/actions';
import * as selectors from '@/data/rootSelectors';
import { AuthState } from '/data/auth/reducers';

interface IProps {
  setStep: Dispatch<SetStateAction<number>>;
}

interface IValues {
  file?: string;
  name?: string;
}

const ProfileForm: FC<IProps> = ({ setStep }) => {
  const dispatch = useDispatch();
  const state: AuthState = useSelector(selectors.auth.getSignUp);

  const onSubmit = async (values: FormikValues) => {
    try {
      const { file, name } = values;
      if (confirm('회원 가입을 진행합니다')) {
        dispatch(secondSignUp('', '', file, name));
        // 디스패치 서버 회원가입 // 4주차 과제
      } else return;
    } catch (error) {
      console.log(error);
      alert('오류가 발생했습니다.' + error);
      return error;
    }
  };

  const initialValues: IValues = {
    file: '',
    name: '',
  };

  const handleClickGoBack = () => setStep(STEPS.EMAIL_PASSWORD);
  return (
    <div className="signup-form">
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validate={(values) => {
          let errors: IValues = {};
          if (!values.name) errors.name = '이름은 필수입니다.';
          return errors;
        }}>
        {({ isValid }) => (
          <Form>
            <FormGroup>
              <Field
                name="name"
                type="text"
                className={`form-control ${isValid ? '' : 'is-invalid'}`}
                placeholder="이름"
                required
              />
              <ErrorMessage name="name" component="div" className="invalid-feedback" />
            </FormGroup>
            <FormGroup>
              <Field
                name="file"
                type="file"
                className={`form-control ${isValid ? '' : 'is-invalid'}`}
                placeholder="Profile"
              />
            </FormGroup>
            <FormGroup>
              <button className="btn btn-lg btn-primary btn-block">가입하기</button>
            </FormGroup>
            <FormGroup>
              <button className="btn btn-lg btn-secondary btn-block" onClick={handleClickGoBack}>
                이전 단계
              </button>
            </FormGroup>
          </Form>
        )}
      </Formik>
      <style jsx>{`
        .invalid-feedback {
          font-size: 15px;
        }
      `}</style>
      <p className="text-help text-center">
        이미 계정이 있으신가요?{' '}
        <Link className="text-center login-here" to="/login">
          로그인 하기
        </Link>
      </p>
    </div>
  );
};

export default ProfileForm;
