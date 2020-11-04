import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from "./Navbar/Navbar";
import Home from './Home';
import StoryBoard from './StoryBoard';
import Encyclopedia from './Encyclopedia';
import Forum from './Forum/Forum';
import Contact from './Contact';
import Login from './Login/Login';
import LoginForm from './Login/LoginForm';
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
        <Route path ='/login'>
          <Login />
        </Route>
        <Route path ='/loginform'>
          <LoginForm />
        </Route>
        <Route path ='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
