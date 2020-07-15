import { SyntheticEvent, MouseEvent, FormEvent } from 'react';

//state 관련 타입
export type RootState = {
  user: User;
  posts: Post[];
};
export type User = {
  seq: number | null;
  name: string;
  profileImageUrl: string;
};
export type Post = {
  seq: number;
  writer: User;
  contents: string;
  createAt: string;
  likes: number;
  comments: number;
  likesOfMe: number[];
  commentList: CommentList;
};
export type CommentList = Comment[];
export type Comment = {
  seq: number;
  writer: User;
  contents: string;
  createAt: string;
};

//함수 관련 타입
export type InputEvent = (event: SyntheticEvent<HTMLInputElement>) => void;
export type ButtonEvent = (event: SyntheticEvent<HTMLButtonElement>) => void;
export type TextAreaEvent = (event: SyntheticEvent<HTMLTextAreaElement>) => void;
export type MouseAnchorEvent = (event: MouseEvent<HTMLAnchorElement>) => void;
export type FormEventType = (event: FormEvent<HTMLFormElement>) => void;

//프롭 관련 함수/객체 타입
export type LogUser = {
  email: string;
  password: string;
};
export type Login = (logUser: LogUser) => void;
export type Logout = MouseAnchorEvent;
export type UploadPost = (text: string) => void;
export type UploadComment = (seq: number, text: string) => void;
export type UpLikes = (seq: number) => void;
