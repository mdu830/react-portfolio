import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';


const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar className="fixed-top py-0" color="dark" dark expand="lg">
                <NavbarBrand><Link className="nav-link navText" to="/about">Mitchell Duncan</Link></NavbarBrand>
                <NavbarToggler onClick={toggle} />

                <Collapse isOpen={isOpen}  navbar>
                    <Nav className="ml-auto justify-content-right" right>
                        <NavItem className="nav-link navText" id="portfolioBtn">
                            <a target="_blank" href="./assets/Resume.pdf">Resume</a>
                        </NavItem>
                        <NavItem className="nav-link navText" id="portfolioBtn">
                            <Link to="/portfolio">Portfolio</Link>
                        </NavItem>
                        <NavItem className="nav-link navText" id="portfolioBtn">
                            <Link to="/contact">Contact</Link>
                        </NavItem>
                    </Nav>
                </Collapse>

            </Navbar>
            {/* <div className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                
                <div className="nav-link navText" id="aboutMeBtn" ><Link to="/about">Mitchell Duncan</Link></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <nav className="collapse navbar-collapse text-right" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto pl-0">
                    <li className="nav-item">
                        <div className="nav-link navText" id="portfolioBtn"><a target="_blank" href="./assets/Resume.pdf">Resume</a></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link navText" id="portfolioBtn"><Link to="/portfolio">Portfolio</Link></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link navText" id="contactBtn"><Link to="/contact">Contact</Link></div>
                    </li>
                    </ul>
                </nav> */}
        </>
    );
}

export default Header;
