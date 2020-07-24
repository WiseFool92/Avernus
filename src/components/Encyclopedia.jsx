import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownItem } from 'reactstrap';

function Encyclopedia() {

  return (
    <>
      <DropdownButton
        alignRight
      >
        <DropdownItem eventKey = 'Regions'>Regions</DropdownItem>
        <DropdownItem eventKey = 'Beastiary'>Beastiary</DropdownItem>
      </DropdownButton>
      
    </>
  )
};

export default Encyclopedia;