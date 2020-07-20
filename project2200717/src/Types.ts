import { FC, SyntheticEvent, FormEvent } from 'react';
import { PostTypes } from 'data/rootTypes';

//함수

export type OnClickAnchor = (e: SyntheticEvent<HTMLAnchorElement>) => void;
export type TFormEvent = (e: FormEvent<HTMLFormElement>) => void;
export type TInputEvent = (e: SyntheticEvent<HTMLInputElement>) => void;
export type TTextAreaEvent = (e: SyntheticEvent<HTMLTextAreaElement>) => void;
export type TButtonEvent = (e: SyntheticEvent<HTMLButtonElement>) => void;

//pages
export type Home = {
  posts: PostTypes[];
};

//layout
export type Layout = {
  path: string;
  component: FC<any>;
};
