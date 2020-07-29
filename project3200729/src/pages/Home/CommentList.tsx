import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Comment from './Comment';
import * as selectors from '@/data/rootSelectors';
import { CommentType } from '/data/comments/reducers';
import { thunkGetComment } from '/data/comments/actions';

export interface IProps {
  postSeq: number;
}

const CommentList: FC<IProps> = ({ postSeq }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkGetComment(postSeq, 1));
  }, []);

  const comments: CommentType[] = useSelector(selectors.comments.getCommentsByPost(postSeq));

  return (
    <ul className="comment-list">
      {comments.map((comment) => (
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
