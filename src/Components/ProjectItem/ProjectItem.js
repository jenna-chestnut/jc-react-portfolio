import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {

      return (
        <header className="h-group">
        <nav>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <h1 className="item">
            <Link to='/'>Jenna Chestnut</Link>
            </h1>
        </header>
      );
    }
}

export default Header;