import React from 'react';
import './App.css';
import Header from './Header.js'
import Footer from './Footer.js'
import Home from './Home.js'
import Contact from './Contact'
import Nav from './Nav'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Header />

        <Home/>

        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
        
        </Switch> */}

        <Footer />
      </div>

    </Router>

  );
}

export default App;
