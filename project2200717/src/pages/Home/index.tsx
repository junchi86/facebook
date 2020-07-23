import React, { useEffect, useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';
import { useSelector } from 'react-redux';
import { RootReducer } from 'data/rootTypes';

import { userSelector, postSelector } from 'data/rootSelectors';

type Params = {
  seq: string;
};

const Home = () => {
  const para: any = useSelector((state: RootReducer) => state.router);

  //console.log(para.location.pathname.split('/')[2]);
  //const params: Params = useParams();
  const params = para.location.pathname.split('/')[2];
  const posts = postSelector.getEntirePosts();
  const initialState: number[] = [];
  const [state, setState] = useState(initialState);
  useEffect(() => {
    //const paramsSeq = params.seq;
    const paramsSeq = params;

    if (paramsSeq) {
      const user = userSelector.getUserInUserSelector(Number(paramsSeq));
      const list = user.postList;
      return setState(list);
    }

    const list = posts.allId;
    return setState(list);
  }, [params, posts]);
  const postList = state.map((i) => <Post key={i} postSeq={i} />);
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
