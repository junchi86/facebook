import { useSelector } from 'react-redux';
import { RootReducer } from 'data/rootTypes';

const commentsSelecter = useSelector((state: RootReducer) => state.comments);

export default commentsSelecter;
