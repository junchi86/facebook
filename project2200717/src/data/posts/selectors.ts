import { useSelector } from 'react-redux';
import { RootReducer } from 'data/rootTypes';

const postsSelecter = useSelector((state: RootReducer) => state.posts);

export default postsSelecter;
