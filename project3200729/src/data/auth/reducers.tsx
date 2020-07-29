import * as ActionTypes from '@/data/rootActionTypes';
import { AuthAction } from './actions';

export type AuthState = {
  principal: string;
  credentials: string;
  file: string;
  name: string;
};

const initialState = {
  principal: '',
  credentials: '',
  file: '',
  name: '',
};
export type AuthReducer = (state: AuthState, action: AuthAction) => AuthState;

const auth: AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.EMAIL_PASSWORD_SIGN_UP:
      const { principal, credentials } = action.body;
      return { ...state, principal, credentials };
    case ActionTypes.NAME_FILE_SIGN_UP:
      const { file, name } = action.body;
      return { ...state, file, name };
    default:
      return state;
  }
};

export default auth;
