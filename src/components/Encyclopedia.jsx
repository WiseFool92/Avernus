// import React, { useState } from 'react';
import React, { Component } from 'react';
import Dropdown from './Dropdown/Dropdown';
import items from './Dropdown/Items'
import './App.scss';

function Encyclopedia() {

  const align = {
    textAlign: 'center',
    padding: '1rem',
    margin: '1rem',
  }

  return (
    <>
    <div>
      <h1 style={align}></h1>
      <div className='container'>
        <Dropdown title='Explore' items={items} multiSelect />
      </div>
    </div>
     </>
  )
};

export default Encyclopedia;