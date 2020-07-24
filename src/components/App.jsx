import React from 'react';
import './App.css';

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
