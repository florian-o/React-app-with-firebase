import React from 'react';
import { Link } from "react-router-dom";


function NavBar() {
    return (
        
       <nav class="navbar navbar-expand-lg navbar-light bg-light" >
   <Link to="/" class="navbar-brand">Shopping</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="material-icons">
stars
</span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" >Menu </a>
      </li>
      <li class="nav-item">
      <Link to="/register" className="nav-link">
        S'inscrire
      </Link>
      </li>
      <li class="nav-item">
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
