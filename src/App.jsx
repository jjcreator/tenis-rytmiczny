import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Main from './components/MainPage/Main';
import AboutMePage from './components/AboutMePage/AboutMePage';
import MobileNavbar from './components/MobileNavbar';
import BookPage from './components/BookPage/BookPage';
import ScrollToTop from './components/utils/ScrollToTop';

const App = () => {
  const [navIsAvailable, setNavIsAvailable] = useState(true);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <MobileNavbar />
      {navIsAvailable && <Navbar setNavIsAvailable={setNavIsAvailable} />}
      <div className="pageContainer">
        <ScrollToTop />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/ksiazka">
            <BookPage />
          </Route>
          <Route path="/recenzje">
            <AboutMePage />
          </Route>
          <Route path="/autor">
            <AboutMePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
