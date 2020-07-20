import { useSelector } from 'react-redux';
import { RootReducer } from 'data/rootTypes';
const userSelecter = useSelector((state: RootReducer) => state.user);

export default userSelecter;
