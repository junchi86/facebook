import { UserAction } from './users/actions';
import { CommentAction } from './comments/actions';
import { PostAction } from './posts/actions';
import rootReducer from './rootReducers';
import { CombinedState } from 'redux';

//StateTypes
export type UserTypes = {
  seq: number;
  name: string;
  profileImageUrl: string;
  postList: number[];
  commentList: number[];
};

export type PostTypes = {
  seq: number;
  writer: number;
  contents: string;
  createdAt: Date;
  likes: number;
  comments: number;
  commentList: number[];
  likesOfMe: boolean;
};
export type CommentTypes = {
  seq: number;
  createdAt: Date;
  writer: number;
  postId: number;
  contents: string;
};

export type UsersTypes = {
  seq: number;
  name: string;
  profileImageUrl: string;
  postList: number[];
  commentList: number[];
  email: string;
  password: string;
};
export type UserEntities = {
  byId: { [seq: number]: UsersTypes };
  allId: number[];
};

export interface PostEntities {
  byId: { [seq: number]: PostTypes };
  allId: number[];
}

export type CommentEntities = {
  byId: { [seq: number]: CommentTypes };
  allId: number[];
};

//State

export type UserState = UserTypes | null;

//ReducerTypes

export type UserReducer = (state: UserState, action: UserAction) => UserState;

export type PostReducer = (state: PostEntities, action: PostAction) => PostEntities;

export type CommentReducer = (state: CommentEntities, action: CommentAction) => CommentEntities;

interface ICombine {
  user: UserTypes;
  posts: PostEntities;
  comments: CommentEntities;
  router: object;
}

export type RootReducer = CombinedState<ICombine>;
