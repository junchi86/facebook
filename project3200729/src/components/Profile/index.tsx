import React, { FC } from 'react';
import toggle from '/hocs/toggle';
import { Link } from 'react-router-dom';
import { User } from '/data/users/reducers';

interface IProps {
  user: User;
}

const Profile: FC<IProps> = ({ user }) => {
  const { profileImageUrl, name } = user;
  return (
    <>
      <li className="nav-item">
        <Link to={'/u/' + name} className="nav-link">
          {profileImageUrl ? <img src={profileImageUrl} alt="" /> : false} {name}
        </Link>
      </li>
      <style jsx>{`
        .nav-item img {
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

export default toggle(Profile);
