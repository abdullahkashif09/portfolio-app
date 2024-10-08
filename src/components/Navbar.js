import React, { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import "./Navbar.css"
import { FiMenu, FiX } from "react-icons/fi"

const Navbar = ({ navbarLinks }) => {

  const [menuClicked, setmenuClicked] = useState(false)

  const toggleMenuClicked = () => {
    setmenuClicked(!menuClicked);
  }

  return (
    <nav className='navbar'>
      <span className='navbar-logo'>
        &lt;Abdullah kashif - Frontend Developer/&gt;
      </span>
      {menuClicked ? (
        <FiX size={25} className="hamburger-button" onClick={toggleMenuClicked} />
        ) : (
        <FiMenu size={25} className="hamburger-button" onClick={toggleMenuClicked} />
      )}

      <ul className={!menuClicked ? "navbar-list" : "navbar-list navbar-list-active"}>
        {navbarLinks.map((item) => {
          return (
            <li className='navbar-list-item' key={item.title}>
              <Link to={item.url} className='navbar-link'>
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar