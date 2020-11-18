import React  from 'react';
import headshot from './images/headshot.jpg';
import heroBackground from './images/hero-background.jpg';
import { NavItem,MenuItem,Nav,NavDropdown,Navbar,Grid,Row,Col } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="app">
              <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <h1 className="brand">Travelize</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      
        <Navbar.Text pullRight><button type="button" className="btn btn-primary">About</button></Navbar.Text>     
        <Navbar.Text pullRight><button type="button" className="btn btn-link">Blog</button></Navbar.Text>
        <Navbar.Text pullRight ><button type="button" className="btn btn-link">Home</button></Navbar.Text>
      </Navbar.Collapse>
    </Navbar>;


    <img id ="heroBack" src={heroBackground} alt="Logo"></img>

      <div className="container">
      <div class="row">
        <div className="col-md-4">
        <img id ="headshot" src={headshot} alt="Logo"></img>

        </div>
        <div className="col-md-8">
          <h1>A little about me</h1>
          <p className="abc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p className="abc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p className="abc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p className="abc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p className="abc">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      </div>



      <footer className="footer">
      <div className="container">
        <p className="social">© 2020 Travelize</p>
        <p className="copyright">Privacy Policy Terms and Conditions</p>

      </div>
    </footer>





    </div>
  );
}

export default App;
