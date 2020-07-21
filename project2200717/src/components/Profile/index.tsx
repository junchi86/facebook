import React, { FC } from 'react';

import { UserTypes } from 'data/rootTypes';
import toggle from 'hocs/toggle';
import { Link } from 'react-router-dom';

interface IProps {
  user: UserTypes;
  show: boolean;
}

const Profile: FC<IProps> = ({ user }) => {
  const { seq, name, profileImageUrl } = user;
  return (
    <li className="nav-item">
      <Link to={'/u/' + seq} className="nav-link">
        {profileImageUrl ? <img src={profileImageUrl} alt="" /> : false} {name}
      </Link>
      <style jsx>{`
        .nav-item img {
          width: 25px;
          height: 25px;
          border-radius: 100%;
          overflow: hidden;
          margin-right: 5px;
        }
      `}</style>
    </li>
  );
};

export default toggle(Profile);
