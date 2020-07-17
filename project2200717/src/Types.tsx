import { Component, FC, SyntheticEvent, FormEvent } from 'react';

export type User = {
  seq: number;
  name: string;
  profileImageUrl: string;
};
export type TComment = {
  seq: number;
  createdAt: Date;
  writer: User;
  contents: string;
};
export type Post = {
  seq: number;
  writer: User;
  contents: string;
  createdAt: Date;
  likes: number;
  comments: number;
  likesOfMe: boolean;
  commentList: TComment[];
};

export type RootState = {
  user: User | undefined;
  posts: Post[];
};

//함수
export type LogOut = () => void;
export type AddComment = (postSeq: number, contents: string) => void;
export type AddPost = (contents: string) => void;
export type LikePost = (postSeq: number) => void;
export type OnClickAnchor = (e: SyntheticEvent<HTMLAnchorElement>) => void;
export type TFormEvent = (e: FormEvent<HTMLFormElement>) => void;
export type TInputEvent = (e: SyntheticEvent<HTMLInputElement>) => void;
export type TTextAreaEvent = (e: SyntheticEvent<HTMLTextAreaElement>) => void;
export type TButtonEvent = (e: SyntheticEvent<HTMLButtonElement>) => void;

//pages
export type Home = {
  posts: Post[];
  onCommentSubmit: AddComment;
  onPostSubmit: AddPost;
  onLikeClicked: LikePost;
};

//layout
export type DefaultLayout = {
  path: string;
  posts: Post[];
  logOut: LogOut;
  user: User | undefined;
  onCommentSubmit: AddComment;
  onPostSubmit: AddPost;
  onLikeClicked: LikePost;
  component: FC<any>;
};
export type PublicLayout = {
  path: string;
  component: FC<any>;
};
