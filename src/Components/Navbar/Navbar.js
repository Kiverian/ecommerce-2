import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom'

const Nav =() =>{
    return(
      <nav>
      <ul class="main-nav">
          <li>
              <Link to="/home"> Home </Link>
          </li>
          <li>
              <Link to="/filter"> Products </Link>
          </li>
          <li>
              <Link to="/contact"> Contact </Link>
          </li>
      </ul>
  </nav>
  
  ) 
}

export default Nav;