import React, { FC } from 'react';
import Comment from './Comment';
import { CommentTypes, CommentEntities } from 'data/rootTypes';
import { commentSelector } from 'data/rootSelectors';

interface IProps {
  commentList: number[];
}

const CommentList: FC<IProps> = ({ commentList }) => {
  const comments = commentSelector.getEntireComments().byId;
  return (
    <ul className="comment-list">
      {commentList.length > 0 && commentList.map((i) => <Comment key={comments[i].seq} comment={comments[i]} />)}
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
