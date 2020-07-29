import * as ActionTypes from '@/data/rootActionTypes';
import { Action, ActionCreator } from 'redux';
import { CommentState } from './reducers';
import { GET_COMMENTS, ADD_COMMENT } from './actionTypes';
import { User } from '../users/reducers';
import { ThunkAction } from 'redux-thunk';
import { writeCommentApi, getCommentApi } from '/ajax/useAxios';

interface IGetComments extends Action<typeof GET_COMMENTS> {
  postId: number;
  comments: CommentState;
}
export const thunkGetComment = (
  postId: number,
  userId: number
): ThunkAction<void, number[], unknown, Action<typeof GET_COMMENTS>> => async (dispatch) => {
  const data = await getCommentApi(userId, postId);
  if (data.status !== 200) return alert('서버 에러입니다.');
  const comments = data.data.response;
  dispatch(getComments(postId, comments));
};
export const getComments: ActionCreator<IGetComments> = (postId: number, comments: CommentState) => {
  return {
    type: ActionTypes.GET_COMMENTS,
    postId,
    comments,
  };
};

//writeComment
interface IAddComments extends Action<typeof ADD_COMMENT> {
  postId: number;
  contents: string;
  writer: User;
  createAt: number;
}

export const thunkWriteComment = (
  postId: number,
  contents: string,
  userId: number
): ThunkAction<void, number[], unknown, Action<typeof ADD_COMMENT>> => async (dispatch) => {
  const data = await writeCommentApi(postId, contents, userId);
  if (data.status !== 200) return alert('서버 에러입니다.');
  const comment = data.data.response;
  dispatch(writeComment(comment.seq, comment.contents, comment.writer, comment.createAt));
};

export const writeComment: ActionCreator<IAddComments> = (
  postId: number,
  contents: string,
  writer: User,
  createAt: number
) => {
  return {
    type: ActionTypes.ADD_COMMENT,
    postId,
    contents,
    writer,
    createAt,
  };
};

export type CommentAction = ReturnType<typeof getComments> | ReturnType<typeof writeComment>;
