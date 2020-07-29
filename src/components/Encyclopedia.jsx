// import React, { useState } from 'react';
import React, { Component } from 'react';
import Dropdown from './Dropdown/Dropdown';
import items from './Dropdown/Items'
import './App.scss';

function Encyclopedia() {

  return (
    <>
    <div>
      <h1>Hi</h1>
      <div className='container'>
        <Dropdown title='Explore' items={items} multiSelect />
      </div>
    </div>
     </>
  )
};

export default Encyclopedia;