import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">SkillNav</a>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
        <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
      </ul>
    </div>
  </nav>
)

export default Navbar