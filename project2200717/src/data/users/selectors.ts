import { UserState, RootReducer, UserTypes } from 'data/rootTypes';
import { useSelector } from 'react-redux';
import { DummyUsers } from 'data/Dummy';

export const getCurrentUser = (): UserState => useSelector((state: RootReducer) => state.user);
export const getUserInUserSelector = (seq: number): UserTypes => DummyUsers.byId[seq];
