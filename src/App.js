import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from './pages/home/Home';
import SearchPage from './pages/searchPage/SearchPage';

function App() {
  return (
    <div>
      <Router>
        <Header/>

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/page">
            <SearchPage/>
          </Route>
        </Switch>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
