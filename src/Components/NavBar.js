import React,{Component} from 'react';
import '../App.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class NavBar extends Component{
	render(){
		return(
		<header>
		  <Navbar className="fixed-top" bg="dark" expand="lg">
			  <Navbar.Brand href="#homepage">
		      <img
		        src="https://www.jotform.com/resources/assets/logo/jotform-logo-transparent-400x100.png"
		        width="200px"
		        height="50px"
		        className="d-inline-block align-top"
		        alt="JotForm Logo"
		      />
		    </Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  <Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="navButtons">
			      <Nav.Link className="navButtons" href="#homepage">Home</Nav.Link>
			      <Nav.Link className="navButtons" href="#treeWrapper">Show Tournament Bracket</Nav.Link>			      
			      <Nav.Link className="navButtons" href="#accordion">Team List</Nav.Link>
			      <Nav.Link className="navButtons" href="https://www.jotform.com/contact/" target="_blank">Contact Us</Nav.Link>			      
			    </Nav>
			  </Navbar.Collapse>
			</Navbar>
		</header>
		);
	}
}
export default NavBar;


