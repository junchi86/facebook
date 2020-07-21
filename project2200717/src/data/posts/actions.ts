import { ADD_POST, LIKE_POST } from './actionTypes';
import { UserTypes } from 'data/rootTypes';
import { addComment } from 'data/comments/actions';

export const addPost = (contents: string, user: UserTypes) => ({
  type: ADD_POST,
  payload: { contents, user },
});

export const likePost = (postSeq: number) => ({
  type: LIKE_POST,
  payload: postSeq,
});
export type PostAction = ReturnType<typeof addPost> | ReturnType<typeof likePost>;
