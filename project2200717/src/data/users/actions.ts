import { SIGNUP, LOGIN, LOGOUT, ADD_POST_TO_USER } from './actionTypes';
import { Action, ActionCreator } from 'redux';

export interface LoginAction extends Action<'LOGIN'> {
  payload: { email: string; password: string };
}
export interface SignUpAction extends Action<'SIGNUP'> {
  payload: { email: string; password: string; name: string };
}

export interface AddPostUser extends Action<'ADD_POST_TO_USER'> {
  payload: { userSeq: number; postSeq: number };
}

export const logout: ActionCreator<Action<'LOGOUT'>> = () => ({
  type: LOGOUT,
});

export const login: ActionCreator<LoginAction> = (email: string, password: string) => ({
  type: LOGIN,
  payload: { email, password },
});

export const signUp: ActionCreator<SignUpAction> = (email: string, password: string, name: string) => ({
  type: SIGNUP,
  payload: { email, password, name },
});

export const addPostUser: ActionCreator<AddPostUser> = (userSeq: number, postSeq: number) => ({
  type: ADD_POST_TO_USER,
  payload: { userSeq, postSeq },
});

export type UserAction =
  | ReturnType<typeof logout>
  | ReturnType<typeof login>
  | ReturnType<typeof signUp>
  | ReturnType<typeof addPostUser>;
