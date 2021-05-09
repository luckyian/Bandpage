import React from "react";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navibar() {
    return (
        <Navbar expand="md" className="navibar" variant="dark" sticky="top" className="navitext">
            <div className="col-md-9">
                <Navbar.Brand className="text" href="#"  >Fortress of The Bear</Navbar.Brand>
                <Navbar.Toggle  className="float-right" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation" />
            </div>
            <div className="col-md-3">
                <Navbar.Collapse id="navbarNavAltMarkup">
                    <Nav>
                        <Nav.Link className="text" href="/#/index" >Home</Nav.Link>
                        <Nav.Link href="/#/videos" >Videos</Nav.Link>
                        {/* <Nav.Link href="/fortressofthebear/#/store" >Store</Nav.Link> */}
                        <Nav.Link href="/#/contact" >Contact</Nav.Link>
                        {/* <Nav.Link href="/fortressofthebear/#/login" >Join</Nav.Link> */}
                        <Nav.Link href="#" className="nav-link" tabindex="5" aria-disabled="true"> </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default Navibar;
