import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '@/data/rootActions';
import { Formik, Form, FormikValues } from 'formik';
import AutoTextArea from '/components/Form/AutoTextArea';

const PostForm = ({ minHeight = 100, lineHeight = 20, placeholder = '무슨 생각을 하고 계신가요?' }) => {
  const dispatch = useDispatch();
  const initialValues = { contents: '' };
  const onSubmit = (value: FormikValues) => {
    dispatch(actions.posts.thunkWritePost(value.contents));
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values }) => (
          <Form className="write-form">
            <AutoTextArea placeholder={placeholder} lineHeight={lineHeight} />
            <button className="btn btn-primary" disabled={!values.contents.trim().length}>
              공유하기
            </button>
          </Form>
        )}
      </Formik>
      <style jsx>{`
        .write-form > textarea.form-control {
          min-height: ${minHeight}px;
          line-height: ${lineHeight}px;
          padding: 20px;
          font-size: 18px;
          resize: none;
          border: none;
          border-radius: 0.5rem;
          transition: box-shadow ease-in-out 1s;
        }
        .write-form > textarea:focus {
          box-shadow: #999999 0 0 50px;
        }
        .write-form > button.btn {
          float: right;
          margin-bottom: 0;
          margin-top: 16px;
          background-color: #3b5999;
          color: #fffffe;
          border: none;
          font-weight: 800;
        }
        .write-form {
          margin-bottom: 100px;
        }
      `}</style>
    </>
  );
};

export default PostForm;
