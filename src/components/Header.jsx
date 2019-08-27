import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="ui secondary pointing menu">
    <Link to="/" className="item">
      1kbIdeas
    </Link>
    <div className="right menu">
      <Link to="/" className="item">
        All Stories
      </Link>
      <Link to="/login" className="ui blue google button">
        <i className="google icon" />
        Login
      </Link>
    </div>
  </div>
);

export default Header;
