import React, { FC } from 'react';
import Comment from './Comment';
import { CommentTypes } from 'data/rootTypes';

interface IProps {
  commentList: CommentTypes[];
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
