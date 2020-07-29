import { IRootState } from '../rootReducer';

export const getComments = (state: IRootState) => state.comments;

export const getCommentsByPost = (postSeq: number) => (state: IRootState) => state.comments[postSeq] || [];

export const getCommentsCount = (postId: number) => (state: IRootState) => {
  const comments = state.comments[postId];
  return comments ? comments.length : 0;
};
