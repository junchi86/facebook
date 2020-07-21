import React, { FC, useEffect, useState } from 'react';
import PostForm from './PostForm';
import { useSelector } from 'react-redux';
import { RootReducer, PostState, PostTypes } from 'data/rootTypes';
import Post from './Post';
import { useParams } from 'react-router-dom';

type Params = {
  seq: string;
};

type PostList = {
  key: number;
  post: PostTypes;
};

const Home = () => {
  const params: Params = useParams();
  const paramsSeq = Number(params.seq);
  const posts: PostState = useSelector((state: RootReducer) => state.posts);
  const initialState: PostTypes[] = [];
  const [state, setState] = useState(initialState);
  useEffect(() => {
    if (!paramsSeq) {
      const list = [...posts.byId];
      return setState([...list]);
    }
    const list = posts.byId.filter((i) => i.writer === paramsSeq);
    return setState(list);
  }, [params]);
  const postList = state.map((post) => <Post key={post.seq} post={post} />);
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
