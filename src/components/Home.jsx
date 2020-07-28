import React from 'react';
import './App.css';
import splash from './Img/splash.jpg';

function Home() {
  const homeStyle = {
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
    <splash style = {homeStyle}>
      <div>
        <h1>Avernus</h1>
      </div>
      <img src = {splash} alt='splash' className='splash'></img>
    </splash>
  )
};

export default Home;