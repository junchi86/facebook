import * as ActionTypes from '@/data/rootActionTypes';
import { Action, ActionCreator } from 'redux';
import { EMAIL_PASSWORD_SIGN_UP, NAME_FILE_SIGN_UP } from './actionTypes';

//signUpEmailPassword

export interface IEmailPasswordSignUp extends Action<typeof EMAIL_PASSWORD_SIGN_UP> {
  body: { principal: string; credentials: string; file: string; name: string };
}

export const firstSignUp: ActionCreator<IEmailPasswordSignUp> = (
  email: string,
  password: string,
  file: string,
  name: string
) => ({
  type: ActionTypes.EMAIL_PASSWORD_SIGN_UP,
  body: { principal: email, credentials: password, file: file, name: name },
});

//signUpFileName
export interface INameFileSignUp extends Action<typeof NAME_FILE_SIGN_UP> {
  body: { principal: string; credentials: string; file: string; name: string };
}
export const secondSignUp: ActionCreator<INameFileSignUp> = (
  email: string,
  password: string,
  file: string,
  name: string
) => ({
  type: ActionTypes.NAME_FILE_SIGN_UP,
  body: { principal: email, credentials: password, file: file, name: name },
});

//Type integration
export type AuthAction = ReturnType<typeof firstSignUp> | ReturnType<typeof secondSignUp>;
