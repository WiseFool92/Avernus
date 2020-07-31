import React from 'react';
import LeMe from './Img/LeMe.jpg'
import na from './Img/na.jpg'

function Contact() {

  const contactStyle = {
    marginLeft: '1.25vw',
    marginRight: '1.25vw',
    padding: '5rem',
    fontWeight: 'normal',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
  const contactNate = {
    height: '50vh',
    width: '15vw',
    borderRadius: '5px',
    boxShadow: '5px 5px 8px 5px rgba(0, 0, 0, 0.449)',
  }
  const contactAlign = {
    textAlign: 'center',
  }
  const contactJames = {
    height: '50vh',
    width: '15vw',
    borderRadius: '5px',
    boxShadow: '5px 5px 8px 5px rgba(0, 0, 0, 0.449)',
    // float: 'right'
  }

  return (
    <>
      <div className='contactBackground'>
        <h1 style={contactAlign}>Co-Founders</h1>
        <div className='row' style={contactStyle}>
          <div className='col-md-4'>
            <img src={LeMe} style={contactNate} alt='nate' />
            <em><h4>Nathan Watkins-Hoagland</h4></em>
              <p>watkins92@gmail.com</p>
          </div>
          <div className='col-md-4'>
            <div>
              <img src={na} style={contactJames} alt='na' />
              <em><h4>James Breslin</h4></em>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contact;


