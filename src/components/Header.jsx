import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'gray',
    // fontSize: '30px',
    color: 'white',
    width: '100vh',
    borderBottom: '.2rem solid black',
    margin: '.1rem',
    padding: '1rem'
  }

  return (
    <nav style = {headerStyle}>
      <h1>Avernus</h1>
      <Link to = 'login'>Login</Link>
      <Link to = '/'>Home</Link>
    </nav>
  )
};

export default Header;