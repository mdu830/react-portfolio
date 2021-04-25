import About from '../about/index';
import Portfolio from '../portfolio/index'

function Header() {
    return (
      <div className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-brand nav-text" src={About} id="aboutMeBtn">Mitchell Duncan</button>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <nav class="collapse navbar-collapse text-right" id="navbarNavDropdown">
            <ul class="navbar-nav ml-auto pl-0">
              <li class="nav-item">
                <button class="nav-link nav-text" src={Portfolio} id="portfolioBtn">Portfolio</button>
              </li>
              <li class="nav-item">
                {/* <a class="nav-link nav-text" id="contactBtn">Contact</a> */}
              </li>
            </ul>
        </nav>
      </div>
    );
  }
  
  export default Header;
  