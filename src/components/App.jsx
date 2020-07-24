import { BrowerRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import React from 'react';
import Login from './Login';
import Header from './Header';
import StoryBoard from './StoryBoard';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path ='/login'>
          <Login />
        </Route>
        <Route path ='/storyboard'>
          <StoryBoard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
