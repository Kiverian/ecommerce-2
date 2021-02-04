import React from 'react';
import './Footer.css'

const Footer = () =>{
    return (
        <footer>
    <a className="social-media" href="https://www.facebook.com" rel="noopener noreferrer">
      <i className="fab fa-facebook"></i>
  </a>

  <a className="social-media" href="https://www.instagram.com" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
    </a>

  <a className="social-media" href="https://www.twitter.com" rel="noopener noreferrer">
    <i className="fab fa-twitter"></i>
  </a>

  <a className="social-media" href="https://www.youtube.com" rel="noopener noreferrer">
    <i className="fab fa-youtube"></i>
</a>

<a className="social-media" href="https://www.snapchat.com" rel="noopener noreferrer">
    <i className="fab fa-snapchat"></i>
</a>

  <figure><img className="logo" src="https://bit.ly/3nieETa" alt="logo"/>
    <p className ="copyright">&copy;KP 2020 | OFFICIAL STORE. ALL RIGHTS RESERVED.
    </p>
  </figure>
</footer>
    )};

    export default Footer;