import React from 'react';
import CardBody from './CardBody';
import CardComment from './CardComment';
import { State, UploadPost, UploadComment, UpLikes } from '../../Types';
import FormHomeCommentComponent from '../Form/FormHomeCommentComponent';

interface IProps {
  state: State;
  uploadPost: UploadPost;
  uploadComment: UploadComment;
  upLikes: UpLikes;
}

const Card: React.FunctionComponent<IProps> = ({ state, uploadPost, uploadComment, upLikes }) => {
  const copyPosts = [...state.posts];
  const sortedPosts = copyPosts.sort((a, b) => {
    return b.seq - a.seq;
  });
  return (
    <>
      {sortedPosts.length > 0 &&
        sortedPosts.map((post) => (
          <div key={post.seq} className="card">
            <CardBody post={post} upLikes={upLikes} />
            <CardComment seq={post.seq} commentList={post.commentList} />
            {Object.keys(state.user).length > 0 && (
              <FormHomeCommentComponent postSeq={post.seq} uploadComment={uploadComment} />
            )}
          </div>
        ))}
      <style jsx>{`
        .card {
          padding: 0;
          margin-top: 50px;
          border: none;
          border-radius: 0.5rem;
        }
      `}</style>
    </>
  );
};

export default Card;
