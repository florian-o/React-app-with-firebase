import React from 'react';

function NavBar() {
    return (
        
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Shopping</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="material-icons">
stars
</span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Menu <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">S'inscrire</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">S'identifier</a>
      </li>
    </ul>
  </div>
</nav>
      
    )
}

export default NavBar;
