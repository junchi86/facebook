import * as ActionTypes from '@/data/rootActionTypes';
import { UserAction } from './actions';

export type User = {
  seq: number;
  name: string;
  email: string;
  profileImageUrl: string;
};

export type UserReducer = (state: User | null, action: UserAction) => User | null;

const user: UserReducer = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.SET_AUTH:
      return action.user;

    case ActionTypes.RESET_AUTH:
      return null;

    case ActionTypes.GET_USER_ME:
      return action.user;

    default:
      return state;
  }
};

export default user;
