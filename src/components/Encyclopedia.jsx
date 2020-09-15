// import React, { useState } from 'react';
import React, { Component } from 'react';
import Dropdown from './Dropdown/Dropdown';
import items from './Dropdown/Items';
import './Dropdown/App.scss';
import westernGallery from './Img/westernGallery.jpg'

function Encyclopedia() {

  const align = {
    textAlign: 'center',
    padding: '1rem',
    margin: '1rem',
  }

  const westernGalleryStyles = {
    borderRadius: '5px',
    boxShadow: '5px 5px 8px 5px rgba(0, 0, 0, 0.449)',
    marginTop: '3rem',
    marginBottom: '3rem',
    display: 'block',
    maxWidth: '100vw',
    maxHeight: '100vh',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 'auto',
    height: 'auto',
    
  }

  return (
    <>
    <div>
      <h1 style={align}></h1>
      <div className='container'>
        <Dropdown title='Explore' items={items} multiSelect />
      </div>
      <div>
        <img src={westernGallery} style={westernGalleryStyles} alt='Eastern Gallery' ></img>
      </div>
    </div>
     </>
  )
};

export default Encyclopedia;