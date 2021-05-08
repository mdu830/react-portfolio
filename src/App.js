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
import Footer from './components/footer/footer'


function App() {
  return (
    <>

    <Router>
    <Header />
      {/* <Route exact path="/about">
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
      </Route> */}
      <Route exact path={["/about"]} component={About} />
      <Route exact path={["/portfolio"]} component={Portfolio} />
      <Route exact path={["/contact"]} component={Contact} />
      <Route exact path={["/"]} component={About} />
    </Router>
    <Footer />

   </>
  );
}

export default App;
