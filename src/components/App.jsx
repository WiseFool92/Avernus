import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import React from 'react';
// import Login from './Login';
// import Header from './Header';
import StoryBoard from './StoryBoard';
import Navbar from "./Navbar/Navbar";
import Contact from './Contact';
import Home from './Home';
import Encyclopedia from './Encyclopedia';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Home /> */}
      {/* <Header /> */}
     
      <Switch>
        {/* <Route path ='/login'>
          <Login />
        </Route> */}
        <Route path ='/home'>
          <Home />
        </Route>
        <Route path ='/storyboard'>
          <StoryBoard />
        </Route>
        <Route path ='/encyclopedia'>
          <Encyclopedia />
        </Route>
        <Route path ='/contact'>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
