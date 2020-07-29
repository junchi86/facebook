import React, { useEffect, useMemo } from 'react';
import Post from './Post';
import PostForm from './PostForm';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '@/data/rootActions';
import * as selectors from '@/data/rootSelectors';
import { PostType } from '/data/posts/reducers';

interface PostState {
  entities: { [id: number]: PostType };
  ids: number[];
}

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.posts.thunkGetPost(1));
  }, []);

  const user = useSelector(selectors.users.getUser);
  const postsState: PostState = useSelector(selectors.posts.getPosts);
  const posts = postsState.ids;
  const postList = useMemo(() => posts.map((seq) => <Post key={seq} post={postsState.entities[seq]} />), [posts]);

  return (
    <div className="posts container">
      {user && <PostForm />}
      {postList ? postList : null}
      <style jsx>{`
        .container {
          max-width: 600px;
        }
      `}</style>
    </div>
  );
};

export default Home;
