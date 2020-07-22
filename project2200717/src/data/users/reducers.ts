import { UserReducer, UserState, UsersTypes, UserTypes } from 'data/rootTypes';
import { DummyUsers, DummyPosts } from 'data/Dummy';
import { LOGOUT, LOGIN, SIGNUP, ADD_POST_USER, ADD_COMMENT_USER } from './actionTypes';
import { ADD_POST } from 'data/posts/actionTypes';
import { ADD_COMMENT } from 'data/comments/actionTypes';

const initialState: UserState = {
  seq: 0,
  name: 'harry',
  profileImageUrl:
    'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
  postList: [5],
  commentList: [5],
};

const reducer: UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return null;
    case LOGIN:
      const isEmail = DummyUsers.allId.filter((i) => DummyUsers.byId[i].email === action.payload.email);
      if (isEmail.length === 0) throw new Error();
      const user: UsersTypes = DummyUsers.byId[isEmail[0]];
      if (user.password !== action.payload.password) throw new Error();
      return user;
    case SIGNUP:
      const isEmail2 = DummyUsers.allId.filter((i) => DummyUsers.byId[i].email === action.payload.email);
      if (isEmail2.length !== 0) return null;
      const user2: UsersTypes = {
        seq: DummyUsers.allId.length,
        name: action.payload.name,
        profileImageUrl:
          'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
        email: action.payload.email,
        password: action.payload.password,
        postList: [],
        commentList: [],
      };
      DummyUsers.byId[user2.seq] = user2;
      DummyUsers.allId.push(user2.seq);
      return {
        seq: user2.seq,
        name: user2.name,
        profileImageUrl: user2.profileImageUrl,
        postList: user2.postList,
        commentList: user2.commentList,
      };
    case ADD_POST_USER:
      if (state === null) return state;
      const addPostUser: UserTypes = Object.assign(state);
      addPostUser.postList.push(action.payload.postSeq);
      DummyUsers.byId[action.payload.userSeq].postList.push(action.payload.postSeq);
      return addPostUser;
    case ADD_COMMENT_USER:
      if (state === null) return state;
      const addCommentUser: UserTypes = Object.assign(state);
      addCommentUser.commentList.push(action.payload.commentSeq);
      DummyUsers.byId[action.payload.userSeq].commentList.push(action.payload.commentSeq);
      return addCommentUser;
    default:
      return state;
  }
};

export default reducer;
