import React, { FC } from 'react';
import { State, UploadPost, UploadComment, UpLikes } from 'Types';
import FormHomePostComponent from 'components/Form/FormHomePostComponent';
import Post from 'components/Post/PostContainer';

interface IProps {
  state: State;
  uploadPost: UploadPost;
  uploadComment: UploadComment;
  upLikes: UpLikes;
}

const HomePresenter: FC<IProps> = ({ state, uploadComment, upLikes, uploadPost }) => {
  return (
    <div className="posts container">
      {state.user.seq !== null && <FormHomePostComponent uploadPost={uploadPost} />}
      <Post state={state} uploadComment={uploadComment} upLikes={upLikes} />
    </div>
  );
};

export default HomePresenter;
