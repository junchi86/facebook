import React from 'react';
import HomePresenter from './HomePresenter';
import { State, UploadPost, UploadComment, UpLikes } from '../../Types';

interface IProps {
  state: State;
  uploadPost: UploadPost;
  uploadComment: UploadComment;
  upLikes: UpLikes;
}

const HomeContainer: React.FunctionComponent<IProps> = ({ state, uploadPost, uploadComment, upLikes }) => {
  return <HomePresenter state={state} uploadPost={uploadPost} uploadComment={uploadComment} upLikes={upLikes} />;
};

export default HomeContainer;
