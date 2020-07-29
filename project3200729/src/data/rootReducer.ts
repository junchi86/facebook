import { connectRouter } from 'connected-react-router';
import { combineReducers, CombinedState } from 'redux';
import user, { User } from './users/reducers';
import posts from './posts/reducers';
import comments from './comments/reducers';
import auth from './auth/reducers';
import { History } from 'history';
const createRootReducer = (history: History) =>
  combineReducers({
    comments,
    posts,
    router: connectRouter(history),
    user,
    auth,
  });

export { createRootReducer };

interface ICombine {
  user: User;
  posts: any;
  comments: any;
  router: object;
  auth: any;
}

export type IRootState = CombinedState<ICombine>;
