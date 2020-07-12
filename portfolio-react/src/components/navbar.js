import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Portfolio</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <a href="/#intro" className="nav-link">Home</a>
          </li>
          <li className="navbar-item">
          <a href="/index" className="nav-link">Profession</a>
          </li>
          <li className="navbar-item">
          <a href="/index" className="nav-link">A propos</a>
          </li>
          <li className="navbar-item">
          <a href="/index" className="nav-link">Projets Formation actuelle</a>
          </li>
          <li className="navbar-item">
          <a href="/index" className="nav-link">Hobbies, centre dinterets</a>
          </li>
          <li className="navbar-item">
          <a href="/index" className="nav-link">Contact</a>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}