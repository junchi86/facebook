import React, { FC, DispatchWithoutAction, Dispatch } from 'react';
import toggle from 'hocs/toggle';
import { OnClickAnchor } from 'Types';
import { Action } from 'redux';
import { DispatchProp, useDispatch } from 'react-redux';
import { logout } from 'data/users/actions';

interface IProps {
  to: string;
  text: string;
  action: any;
}

const NaviItem: FC<IProps> = ({ to, text, action }) => {
  const dispatch = useDispatch();
  const onClickAnchor: OnClickAnchor = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(logout());
  };

  return (
    <>
      <li className="nav-item">
        <a href={to} onClick={onClickAnchor} className="nav-link">
          {text}
        </a>
      </li>
      <style jsx>
        {`
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
        `}
      </style>
    </>
  );
};

export default toggle(NaviItem);
