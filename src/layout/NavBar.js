import React from 'react';
import { Link } from "react-router-dom";


function NavBar() {
    return (
        
       <nav className="navbar navbar-expand-lg navbar-light bg-light" >
   <Link to="/" className="navbar-brand">Shopping</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="material-icons">
stars
</span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" >Menu </a>
      </li>
      <li className="nav-item">
      <Link to="/register" className="nav-link">
        S'inscrire
      </Link>
      </li>
      <li className="nav-item">
      <Link to="/login" className="nav-link">
        S'idendifier
      </Link>
      </li>
    </ul>
  </div>
</nav>
      
    )
}

export default NavBar;
