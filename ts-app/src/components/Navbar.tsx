import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper px1">
        <a href="/" className="brand-logo">My React+TS App</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/">TaskList</NavLink></li>
          <li><NavLink to="/about">Information</NavLink></li>
          <li><NavLink to="/another">Another</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}