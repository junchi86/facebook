import { routerActions as router } from 'connected-react-router';
import * as user from './users/actions';
import * as posts from './posts/actions';
import * as comments from './comments/actions';
import * as auth from './auth/actions';

export { comments, posts, router, user, auth };
