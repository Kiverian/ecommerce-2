import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <a href="https://www.facebook.com/" class="fa fa-facebook" aria-label="Facebook" ></a>
        <a href="https://twitter.com/" class="fa fa-twitter" aria-label="Twitter"></a>
        <a href="https://www.instagram.com/" class="fa fa-instagram" aria-label="Instagram"></a>
        <a href="https://www.youtube.com/" class="fa fa-youtube" aria-label="Youtube"></a>
        <a href="https://www.snapchat.com" className="fa fa-snapchat"></a>
        <figure><img className="logo" src="https://bit.ly/3nieETa" alt="logo" />
          <p className="copyright">&copy;KP 2020
    </p>
        </figure>
      </footer>
    </div>
  )
};
export default Footer;