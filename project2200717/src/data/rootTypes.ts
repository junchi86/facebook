import { UserAction } from './users/actions';
import { CommentAction } from './comments/actions';
import { PostAction } from './posts/actions';
import rootReducer from './rootReducers';

//StateTypes
export type UserTypes = {
  seq: number;
  name: string;
  profileImageUrl: string;
  postIds: number[];
  commentIds: number[];
};

export type PostTypes = {
  seq: number;
  writer: number;
  contents: string;
  createdAt: Date;
  likes: number;
  comments: number;
  likesOfMe: boolean;
};
export type CommentTypes = {
  seq: number;
  createdAt: Date;
  writer: number;
  postId: number;
  contents: string;
};

export type UserEntities = {
  byId: UserTypes[];
  allId: number[];
};

export type PostEntities = {
  byId: PostTypes[];
  allId: number[];
};

export type CommentEntities = {
  byId: CommentTypes[];
  allId: number[];
};

//State

export type UserState = UserTypes | null;

export type PostState = PostEntities;

export type CommentState = CommentEntities;

//ReducerTypes

export type UserReducer = (state: UserState, action: UserAction) => UserState;

export type PostReducer = (state: PostEntities, action: PostAction) => PostEntities;

export type CommentReducer = (state: CommentEntities, action: CommentAction) => CommentEntities;

export type RootReducer = ReturnType<typeof rootReducer>;
