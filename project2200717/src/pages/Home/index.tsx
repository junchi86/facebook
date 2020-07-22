import React, { useEffect, useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';
import { useParams } from 'react-router-dom';
import { DummyUsers } from 'data/Dummy';
import { useSelector } from 'react-redux';
import { RootReducer, PostEntities, PostTypes } from 'data/rootTypes';

type Params = {
  seq: string;
};

const Home = () => {
  const params: Params = useParams();
  const posts: PostEntities = useSelector((state: RootReducer) => state.posts);
  const initialState: PostTypes[] = [];
  const [state, setState] = useState(initialState);
  useEffect(() => {
    const paramsSeq = params.seq;
    if (paramsSeq) {
      const user = DummyUsers.byId[Number(paramsSeq)];
      const paramPosts = user.postList;
      const beforeList = [...paramPosts];
      const list = beforeList.map((i) => posts.byId[i]);
      return setState(list);
    }
    const beforeList = [...posts.allId];
    const list = beforeList.map((i) => posts.byId[i]);
    return setState(list);
  }, [params, posts]);
  const postList = state.map((post) => <Post key={post.seq} post={post} />);
  return (
    <div className="posts container">
      <PostForm postSeq={posts.allId.length} />
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
