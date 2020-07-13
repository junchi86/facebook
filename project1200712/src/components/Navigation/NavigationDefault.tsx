import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { State, Logout } from 'Types';

interface IProps {
  state: State;
  logout: Logout;
}

const NavigationDefault: FC<IProps> = ({ state, logout }) => {
  return (
    <>
      <nav className="navbar fixed-top bg-blue">
        <Link to="/" className="navbar-brand">
          <i className="fab fa-facebook-square" aria-hidden="true"></i>
        </Link>
        <ul className="nav">
          <>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                {state.user.name}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <img alt="user image" src={state.user.profileImageUrl} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" onClick={logout} className="nav-link">
                로그아웃
              </Link>
            </li>
          </>
        </ul>
      </nav>
      <style jsx>{`
        nav.fixed-top {
          height: 50px;
        }
        nav.navbar.bg-blue {
          background-color: #3b5999;
        }
        .nav .nav-item .nav-link {
          color: white;
          font-weight: 800;
          font-size: 12px;
          cursor: pointer;
          line-height: 26px;
        }
        .nav .nav-item .nav-link:hover {
          color: rgba(255, 255, 255, 0.75);
        }

        .navbar-brand i.fa-facebook-square {
          font-size: 27px;
          color: white;
        }

        .nav-link > img {
          width: 25px;
          height: 25px;
          border-radius: 100%;
          overflow: hidden;
          margin-right: 5px;
        }
      `}</style>
    </>
  );
};

export default NavigationDefault;
