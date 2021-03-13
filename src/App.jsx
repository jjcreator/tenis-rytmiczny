import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Main from './components/MainPage/Main';
import About from './components/AboutPage/About';
import Contact from './components/ContactPage/Contact';
import MobileNavbar from './components/MobileNavbar';

const App = () => {
  const [navIsAvailable, setNavIsAvailable] = useState(true);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <MobileNavbar />
      {navIsAvailable && <Navbar setNavIsAvailable={setNavIsAvailable} />}
      <div className="pageContainer">
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
