import React, { FC } from 'react';
import toggle from '../../hocs/toggle';
import { User } from 'Types';

interface IProps {
  user: User;
  show: boolean;
}

const Profile: FC<IProps> = ({ user }) => {
  const { seq, name, profileImageUrl } = user;
  return (
    <li className="nav-item">
      <a href={'/u/' + seq} className="nav-link">
        {profileImageUrl ? <img src={profileImageUrl} alt="" /> : false} {name}
      </a>
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
