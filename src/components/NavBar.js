import React from 'react'

function NavBar() {
  
    return (
      <div>
        <nav
        class="navbar navbar-expand-lg navbar-light bg-light shadow"
      >

        <div class="container">

          <a href="/" class="navbar-brand">
            
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbar-responsive"
            aria-expanded="false"
            aria-abel="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a href="/" class="nav-link">
                  <i class="fas fa-home"></i>
                  <span class="p-2">Home</span>
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="/activities" class="nav-link">
                  <span class="p-2">Activities</span>
                </a>
              </li>
              <li class="nav-item">
                <a href="updates" class="nav-link">
                  <span class="p-2">Updates</span>
                </a>
              </li>
              
              <li class="nav-item">
                <a href="/about us" class="nav-link">
                  <i class="far fa-comment"></i>
                  <span class="p-2">About Us</span>
                </a>
              </li>

              <li class="nav-item">
                <a href="/contact us" class="nav-link">
                  <i class="far fa-comment"></i>
                  <span class="p-2">Contact Us</span>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
       
      </nav>
     
      </div>
    )
  }

export default NavBar
