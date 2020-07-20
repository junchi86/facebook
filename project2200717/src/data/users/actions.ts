import { LOGOUT } from 'data/users/actionTypes';
export const logout = () => ({
  type: LOGOUT,
});

export type UserAction = ReturnType<typeof logout>;
