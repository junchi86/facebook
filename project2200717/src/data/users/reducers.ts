import { UserReducer, UserState, UsersTypes } from 'data/rootTypes';
import { DummyUsers } from 'data/Dummy';

const initialState: UserState = {
  seq: 0,
  name: 'harry',
  profileImageUrl:
    'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
};

const reducer: UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return null;
    case 'LOGIN':
      const isEmail = DummyUsers.byId.filter((i) => i.email === action.payload.email);
      if (isEmail.length === 0) throw new Error();
      const user = isEmail[0];
      if (user.password !== action.payload.password) throw new Error();
      return { seq: user.seq, name: user.name, profileImageUrl: user.profileImageUrl };
    case 'SIGNUP':
      const isEmail2 = DummyUsers.byId.filter((i) => i.email === action.payload.email);
      if (isEmail2.length !== 0) return null;
      const user2: UsersTypes = {
        seq: DummyUsers.allId.length,
        name: action.payload.name,
        profileImageUrl:
          'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
        email: action.payload.email,
        password: action.payload.password,
      };
      DummyUsers.allId.push(user2.seq);
      DummyUsers.byId.push(user2);
      return { seq: user2.seq, name: user2.name, profileImageUrl: user2.profileImageUrl };
    default:
      return state;
  }
};

export default reducer;
