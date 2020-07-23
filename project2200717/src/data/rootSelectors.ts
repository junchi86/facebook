import { getCurrentUser, getUserInUserSelector } from './users/selectors';
import { getEntirePosts } from './posts/selectors';
import { getEntireComments } from './comments/selectors';

export const userSelector = { getCurrentUser, getUserInUserSelector };
export const postSelector = { getEntirePosts };
export const commentSelector = { getEntireComments };
