import React from 'react';
import { Link } from 'react-router-dom';

const footer = {

};

const fabLinkStyle = {

};

const links = {

};

const footerLinks = {

};

export default function Footer() {
  return (
    <>
      <div style={footer}>
        <div style={{marginTop: '1rem', paddingTop: '2rem'}}>
          <a href="https://github.com/WiseFool92" className="fab fa-github fa-2x" style={fabLinkStyle}> </a>
          <a href="https://www.instagram.com/mr.supernova/" className="fab fa-instagram fa-2x" style={fabLinkStyle}> </a>
          <a href="https://www.linkedin.com/in/nathan-watkins-hoagland/" className="fab fa-linkedin fa-2x" style={fabLinkStyle}> </a>
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
            <p style={{background: '#959595', marginBottom: '0rem', marginTop: '-2rem'}}>
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

