import { addComment } from './comments/actions';
import { addPost, likePost } from './posts/actions';
import { logout } from './users/actions';
const RootAction = { addComment, addPost, likePost, logout };

export default RootAction;
