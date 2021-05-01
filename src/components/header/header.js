import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
  } from "react-router-dom";
import About from '../about/index';
import Portfolio from '../portfolio/index'
import Contact from '../contact'

function Header() {
    return (
        <Router>
            <div className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                
                <div className="navbar-link nav-text" id="aboutMeBtn" ><Link to="/about">{About}Mitchell Duncan</Link></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <nav className="collapse navbar-collapse text-right" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto pl-0">
                    <li className="nav-item">
                        <div className="nav-link nav-text" id="portfolioBtn"><Link to="/portfolio">{Portfolio}Portfolio</Link></div>
                    </li>
                    <li className="nav-item">
                        <div class="nav-link nav-text" id="contactBtn"><Link to="/contact">{Contact}Contact</Link></div>
                    </li>
                    </ul>
                </nav>
            </div>
    
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/portfolio">
                    <Portfolio />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <About />
                </Route>
            </Switch>
        </Router>
    );
  }
  
  export default Header;
  