import { UserReducer, UserState } from 'data/rootTypes';

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
    default:
      return state;
  }
};

export default reducer;
