import { CommentAction } from './actions';
import * as ActionTypes from '@/data/rootActionTypes';
import { User } from '../users/reducers';

export type CommentType = { seq: number; contents: string; writer: User; createAt: number };

export type CommentsType = CommentType[];

export type CommentState = { [postId: number]: CommentsType };

export type CommentReducer = (state: CommentState, action: CommentAction) => CommentState | {};

const comments: CommentReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.GET_COMMENTS:
      return { ...state, [action.postId]: action.comments };
    case ActionTypes.ADD_COMMENT: {
      const previewComments = state[action.postId] ? state[action.postId] : [];
      const comments = [
        ...previewComments,
        {
          seq: previewComments.length,
          contents: action.contents,
          writer: action.writer,
          createAt: action.createAt,
        },
      ];
      return {
        ...state,
        [action.postId]: comments,
      };
    }
    default:
      return state;
  }
};

export default comments;
