import React, { FC } from 'react';
import HomePresenter from './HomePresenter';
import { UploadPost, UploadComment, UpLikes, RootState } from 'Types';

interface IProps {
  state: RootState;
  uploadPost: UploadPost;
  uploadComment: UploadComment;
  upLikes: UpLikes;
}

const HomeContainer: FC<IProps> = ({ state, uploadPost, uploadComment, upLikes }) => {
  return <HomePresenter state={state} uploadPost={uploadPost} uploadComment={uploadComment} upLikes={upLikes} />;
};

export default HomeContainer;
