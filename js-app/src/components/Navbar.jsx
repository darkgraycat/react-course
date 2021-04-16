import React from 'react'
import './Navbar.css'

const Navbar = ({ title, children }) => {
  return (
    <nav className="Navbar">
      <div>{title || ''}</div>
      <ul>
        {children.map((child, key) => {
          return (
            <li key={key}>{child}</li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar