import React, { FC } from 'react';
import moment from 'moment';
import { CommentTypes } from 'data/rootTypes';
import { Link } from 'react-router-dom';
import { userSelector } from 'data/rootSelectors';

interface IProps {
  comment: CommentTypes;
}

const Comment: FC<IProps> = ({ comment }) => {
  const { createdAt, writer, contents } = comment;
  const user = userSelector.getUserInUserSelector(writer);
  const { name } = user;
  const datetime = moment(createdAt).fromNow();

  return (
    <li className="comment">
      <div className="comment-info">
        <Link to={'/u/' + user.seq}>
          <h6 className="comment-writer">{name}</h6>
        </Link>
        <div className="comment-datetime">{datetime}</div>
      </div>
      <p className="comment-text">{contents}</p>
      <style jsx>{`
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
    </li>
  );
};

export default Comment;
