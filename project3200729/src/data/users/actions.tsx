import * as ActionTypes from '@/data/rootActionTypes';
import { Action, ActionCreator } from 'redux';
import { RESET_AUTH, SET_AUTH, GET_USER_ME } from './actionTypes';
import { User } from './reducers';
import { ThunkAction } from 'redux-thunk';
import { getMeApi } from '/ajax/useAxios';

//logout

export const logout: ActionCreator<Action<typeof RESET_AUTH>> = () => ({ type: ActionTypes.RESET_AUTH });

//login

export interface loginAction extends Action<typeof SET_AUTH> {
  user: User;
}

export const login: ActionCreator<loginAction> = (user: User) => ({ type: ActionTypes.SET_AUTH, user });

//getUserMe

export interface getUserMeAction extends Action<typeof GET_USER_ME> {
  user: User;
}

export const getMe: ActionCreator<getUserMeAction> = (user) => ({ type: ActionTypes.GET_USER_ME, user });

export const thunkGetMe = (): ThunkAction<void, number[], unknown, Action<typeof GET_USER_ME>> => async (dispatch) => {
  const data = await getMeApi();
  if (data.status !== 200) return alert('서버 에러입니다.');
  const user = {
    seq: data.data.response.seq,
    name: data.data.response.name,
    email: data.data.response.email.address,
    profileImageUrl: '',
  };
  dispatch(getMe(user));
};

//Type integration
export type UserAction = ReturnType<typeof logout> | ReturnType<typeof login> | ReturnType<typeof getMe>;
