import React from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoWhite from '../../assests/images/IEEE_CS_SBC _Logo.png'
import IEEELogo from '../../assests/images/IEEE SB Logo.png'
import { MdSearch } from 'react-icons/md';

const Navbars = () => {
  return (
    <div className='nav-bar-items'>
     
     <div className='Logo01__Container'>
      <img src={LogoWhite} className='logo_01' alt='logo' style={{ width: '200px', height: '90px' }} />
     </div>

     <div className='Logo02__Container'>
      <div className='nav-bar-custom'>
        <Navbar expand="lg" className="navbar-custom">
          <Container className='navbar-custom'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle-item'/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/aboutUs">About Us</Nav.Link>

                <NavDropdown href="/committee" title="Committee" id="basic-nav-dropdown" >
                  <NavDropdown.Item href="/committee/newcommitte">Present Committee</NavDropdown.Item>
                  <NavDropdown.Item href="/committee/pastcommitte">Past Committee</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown  title="Feed" id="basic-nav-dropdown" >
                  <NavDropdown.Item href="/Feed/News">News</NavDropdown.Item>
                  <NavDropdown.Item href="/Feed/Event">Event</NavDropdown.Item>
                  <NavDropdown.Item href="/Feed/Achivement">Achivement</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <div id='mobile_searchbar' className='searchbar_default'>
          <input type='text' placeholder='Search Here...' />
          <button>
            <i className='fa fa-search'><MdSearch size={24} className='search_icon' /></i>
          </button>
        </div>
     </div>

     <div className='Logo03__Container'>
       <img src={IEEELogo} className='logo_02' alt='logo' style={{ width: '180px', height: '90px' }} />
     </div>

    </div>
  );
};

export default Navbars;
