import React from 'react';
import { CommentList } from '../../Types';

interface IProps {
  commentList: CommentList;
  seq: number;
}

const CardComment: React.FunctionComponent<IProps> = ({ commentList }) => {
  return (
    <>
      <ul className="comment-list">
        {commentList.length > 0
          ? commentList.map((comment, i) => {
              return (
                <li key={i} className="comment">
                  <div className="comment-info">
                    <h6 className="comment-writer">{comment.writer.name}</h6>
                    <div className="comment-datetime">{comment.createAt}</div>
                  </div>
                  <p className="comment-text">{comment.contents}</p>
                </li>
              );
            })
          : null}
      </ul>
      <style jsx>{`
        ul.comment-list {
          padding: 0;
          list-style: none;
        }

        li.comment {
          padding: 20px 40px 24px;
          border-bottom: 1px solid #e6ecf5;
          background-color: #fafbfd;
          position: relative;
        }
        li.comment:first-child {
          border-top: 1px solid #e6ecf5;
        }
        li.comment .comment-text {
          padding-top: 20px;
        }
      `}</style>
    </>
  );
};

export default CardComment;
