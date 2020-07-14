import React, { FC } from 'react';
import PostContent from './PostContent';
import PostComment from './PostComment';
import { State, UploadComment, UpLikes } from 'Types';
import FormHomeCommentComponent from 'components/Form/FormHomeCommentComponent';

interface IProps {
  state: State;
  uploadComment: UploadComment;
  upLikes: UpLikes;
}

const PostContainer: FC<IProps> = ({ state, uploadComment, upLikes }) => {
  const copyPosts = [...state.posts];
  const sortedPosts = copyPosts.sort((a, b) => b.seq - a.seq);
  return (
    <>
      {sortedPosts.length > 0 &&
        sortedPosts.map((post) => (
          <div key={post.seq} className="card">
            <PostContent post={post} upLikes={upLikes} />
            <PostComment commentList={post.commentList} />
            {state.user.seq !== null && <FormHomeCommentComponent postSeq={post.seq} uploadComment={uploadComment} />}
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

export default PostContainer;
