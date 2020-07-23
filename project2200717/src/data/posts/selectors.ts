import { PostEntities, RootReducer } from 'data/rootTypes';
import { useSelector } from 'react-redux';

export const getEntirePosts = (): PostEntities => useSelector((state: RootReducer) => state.posts);
