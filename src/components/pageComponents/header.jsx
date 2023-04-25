import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.component.scss'
import loginFetch from '../authentication/loginFetch'



export default function Header() {
  return (
    <nav className="navbar">
    <div>
      <h1>BeeHive</h1>
      <div className="links">
      <Link to="/">Home</Link>
         
         <Link to="/user">Profile</Link>
      </div>
    </div>
    </nav>
  )
}
