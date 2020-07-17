import React, { FC } from 'react';
import { RootState, UploadPost, UploadComment, UpLikes } from 'Types';
import FormHomePostComponent from 'components/Form/FormHomePostComponent';
import PostContainer from 'components/Post/PostContainer';

interface IProps {
  state: RootState;
  uploadPost: UploadPost;
  uploadComment: UploadComment;
  upLikes: UpLikes;
}

const HomePresenter: FC<IProps> = ({ state, uploadComment, upLikes, uploadPost }) => {
  return (
    <div className="posts container">
      {state.user && <FormHomePostComponent uploadPost={uploadPost} />}
      <PostContainer state={state} uploadComment={uploadComment} upLikes={upLikes} />
    </div>
  );
};

export default HomePresenter;
