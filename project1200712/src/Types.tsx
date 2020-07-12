export type Login = Function;
export type UploadPost = Function;
export type UploadComment = Function;
export type UpLikes = Function;
export type Logout = (event: React.MouseEvent<HTMLAnchorElement>) => void;
export type User = { seq: number; name: string; profileImageUrl: string };
export type Comment = {
  seq: number;
  writer: {
    seq: number;
    name: string;
    profileImageUrl: string;
  };
  contents: string;
  createAt: string;
};
export type CommentList = Comment[];
export type Post = {
  seq: number;
  writer: {
    seq: number;
    name: string;
    profileImageUrl: string;
  };
  contents: string;
  createAt: string;
  likes: number;
  comments: number;
  likesOfMe: boolean;
  commentList: CommentList;
};
export type State = {
  user: User | any;
  posts: Post[];
};
export interface IState {
  state: State;
  login: Login;
  logout: Logout;
  uploadPost: UploadPost;
  uploadComment: UploadComment;
  upLikes: UpLikes;
}
