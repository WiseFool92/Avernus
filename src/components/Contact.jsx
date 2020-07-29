import React from 'react';
import LeMe from './Img/LeMe.jpg'

function Contact() {

  const contactStyle = {
    marginLeft: '1.25vw',
    marginRight: '1.25vw',
    padding: '5rem',
    fontWeight: 'normal',
    // display: 'flex',
    justifyContent: 'space-around',
  }
  const contactNate = {
    height: '45vh',
    width: '15vw',
  }
  const contactAlign = {
    textAlign: 'center'
  }
  const contactJames = {
    float: 'right'
  }

  return (
    <>
    <div style={contactStyle}>
      <h3 style={contactAlign}>Co-Founders</h3>
    
      <img src={LeMe} style={contactNate}></img>
        <em><h4>Nathan Watkins-Hoagland</h4></em>
          <p>watkins92@gmail.com</p>
        <div style={contactJames}>
          <em><h4>James Breslin</h4></em>
        </div>
    
    </div>
    </>
  )
};

export default Contact;


