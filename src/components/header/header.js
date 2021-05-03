

function Header() {
    return (
        <>
            <div className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                
                <div className="nav-link navText" id="aboutMeBtn" ><a href="/about">Mitchell Duncan</a></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <nav className="collapse navbar-collapse text-right" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto pl-0">
                    {/* <li className="nav-item">
                        <div className="nav-link navText" id="resumeBtn"><a href="./assets/Resume.pdf" target="_blank" class="nav-link nav-text">Resume</a></div>
                    </li> */}
                    <li className="nav-item">
                        <div className="nav-link navText" id="portfolioBtn"><a target="_blank" href="./assets/Resume.pdf">Resume</a></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link navText" id="portfolioBtn"><a href="/portfolio">Portfolio</a></div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link navText" id="contactBtn"><a href="/contact">Contact</a></div>
                    </li>
                    </ul>
                </nav>
            </div>
       </>
    );
  }
  
  export default Header;
  