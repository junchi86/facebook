import React from 'react';
import Card from '../../components/Card/Card';
import { State, UploadPost, UploadComment, UpLikes } from '../../Types';
import FormHomePostComponent from '../../components/Form/FormHomePostComponent';

interface IProps {
  state: State;
  uploadPost: UploadPost;
  uploadComment: UploadComment;
  upLikes: UpLikes;
}

const HomePresenter: React.FunctionComponent<IProps> = ({ state, uploadPost, uploadComment, upLikes }) => {
  return (
    <div className="posts container">
      {Object.keys(state.user).length > 0 && <FormHomePostComponent uploadPost={uploadPost} />}
      <Card state={state} uploadPost={uploadPost} uploadComment={uploadComment} upLikes={upLikes} />
    </div>
  );
};

export default HomePresenter;
