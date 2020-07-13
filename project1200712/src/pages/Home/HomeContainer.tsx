import React, { FC } from 'react';
import HomePresenter from './HomePresenter';
import { UploadPost, UploadComment, UpLikes, State } from 'Types';

interface IProps {
  state: State;
  uploadPost: UploadPost;
  uploadComment: UploadComment;
  upLikes: UpLikes;
}

const HomeContainer: FC<IProps> = ({ state, uploadPost, uploadComment, upLikes }) => {
  return <HomePresenter state={state} uploadPost={uploadPost} uploadComment={uploadComment} upLikes={upLikes} />;
};

export default HomeContainer;
