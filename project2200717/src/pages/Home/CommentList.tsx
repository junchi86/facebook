import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import { TComment } from 'Types';

interface IProps {
  commentList: TComment[];
}

const CommentList: FC<IProps> = ({ commentList }) => {
  return (
    <ul className="comment-list">
      {commentList.map((comment) => (
        <Comment key={comment.seq} comment={comment} />
      ))}
      <style jsx global>{`
        ul.comment-list {
          padding: 0;
          list-style: none;
        }
      `}</style>
    </ul>
  );
};

export default CommentList;
