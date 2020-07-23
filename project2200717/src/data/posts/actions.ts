import { ADD_POST, LIKE_POST } from './actionTypes';
import { UserTypes } from 'data/rootTypes';
import { ActionCreator, Action } from 'redux';
import { addComment } from 'data/comments/actions';

export interface AddPostAction extends Action<'ADD_POST'> {
  payload: { contents: string; userSeq: number };
}

export interface LikePostAction extends Action<'LIKE_POST'> {
  payload: number;
}

export const addPost: ActionCreator<AddPostAction> = (contents: string, userSeq: number) => ({
  type: ADD_POST,
  payload: { contents, userSeq },
});

export const likePost: ActionCreator<LikePostAction> = (postSeq: number) => ({
  type: LIKE_POST,
  payload: postSeq,
});

export type PostAction = ReturnType<typeof addPost> | ReturnType<typeof likePost> | ReturnType<typeof addComment>;
