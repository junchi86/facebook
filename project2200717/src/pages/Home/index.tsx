import React, { FC } from 'react';
import Post from './Post';
import PostForm from './PostForm';
import { Home } from 'Types';

const Home: FC<Home> = ({ posts, onCommentSubmit, onPostSubmit, onLikeClicked }) => {
  console.log(posts);
  const postList = posts.map((post) => (
    <Post key={post.seq} onCommentSubmit={onCommentSubmit} onLikeClicked={onLikeClicked} post={post} />
  ));

  return (
    <div className="posts container">
      <PostForm onPostSubmit={onPostSubmit} />
      {postList}
      <style jsx>{`
        .container {
          max-width: 600px;
        }
      `}</style>
    </div>
  );
};

export default Home;
