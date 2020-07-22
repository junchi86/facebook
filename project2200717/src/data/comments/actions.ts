import { ADD_COMMENT } from './actionTypes';
import { ActionCreator, Action } from 'redux';

export interface AddCommentAction extends Action<'ADD_COMMENT'> {
  payload: { contents: string; postSeq: number; userSeq: number; commentSeq: number };
}

export const addComment: ActionCreator<AddCommentAction> = (
  contents: string,
  postSeq: number,
  userSeq: number,
  commentSeq: number
) => ({
  type: ADD_COMMENT,
  payload: { contents, postSeq, userSeq, commentSeq },
});

export type CommentAction = ReturnType<typeof addComment>;
