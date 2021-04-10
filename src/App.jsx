import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import Main from './components/MainPage/Main';
import AboutMePage from './components/AboutMePage/AboutMePage';
import MobileNavbar from './components/MobileNavbar';
import BookPage from './components/BookPage/BookPage';
import ScrollToTop from './components/utils/ScrollToTop';
import ReviewsPage from './components/ReviewsPage/ReviewsPage';

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
            <ReviewsPage />
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
