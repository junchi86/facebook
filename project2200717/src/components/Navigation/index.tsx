import React, { FC } from 'react';
import Logo from '../Logo';
import Profile from '../Profile';
import NaviItem from './NaviItem';
import { useSelector } from 'react-redux';
import { RootReducer } from 'data/rootTypes';
import { DummyUsers } from 'data/Dummy';

const Navigation: FC = () => {
  const user = useSelector((state: RootReducer) => state.user);
  return (
    <nav className="navbar fixed-top bg-blue">
      <Logo />
      <ul className="nav">
        <NaviItem to="/login" text="로그인" show={!user} />
        <NaviItem to="/signup" text="회원가입" show={!user} />
        <Profile show={user} user={user} />
        <NaviItem to="/signout" action={true} text="로그아웃" show={user} />
      </ul>

      <style jsx>{`
        .fixed-top {
          height: 50px;
        }
        .bg-blue {
          background-color: #3b5999;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
