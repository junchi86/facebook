import React, { useState, FC, memo } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from 'data/comments/actions';

interface IProps {
  postSeq: number;
  userSeq: number;
  minHeight?: number;
  lineHeight?: number;
  placeholder?: string;
}

interface IState {
  contents: string;
}

const initialState: IState = { contents: '' };

const CommentForm: FC<IProps> = ({
  userSeq,
  postSeq,
  minHeight = 20,
  lineHeight = 20,
  placeholder = '댓글을 입력하세요...',
}) => {
  const [state, setState] = useState(initialState);
  const { contents } = state;
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addComment(contents, postSeq, userSeq));
    setState({ contents: '' });
  };

  const handelFormChange = (e: React.SyntheticEvent<HTMLTextAreaElement>): void =>
    setState({
      contents: e.currentTarget.value,
    });
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <textarea
        className="form-control input-lg"
        placeholder={placeholder}
        spellCheck="false"
        value={contents}
        onChange={handelFormChange}
      />
      <button type="submit" className="btn btn-primary" disabled={!contents.trim().length}>
        댓글달기
      </button>

      <style jsx global>{`
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
    </form>
  );
};

export default memo(CommentForm);
