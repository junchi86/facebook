import React, { useState, FC } from 'react';
import { UploadPost, FormEventType, TextAreaEvent } from 'Types';

interface IProps {
  uploadPost: UploadPost;
}

const FormHomePostComponent: FC<IProps> = ({ uploadPost }) => {
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
    uploadPost(text);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="write-form">
        <textarea
          onChange={onChange}
          value={text}
          className="form-control input-lg"
          placeholder="무슨 생각을 하고 계신가요?"
          spellCheck="false"></textarea>
        <button type="submit" className="btn btn-primary">
          공유하기
        </button>
      </form>
      <style jsx>
        {`
          .write-form > textarea.form-control {
            min-height: 100px;
            line-height: 20px;
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
        `}
      </style>
    </>
  );
};

export default FormHomePostComponent;
