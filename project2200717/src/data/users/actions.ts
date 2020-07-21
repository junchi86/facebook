import { SIGNUP, LOGIN, LOGOUT } from './actionTypes';

export const logout = () => ({
  type: LOGOUT,
});

export const login = (email: string, password: string) => ({
  type: LOGIN,
  payload: { email, password },
});

export const signUp = (email: string, password: string, name: string) => ({
  type: SIGNUP,
  payload: { email, password, name },
});

export type UserAction = ReturnType<typeof logout> | ReturnType<typeof login> | ReturnType<typeof signUp>;
