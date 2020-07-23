import { UserReducer, UserState, UsersTypes, UserTypes } from 'data/rootTypes';
import { DummyUsers } from 'data/Dummy';
import { LOGOUT, LOGIN, SIGNUP, ADD_POST_TO_USER } from './actionTypes';

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
      const isExistEmail = DummyUsers.allId.find((i) => DummyUsers.byId[i].email === action.payload.email);
      if (isExistEmail === undefined) throw new Error('메일이 없습니다.');
      const user: UsersTypes = DummyUsers.byId[isExistEmail];
      if (user.password !== action.payload.password) throw new Error();
      return user;
    case SIGNUP:
      const isExistEmail2 = DummyUsers.allId.find((i) => DummyUsers.byId[i].email === action.payload.email);
      if (isExistEmail2 !== undefined) throw new Error('같은 메일이 존재합니다.');
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
    case ADD_POST_TO_USER:
      if (state === null) return state;
      const addPostUser: UserTypes = Object.assign(state);
      addPostUser.postList.push(action.payload.postSeq);
      DummyUsers.byId[action.payload.userSeq].postList.push(action.payload.postSeq);
      return addPostUser;
    default:
      return state;
  }
};

export default reducer;
