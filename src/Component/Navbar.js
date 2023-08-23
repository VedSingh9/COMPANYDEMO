import React from 'react'
import './Appp.css';




function Navbar() {
  return (
    <div className="App">
      <header className="App-header">
      <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                        
          </button>
          <a class="navbar-brand" href="#">Logo</a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">SERVICES</a></li>
            
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>
      </div>
    </nav>
      
      </header>
    
    </div>
  );
}

export default Navbar;