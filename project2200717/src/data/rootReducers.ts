import { combineReducers } from 'redux';
import commentsReducer from './comments/reducers';
import postsReducer from './posts/reducers';
import userReducer from './users/reducers';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history: any) =>
  combineReducers({
    user: userReducer,
    posts: postsReducer,
    comments: commentsReducer,
    router: connectRouter(history),
  });

export default rootReducer;
