import React, { FC, Dispatch, SetStateAction } from 'react';
import { STEPS } from '@/pages/SignUp/helpers';
import { Formik, Form, Field, FormikValues, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { emailExist } from '/ajax/useAxios';
import { firstSignUp } from '/data/auth/actions';
import FormGroup from '/components/Form/FormGroup';
import * as selectors from '@/data/rootSelectors';
import { AuthState } from '/data/auth/reducers';

interface IProps {
  setStep: Dispatch<SetStateAction<number>>;
}
interface IValues {
  email?: string;
  password?: string;
  repeatPassword?: string;
}
const EmailPasswordForm: FC<IProps> = ({ setStep }) => {
  const dispatch = useDispatch();
  const onSubmit = async (values: FormikValues) => {
    try {
      const { email, password } = values;
      const data = await emailExist(email);
      const response = data.data.response;
      if (response) return '같은 이메일이 존재합니다.';
      if (!response)
        if (confirm('이메일 중복이 없습니다. 회원 가입을 진행합니다')) {
          dispatch(firstSignUp(email, password, '', ''));
          setStep(STEPS.PROFILE);
        } else return;
    } catch (error) {
      console.log(error);
      alert('오류가 발생했습니다.' + error);
      return error;
    }
  };
  const auth: AuthState = useSelector(selectors.auth.getSignUp);
  const initialValues: IValues = {
    email: auth.principal ? auth.principal : '',
    password: auth.credentials ? auth.credentials : '',
    repeatPassword: auth.credentials ? auth.credentials : '',
  };
  return (
    <div className="signup-form">
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          let errors: IValues = {};
          if (!values.email) errors.email = '이메일은 필수입니다.';
          else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = '이메일 형식이 아닙니다.';
          }
          if (!values.password) errors.password = '비밀번호는 필수입니다.';
          if (!values.repeatPassword) errors.repeatPassword = '비밀번호는 필수입니다.';
          if (values.repeatPassword !== values.password) errors.repeatPassword = '비밀번호가 일치하지 않습니다.';
          return errors;
        }}
        onSubmit={onSubmit}>
        {({ isValid }) => (
          <Form>
            <FormGroup>
              <Field
                name="email"
                type="email"
                className={`form-control ${isValid ? '' : 'is-invalid'}`}
                placeholder="이메일"
                required
              />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </FormGroup>
            <FormGroup>
              <Field
                name="password"
                type="password"
                className={`form-control ${isValid ? '' : 'is-invalid'}`}
                placeholder="비밀번호"
                minLength={5}
                required
              />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </FormGroup>
            <FormGroup>
              <Field
                name="repeatPassword"
                type="password"
                className={`form-control ${isValid ? '' : 'is-invalid'}`}
                placeholder="비밀번호 확인"
                required
              />
              <ErrorMessage name="repeatPassword" component="div" className="invalid-feedback" />
            </FormGroup>
            <FormGroup>
              <button className="btn btn-lg btn-primary btn-block">다음</button>
            </FormGroup>
          </Form>
        )}
      </Formik>
      <style jsx>{`
        .invalid-feedback {
          font-size: 15px;
        }
      `}</style>
    </div>
  );
};

export default EmailPasswordForm;
