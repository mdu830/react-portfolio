import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import About from './components/about/index';
import Portfolio from './components/portfolio/index'
import Contact from './components/contact'

import Header from './components/header/header';



function App() {
  return (
    <>
    <Header />
    <Router>
      <Route exact path="/about">
          <About />
      </Route>
      <Route  exact path="/portfolio">
          <Portfolio />
      </Route>
      <Route exact path="/contact">
          <Contact />
      </Route>
      <Route exact path="/">
          <About />
      </Route>
    </Router>

   </>
  );
}

export default App;
