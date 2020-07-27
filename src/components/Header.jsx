import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    // fontSize: '30px',
    color: 'crimson',
    // width: '100vh',
    borderBottom: '.2rem solid black',
    margin: '.1rem',
    padding: '1rem'
  }

  return (
    <nav style = {headerStyle}>
      <h1>Avernus</h1> 
      <hr/>
        <ul>
          <li><Link to = '/'>Home</Link></li>
          <li><Link to = 'storyboard'>Storyboard</Link></li>
          <li><Link to = 'login'>Login</Link></li>
        
      </ul>
    </nav>
  )
};

export default Header;