import React from 'react';
import { Link } from 'react-router-dom';
import background from './Img/navBackImg3.jpg';

const footer = {
  display: 'flex',
  position: 'absolute',
  width: '100%',
  // background: '#959595',
  // backgroundImage: url(/Img/navBackImg3.jpg),
  backgroundImage: `url(${background})`,
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
  height: '200px',
  padding: '1rem'
};

const fabLinkStyle = {
  color: '#FFFFFF',
  marginLeft: '1vw',
  marginRight: '1vw'
};

const links = {
  color: '#FFFFFF',
};

const footerLinks = {
  float: 'left',
  color: '#fff',
};

export default function Footer() {
  return (
    <>
      <div style={footer}>
        <div style={{marginTop: '1rem', paddingTop: '2rem'}}>
          <a href="https://github.com/WiseFool92" className="fab fa-github fa-2x" style={fabLinkStyle}> </a>
          <a href="https://www.linkedin.com/in/nathan-watkins-hoagland/" className="fab fa-linkedin fa-2x" style={fabLinkStyle}> </a>
          <a href="https://www.instagram.com/mr.supernova/" className="fab fa-instagram fa-2x" style={fabLinkStyle}> </a>
          <a href="https://www.youtube.com/channel/UCo4USBh5QCeNpv9nvDYoX8Q?view_as=subscriber" className="fab fa-youtube fa-2x" style={fabLinkStyle}> </a>
        </div>
        <div className='container'>
          <div className='row'>
            <ul style={{listStyle: 'none'}}>
              <li>
                <Link to='/contact'><span style={footerLinks}>Contact</span></Link>
              </li>
            </ul>
          </div>
          <div>
            <p style={{color: '#FFFFFF', marginBottom: '0rem', marginTop: '-2rem'}}>
              &copy; 2020-{new Date().getFullYear()}, Avernus
              <br/>
              All Right Reserved | <Link to='/terms'><span style={links}>Terms of Service</span></Link> | <Link to='/privacypolicy'><span style={links}>Privacy Policy</span></Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

