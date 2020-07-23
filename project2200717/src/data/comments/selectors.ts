import { CommentEntities, RootReducer } from 'data/rootTypes';
import { useSelector } from 'react-redux';

export const getEntireComments = (): CommentEntities => useSelector((state: RootReducer) => state.comments);
