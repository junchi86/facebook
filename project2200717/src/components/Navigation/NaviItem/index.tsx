import React, { FC } from 'react';
import toggle from 'hocs/toggle';
import { LogOut, OnClickAnchor } from 'Types';

interface IProps {
  to: string;
  text: string;
  action: LogOut;
}

const NaviItem: FC<IProps> = ({ to, text, action }) => {
  const onClickAnchor: OnClickAnchor = (e) => {
    if (action) {
      e.preventDefault();
      e.stopPropagation();
      action();
    }
  };

  return (
    <li className="nav-item">
      <a href={to} onClick={onClickAnchor} className="nav-link">
        {text}
      </a>
    </li>
  );
};

export default toggle(NaviItem);
