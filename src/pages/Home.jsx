import React from 'react'
import '../App.css'
import{Link} from 'react-router-dom'

function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">

<div class="container-fluid">
 
  <button
    class="navbar-toggler"
    type="button"
    data-mdb-toggle="collapse"
    data-mdb-target="#navbarCenteredExample"
    aria-controls="navbarCenteredExample"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <i class="fas fa-bars"></i>
  </button>


  <div
    class="collapse navbar-collapse justify-content-center"
    id="navbarCenteredExample"
  >
    
    <ul class="navbar-nav mb-2 mb-lg-0">
      <li class="nav-item">
        <Link class="nav-link active" to="/">HOME</Link>
        
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#service">SERVICE</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#portfoli">PORTFOLIO</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#about">ABOUT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#contact">CONTACT</a>
      </li>
  
     
  
 
    </ul>

  </div>
 
</div>

</nav>
    </div>
  )
}

export default Home
