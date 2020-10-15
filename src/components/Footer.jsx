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
          <a href="https://www.facebook.com/Grant-Us-Funding-104687287971432" className="fab fa-facebook fa-2x" style={fabLinkStyle}> </a>
          <a href="https://twitter.com/GrantUsFunding" className="fab fa-twitter fa-2x" style={fabLinkStyle}> </a>
          {/* <a href="/tbd" className="fab fa-instagram fa-2x" style={fabLinkStyle}> </a> */}
          <a href="https://www.linkedin.com/in/grantusfunding/" className="fab fa-linkedin fa-2x" style={fabLinkStyle}> </a>
          <a href="https://www.youtube.com/channel/UCWO63zfjdC941HVwvTK_kFw?guided_help_flow=3" className="fab fa-youtube fa-2x" style={fabLinkStyle}> </a>
        </div>
      </div>
    </>
  )
}

