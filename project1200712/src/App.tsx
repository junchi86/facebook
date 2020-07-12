import React, { useState } from 'react';
import Router from './Router';
import { userList, PostList } from './Dummy';
import { State } from './Types';

const App: React.FunctionComponent = () => {
  const initialState: State = {
    user: {},
    posts: PostList,
  };
  const [state, setState] = useState(initialState);

  const login = (logUser: { email: string; pass: string }): void => {
    try {
      const emailFilter = userList.filter((user) => user.user.email === logUser.email);
      if (emailFilter.length === 1) {
        const passFilter = userList.filter((user) => user.user.password === logUser.pass);
        setState((prev) => ({ ...prev, user: passFilter[0].user }));
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };
  const logout = (e: React.SyntheticEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setState((prev) => ({ ...prev, user: {} }));
  };

  const uploadPost = (text: string): void => {
    try {
      const copyState = { ...state };
      const user = copyState.user;
      const post = {
        seq: copyState.posts.length,
        writer: {
          seq: user.seq,
          name: user.name,
          profileImageUrl: user.profileImageUrl,
        },
        contents: text,
        createAt: String(new Date()),
        likes: 0,
        comments: 0,
        likesOfMe: false,
        commentList: [],
      };
      const mergeState = { ...copyState, posts: [...copyState.posts, post] };
      setState({ ...state, ...mergeState });
    } catch (error) {
      console.log(error);
    }
  };

  const uploadComment = (seq: number, text: string): void => {
    try {
      const copyState = { ...state };
      const user = { ...copyState.user };
      const post = copyState.posts[seq];
      const commentedPost = {
        seq: post.commentList.length,
        writer: {
          seq: user.seq,
          name: user.name,
          profileImageUrl:
            'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
        },
        contents: text,
        createAt: String(new Date()),
      };
      post.commentList = [...post.commentList, commentedPost];
      post.comments = post.commentList.length;
      setState({ ...state, ...copyState });
    } catch (error) {
      console.log(error);
    }
  };
  const upLikes = (seq: number): void => {
    const user = state.user;
    if (Object.keys(user).length > 0) {
      const copyState = { ...state };
      if (!copyState.posts[seq].likesOfMe) {
        copyState.posts[seq].likes = copyState.posts[seq].likes + 1;
        copyState.posts[seq].likesOfMe = true;
        return setState((prev) => ({ ...prev, copyState }));
      } else {
        copyState.posts[seq].likes = copyState.posts[seq].likes - 1;
        copyState.posts[seq].likesOfMe = false;
        return setState((prev) => ({ ...prev, copyState }));
      }
    }
  };
  return (
    <>
      <Router
        state={state}
        logout={logout}
        login={login}
        uploadPost={uploadPost}
        uploadComment={uploadComment}
        upLikes={upLikes}
      />
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          font-family: Dotum, '맑은 고딕', 'roboto', 'Helvetica Neue', Helvetica, Arial, '맑은 고딕', malgun gothic,
            '돋움', Dotum, sans-serif;
          color: #202b3d;
          background-color: #e9eaed;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;
        }
        body {
          padding: 100px 0;
        }
        .container {
          max-width: 600px;
        }
      `}</style>
    </>
  );
};

export default App;
