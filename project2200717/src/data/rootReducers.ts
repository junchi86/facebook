import { combineReducers } from 'redux';
import commentsReducer from './comments/reducers';
import postsReducer from './posts/reducers';
import userReducer from './users/reducers';

const rootReducer = combineReducers({ user: userReducer, posts: postsReducer, comments: commentsReducer });

export default rootReducer;
