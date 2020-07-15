import React, { useState, FC } from 'react';
import { userList, postList } from 'Dummy';
import { RootState, LogUser, Logout, UploadPost, UploadComment, UpLikes } from 'Types';
import RouterComponent from 'components/Router/RouterComponent';

const App: FC = () => {
  const initialState: RootState = {
    user: { seq: null, name: '', profileImageUrl: '' },
    posts: postList,
  };
  const [state, setState] = useState(initialState);

  const login = (logUser: LogUser): void => {
    try {
      const isEmailExist = userList.filter((user) => user.user.email === logUser.email);
      if (isEmailExist.length === 1) {
        const matchedPassword = userList.filter((user) => user.user.password === logUser.password);
        setState({ ...state, user: matchedPassword[0].user });
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };
  const logout: Logout = (e) => {
    e.preventDefault();
    const user = initialState.user;
    setState({ ...state, user });
  };

  const uploadPost: UploadPost = (text) => {
    try {
      const user = state.user;
      const posts = state.posts;
      const post = {
        seq: state.posts.length,
        writer: {
          seq: user.seq,
          name: user.name,
          profileImageUrl: user.profileImageUrl,
        },
        contents: text,
        createAt: new Date().toLocaleDateString(),
        likes: 0,
        comments: 0,
        likesOfMe: [],
        commentList: [],
      };
      posts.push(post);
      setState({ ...state, posts });
    } catch (error) {
      console.log(error);
    }
  };

  const uploadComment: UploadComment = (seq, text) => {
    try {
      const user = state.user;
      const posts = state.posts;
      const post = posts[seq];
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
      setState({ ...state, posts });
    } catch (error) {
      console.log(error);
    }
  };
  const upLikes: UpLikes = (seq) => {
    const user = state.user;
    if (user.seq === null) {
      return;
    }
    const posts = state.posts;
    const post = posts[seq];
    const likesOfMe = post.likesOfMe;
    const lengthOfLikesOfMe = likesOfMe.filter((seq) => seq === user.seq).length;

    if (lengthOfLikesOfMe === 0) {
      post.likes = post.likes + 1;
      likesOfMe.push(user.seq);
      return setState({ ...state, posts });
    } else {
      post.likes = post.likes - 1;
      const index = likesOfMe.indexOf(user.seq);
      likesOfMe.splice(index, 1);
      return setState({ ...state, posts });
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
