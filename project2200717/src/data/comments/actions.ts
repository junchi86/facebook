import { ADD_COMMENT } from './actionTypes';

export const addComment = (contents: string, postSeq: number, userSeq: number) => ({
  type: ADD_COMMENT,
  payload: { contents, postSeq, userSeq },
});

export type CommentAction = ReturnType<typeof addComment>;
