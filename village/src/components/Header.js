import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <NavLink to="/">Smurf List</NavLink>
      <NavLink to="/smurf-form">Add Smurf</NavLink>
    </header>
  )
}

export default Header;