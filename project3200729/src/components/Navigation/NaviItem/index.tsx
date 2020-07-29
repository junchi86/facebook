import React, { FC, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import toggle from 'hocs/toggle';

interface IProps {
  to: string;
  text: string;
  action: Function;
}

const NaviItem: FC<IProps> = ({ to, text, action }) => {
  const onClickAnchor = (e: SyntheticEvent<HTMLAnchorElement>): void => {
    if (action) {
      e.preventDefault();
      e.stopPropagation();
      action();
    }
  };

  return (
    <li className="nav-item">
      <Link to={to} onClick={onClickAnchor} className="nav-link">
        {text}
      </Link>
    </li>
  );
};

export default toggle(NaviItem);
