import { combineReducers, CombinedState } from 'redux';
import * as ActionTypes from '@/data/rootActionTypes';
import { User } from '../users/reducers';
import { PostAction } from './actions';

export type PostType = {
  seq: number;
  writer: User;
  contents: string;
  createAt: number;
  likes: number;
  comments: number;
  likesOfMe: boolean;
};
export type PostEntities = { [id: number]: PostType };

const INITIAL_ENTITIES_STATE = {};

export type PostReducer = (state: PostEntities, action: PostAction) => PostEntities;

const entities: PostReducer = (state = INITIAL_ENTITIES_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_POSTS:
      const { postEntities } = action;
      return { ...postEntities };
    case ActionTypes.ADD_POST:
      console.log(action.post);
      const { seq, writer, contents, createAt, likes, comments, likesOfMe } = action.post;
      const post: PostType = {
        seq,
        writer,
        contents,
        createAt,
        likes,
        comments,
        likesOfMe,
      };
      console.log(state);
      return {
        [seq]: post,
        ...state,
      };
      return state;
    case ActionTypes.LIKE_POST: {
      const { seq, writer, contents, createAt, likes, comments, likesOfMe } = action.post;
      const post = {
        seq,
        writer,
        contents,
        createAt,
        likes,
        comments,
        likesOfMe,
      };
      return {
        ...state,
        [seq]: post,
      };
    }
    default:
      return state;
  }
};

export type IdsReducer = (state: number[], action: PostAction) => number[];

const INITIAL_IDS_STATE: [] = [];

const ids: IdsReducer = (state = INITIAL_IDS_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_POSTS:
      const ids = action.ids;
      return [...ids];
    case ActionTypes.ADD_POST:
      const ids2 = action.ids;
      return [ids2, ...state];
    default:
      return state;
  }
};

export default combineReducers({
  entities,
  ids,
});

export type ICombinePost = {
  entities: PostEntities;
  ids: number[];
};
export type IPostState = CombinedState<ICombinePost>;
