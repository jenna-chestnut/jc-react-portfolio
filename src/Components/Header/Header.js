import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {

      return (
        <header className="h-group">
        <nav>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Coding Portfolio</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <div className="item">
            <h1><Link to='/'>Jenna Chestnut</Link></h1>
            <div className='h-s-d'>
              <span> Systems Consulting and Redesign | Business Consulting | Automation Strategist</span>
            </div>
        </div>
        </header>
      );
    }
}

export default Header;