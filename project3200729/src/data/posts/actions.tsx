import * as ActionTypes from '@/data/rootActionTypes';
import { ADD_POST, GET_POSTS, LIKE_POST } from './actionTypes';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { getPostsApi, likePostApi, writePostApi } from '/ajax/useAxios';
import { IPostState, PostType } from './reducers';

//writePostAction

export interface writePostAction extends Action<typeof ADD_POST> {
  ids: number;
  post: PostType;
}

export const thunkWritePost = (
  contents: string
): ThunkAction<void, number[], unknown, Action<typeof ADD_POST>> => async (dispatch) => {
  const data = await writePostApi(contents);
  if (data.status !== 200) return alert('서버 에러입니다.');
  const post = data.data.response;
  const ids = post.seq;
  dispatch(writePost(ids, post));
};

export const writePost: ActionCreator<writePostAction> = (ids, post) => ({
  type: ActionTypes.ADD_POST,
  ids,
  post,
});

//getPosts
export interface getPostAction extends Action<typeof GET_POSTS> {
  ids: number[];
  postEntities: IPostState;
}

export const thunkGetPost = (userId: number): ThunkAction<void, number[], unknown, Action<typeof GET_POSTS>> => async (
  dispatch
) => {
  const data = await getPostsApi(userId);
  if (data.status !== 200) return alert('서버 에러입니다.');
  const ids = Object.keys(data.data.response);
  const postEntities = data.data.response;
  dispatch(getPosts(ids, postEntities));
};

export const getPosts: ActionCreator<getPostAction> = (ids, postEntities) => ({
  type: ActionTypes.GET_POSTS,
  ids,
  postEntities,
});
//likePost

export interface likePostAction extends Action<typeof LIKE_POST> {
  post: PostType;
}

export const likePost: ActionCreator<likePostAction> = (post: PostType) => ({
  type: ActionTypes.LIKE_POST,
  post,
});

export const thunkLikePost = (
  userId: number,
  postId: number
): ThunkAction<void, number, unknown, Action<typeof LIKE_POST>> => async (dispatch) => {
  const data = await likePostApi(userId, postId);
  if (data.status !== 200) return alert('서버 에러입니다.');
  const post = data.data.response;
  dispatch(likePost(post));
};

//action integration

export type PostAction = ReturnType<typeof writePost> | ReturnType<typeof getPosts> | ReturnType<typeof likePost>;
