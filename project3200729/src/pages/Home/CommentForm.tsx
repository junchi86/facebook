import React, { useCallback, FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '@/data/rootActions';
import * as selectors from '@/data/rootSelectors';
import { Formik, Form, FormikValues } from 'formik';
import AutoTextArea from '/components/Form/AutoTextArea';
import { thunkGetMe } from '/data/users/actions';
import { User } from '/data/users/reducers';
import { thunkGetComment } from '/data/comments/actions';

export interface IProps {
  postSeq: number;
  minHeight?: number;
  lineHeight?: number;
  placeholder?: string;
}

const CommentForm: FC<IProps> = ({
  postSeq,
  minHeight = 20,
  lineHeight = 20,
  placeholder = '댓글을 입력하세요...',
}) => {
  const dispatch = useDispatch();

  const initialValues = { contents: '' };
  const user: User = useSelector(selectors.users.getUser);
  const onSubmit = async (values: FormikValues) => {
    await dispatch(actions.comments.thunkWriteComment(postSeq, values.contents, user.seq));
    dispatch(thunkGetComment(postSeq, 1));
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values }) => (
          <Form className="comment-form">
            <AutoTextArea placeholder={placeholder} lineHeight={lineHeight} />
            <button type={'submit'} className="btn btn-primary" disabled={!values.contents.trim().length}>
              댓글달기
            </button>
          </Form>
        )}
      </Formik>

      <style jsx>{`
        .comment-form {
          margin: 20px;
        }
        .comment-form > textarea.form-control {
          min-height: ${minHeight}px;
          line-height: ${lineHeight}px;
          border-radius: 0.5rem;
          resize: none;
        }
        .comment-form > button.btn {
          float: right;
          margin-bottom: 0;
          margin-top: 16px;
          background-color: #3b5999;
          color: #fffffe;
          border-color: unset;
          font-weight: 800;
        }
      `}</style>
    </>
  );
};

export default CommentForm;
