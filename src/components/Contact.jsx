import React from 'react';
import LeMe from './Img/LeMe.jpg'
import na from './Img/na.jpg'
import contactSplash from './Img/contactSplash.jpg'

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
    height: '55vh',
    width: '15vw',
    borderRadius: '5px',
    boxShadow: '5px 5px 8px 5px rgba(0, 0, 0, 0.449)',
  }
  const contactTitle = {
    textAlign: 'center',
    padding: '3rem',
    marginTop: '0rem',
    color: 'ivory',
  }
  const contactJames = {
    height: '55vh',
    width: '15vw',
    borderRadius: '5px',
    boxShadow: '5px 5px 8px 5px rgba(0, 0, 0, 0.449)',
  }
  
  const background = {
    backgroundImage: `url(${contactSplash})`,
    height: '100%',
    height: '100%',
    // backgroundSize: 'cover',
  }
  
  const textStyle = {
    color: 'ivory'
    
  }

  return (
    <>
      <div style={background}>
        <h1 style={contactTitle}>Founders</h1>
        <div className='row' style={contactStyle}>
          <div className='col-md-4'>
            <img src={LeMe} style={contactNate} alt='nate' />
            <em><h4 style={textStyle}>Nathan Watkins-Hoagland</h4></em>
              <p style={textStyle}>watkins92@gmail.com</p>
          </div>
          <div className='col-md-4'>
            <div>
              <img src={na} style={contactJames} alt='na' />
              <em><h4 style={textStyle}>James Breslin</h4></em>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contact;


