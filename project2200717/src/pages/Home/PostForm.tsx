import React, { useState, FC, memo } from 'react';
import { TFormEvent, TTextAreaEvent } from 'Types';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from 'data/posts/actions';
import userSelecter from 'data/users/selectors';
import { RootReducer } from 'data/rootTypes';

interface IProps {
  minHeight?: number;
  lineHeight?: number;
  placeholder?: string;
}

interface IState {
  contents: string;
}
const initialState: IState = { contents: '' };

const PostForm: FC<IProps> = ({ minHeight = 100, lineHeight = 20, placeholder = '무슨 생각을 하고 계신가요?' }) => {
  const [state, setState] = useState(initialState);
  const { contents } = state;
  const dispatch = useDispatch();
  const user = useSelector((state: RootReducer) => state.user);
  const handleFormSubmit: TFormEvent = (e) => {
    e.preventDefault();
    dispatch(addPost(contents, user));
    setState({
      contents: '',
    });
  };

  const handelFormChange: TTextAreaEvent = (e) =>
    setState({
      contents: e.currentTarget.value,
    });
  return (
    <form className="write-form" onSubmit={handleFormSubmit}>
      <textarea
        className="form-control input-lg"
        placeholder={placeholder}
        spellCheck="false"
        value={contents}
        onChange={handelFormChange}
      />
      <button type="submit" className="btn btn-primary" disabled={!contents.trim().length}>
        공유하기
      </button>

      <style jsx global>{`
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
    </form>
  );
};

export default memo(PostForm);
