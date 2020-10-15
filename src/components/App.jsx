import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import React from 'react';
// import Login from './Login';
import StoryBoard from './StoryBoard';
import Navbar from "./Navbar/Navbar";
import Contact from './Contact';
import Home from './Home';
import Encyclopedia from './Encyclopedia';
import Forum from './Forum/Forum';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path ='/home'>
          <Home />
        </Route>
        <Route path ='/storyboard'>
          <StoryBoard />
        </Route>
        <Route path ='/encyclopedia'>
          <Encyclopedia />
        </Route>
        <Route path ='/forum'>
          <Forum />
        </Route>
        <Route path ='/contact'>
          <Contact />
        </Route>
        {/* <Route path ='/login'>
          <Login />
        </Route> */}
        <Route path ='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
