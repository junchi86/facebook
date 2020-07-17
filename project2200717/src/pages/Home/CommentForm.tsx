import React, { Component, useState, FC } from 'react';
import { AddComment, TFormEvent, TTextAreaEvent } from 'Types';

interface IProps {
  postSeq: number;
  minHeight?: number;
  lineHeight?: number;
  placeholder?: string;
  onCommentSubmit: AddComment;
}

interface IState {
  contents: string;
}

const initialState: IState = { contents: '' };

const CommentForm: FC<IProps> = ({
  postSeq,
  onCommentSubmit,
  minHeight = 20,
  lineHeight = 20,
  placeholder = '댓글을 입력하세요...',
}) => {
  const [state, setState] = useState(initialState);
  const { contents } = state;
  const handleSubmit: TFormEvent = (e) => {
    e.preventDefault();
    onCommentSubmit(postSeq, state.contents);
    setState({ contents: '' });
  };

  const handelFormChange: TTextAreaEvent = (e) =>
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

export default CommentForm;
