import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">NewsPilot</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Business" className="nav-link">Business</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Entertainment" className="nav-link">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Health" className="nav-link">Health</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Science" className="nav-link">Science</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Sports" className="nav-link">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Technology" className="nav-link">Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;
