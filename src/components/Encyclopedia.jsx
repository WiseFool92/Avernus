// import React, { useState } from 'react';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown';
// import { DropdownItem } from 'reactstrap';
// import Dropdown from 'react';
import Dropdown from 'react';
import React, { Component } from 'react';

function Encyclopedia() {

  return (
    <>
    <div>
      <h1>Hi</h1>
    </div>
      <DropdownButton
        alignRight
      >
        <DropdownItem eventKey = 'Regions'>Regions</DropdownItem>
        <DropdownItem eventKey = 'Beastiary'>Beastiary</DropdownItem>
      </DropdownButton>
       


           <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> 
     </>
  )
};

export default Encyclopedia;




// class Encyclopedia extends Component {
//   // constructor(props) {
//   //   super(props);
//   // }

//   render() {
//     return (
//       <>
//           <Dropdown>
//             <Dropdown.Toggle variant="success" id="dropdown-basic">
//               Dropdown Button
//             </Dropdown.Toggle>

//             <Dropdown.Menu>
//               <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//       </>
//     );
//   }
// };

// export default Encyclopedia; 