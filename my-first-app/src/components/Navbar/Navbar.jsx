import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import './Navbar.css'

function ColorSchemesExample() {
  return (
    <>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://www.pipedrive.com/"><img
          src="https://yt3.ggpht.com/ytc/AMLnZu-7Hdfn7loY7Oz4fsgmr5aevEOqg-xMaN_LqQJwaw=s176-c-k-c0x00ffffff-no-rj"
          alt="" width="60" height="60"/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
          <NavLink to='/' className={(isActive) => isActive ? 'active-link' : ''}>Tribes</NavLink>
          </li>
          <li class="nav-item">
          <NavLink to='/employees' className={(isActive) => isActive ? 'active-link' : ''}>Employees</NavLink>
          </li>

        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}

export default ColorSchemesExample;