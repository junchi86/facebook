import React, { useState, FC } from 'react';
import { userList, PostList } from 'Dummy';
import { State, LogUser, Logout, UploadPost, UploadComment, UpLikes } from 'Types';
import RouterComponent from 'components/Router/RouterComponent';

const App: FC = () => {
  const initialState: State = {
    user: { seq: null, name: '', profileImageUrl: '' },
    posts: PostList,
  };
  const [state, setState] = useState(initialState);

  const login = (logUser: LogUser): void => {
    try {
      const emailFilter = userList.filter((user) => user.user.email === logUser.email);
      if (emailFilter.length === 1) {
        const passFilter = userList.filter((user) => user.user.password === logUser.password);
        setState((prev) => ({ ...prev, user: passFilter[0].user }));
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };
  const logout: Logout = (e) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, user: { seq: null, name: '', profileImageUrl: '' } }));
  };

  const uploadPost: UploadPost = (text) => {
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
        createAt: new Date().toLocaleDateString(),
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

  const uploadComment: UploadComment = (seq, text) => {
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
        createAt: new Date().toLocaleDateString(),
      };
      post.commentList = [...post.commentList, commentedPost];
      post.comments = post.commentList.length;
      setState({ ...state, ...copyState });
    } catch (error) {
      console.log(error);
    }
  };
  const upLikes: UpLikes = (seq) => {
    const user = state.user;
    if (user.seq !== null) {
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
      <RouterComponent
        state={state}
        logout={logout}
        login={login}
        uploadPost={uploadPost}
        uploadComment={uploadComment}
        upLikes={upLikes}
      />
      <style global jsx>{`
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
