import React, { useState, FC, memo } from 'react';
import { UploadComment, TextAreaEvent, FormEventType } from 'Types';

interface IProps {
  uploadComment: UploadComment;
  postSeq: number;
}

const FormHomeCommentComponent: FC<IProps> = ({ uploadComment, postSeq }) => {
  const [text, setText] = useState('');
  const onChange: TextAreaEvent = (event) => {
    event.preventDefault();
    const onChangeText = event.currentTarget.value;
    setText(onChangeText);
  };
  const onSubmit: FormEventType = (event) => {
    event.preventDefault();
    if (text.length < 5) {
      alert('글자수가 너무 적습니다(5자 이상 써주세요)');
      return;
    }
    uploadComment(postSeq, text);
  };
  return (
    <>
      <form onSubmit={onSubmit} className="comment-form">
        <textarea
          onChange={onChange}
          className="form-control input-lg"
          placeholder="댓글을 입력하세요..."
          spellCheck="false"></textarea>
        <button type="submit" className="btn btn-primary">
          댓글달기
        </button>
      </form>
      <style jsx>{`
        .comment-form {
          margin: 20px;
        }
        .comment-form > textarea.form-control {
          min-height: 20px;
          line-height: 20px;
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

export default memo(FormHomeCommentComponent);
