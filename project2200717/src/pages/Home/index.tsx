import React, { FC, useState } from 'react';
import PostForm from './PostForm';
import { Home } from 'Types';
import { useSelector } from 'react-redux';
import { RootReducer, PostState } from 'data/rootTypes';
import Post from './Post';

const Home: FC<Home> = () => {
  const posts: PostState = useSelector((state: RootReducer) => state.posts);
  const postList = posts.byId.map((post) => <Post key={post.seq} post={post} />);

  return (
    <div className="posts container">
      <PostForm />
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
