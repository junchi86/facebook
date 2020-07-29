import React from 'react';
import { Link } from 'react-router-dom';

const HomeLink = () => {
  return (
    <>
      <Link className="navbar-brand" to="/">
        <i className="fab fa-facebook-square" />
      </Link>
      <style jsx>{`
        .navbar-brand i.fa-facebook-square {
          font-size: 27px;
          color: white;
        }
      `}</style>
    </>
  );
};

export default HomeLink;
