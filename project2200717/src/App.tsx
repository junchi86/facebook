import React, { useState, FC } from 'react';
import Home from './pages/Home';
import { BrowserRouter, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import PublicLayout from './layouts/PublicLayout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { RootState, LikePost, AddPost, AddComment, LogOut } from 'Types';

const initialState: RootState = {
  user: {
    seq: 0,
    name: 'harry',
    profileImageUrl:
      'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
  },
  posts: [],
};

const App: FC = () => {
  //스테이트 선언 - 리덕스로 올릴 것.
  const [state, setState] = useState(initialState);
  const { user, posts } = state;
  //함수 선언 - 디스패치로 리팩토링 하기.
  const handleLogOut: LogOut = () => setState({ ...state, user: undefined });
  const handleAddComment: AddComment = (postSeq, contents) => {
    if (user === undefined) return;
    const newPosts = [...posts];
    const idx = newPosts.findIndex((v) => v.seq === postSeq);
    const post = newPosts[idx];
    post.commentList = [
      {
        seq: post.commentList.length,
        createdAt: new Date(),
        writer: user,
        contents,
      },
      ...post.commentList,
    ];
    setState({ ...state, posts: newPosts });
  };

  const handleAddPost: AddPost = (contents) => {
    if (user === undefined) return;
    setState({
      ...state,
      posts: [
        {
          seq: posts.length,
          writer: user,
          contents,
          createdAt: new Date(),
          likes: 0,
          comments: 0,
          likesOfMe: false,
          commentList: [],
        },
        ...posts,
      ],
    });
  };

  const handleLikePost: LikePost = (postSeq) => {
    const newPosts = state.posts.splice(0);
    const idx = newPosts.findIndex((v) => v.seq === postSeq);
    const post = newPosts[idx];
    if (post.likesOfMe === false) post.likes += 1;
    post.likesOfMe = true;
    setState({ ...state, posts: newPosts });
  };
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PublicLayout path="/login" component={Login} />
          <PublicLayout path="/signup" component={SignUp} />
          <DefaultLayout
            path="/"
            posts={posts}
            logOut={handleLogOut}
            user={user}
            onCommentSubmit={handleAddComment}
            onPostSubmit={handleAddPost}
            onLikeClicked={handleLikePost}
            component={Home}
          />
        </Switch>
      </BrowserRouter>
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
      `}</style>
    </>
  );
};

export default App;
