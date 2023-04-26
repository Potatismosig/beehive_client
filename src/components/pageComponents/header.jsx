import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.component.scss'



export default function Header() {
  return (
    <nav className="navbar">
    <div>
      <h1>BeeHive</h1>
      <div className="links">
      <Link to="/home">Home</Link>
      <Link to="/user">Profile</Link>
      <Link to="/allUsers">Friends</Link>

      </div>
    </div>
    </nav>
  )
}
