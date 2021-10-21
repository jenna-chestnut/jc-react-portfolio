import './Footer.css';
import React from 'react';
import logo from '../../images/logo.png';
import githubIcon from '../../images/github-icon-tiny.png';
import twitterIcon from '../../images/twitter-icon-tiny.png';
import linkedInIcon from '../../images/linkedin-icon-tiny.png';
import instagramIcon from '../../images/instagram-icon-tiny.png';

class Footer extends React.Component {
  render() {
      return (
        <footer>
          <hr className='footer-bar'></hr>
            <div className='footer-details'>
            <img className='item logo' src={logo} alt='logo' width='100'/>
            <div className='item spacr'></div>
            <div className='item group footer-contact'>
                <span>Jenna Chestnut / <a href='https://linktr.ee/jenna.chestnut' target='_blank' rel='noopener noreferrer'><b>@Jennabot5000</b></a>
                </span>
                <div className='tiny-icons'>
                <a href='https://github.com/jenna-chestnut' target="_blank" rel="noreferrer"><img src={githubIcon} alt='tiny github icon'/></a>
                <a href='https://twitter.com/Jennabot5000' target="_blank" rel="noreferrer"><img src={twitterIcon} alt='tiny twitter icon'/></a>
                <a href='https://www.linkedin.com/in/jenna-chestnut/' target="_blank" rel="noreferrer"><img src={linkedInIcon} alt='tiny linkedin icon'/></a>
                <a href='https://www.instagram.com/jennabot5000/' target="_blank" rel="noreferrer"><img src={instagramIcon} alt='tiny instagram icon'/></a>
                </div>
                <span className='lil-r'>Created with React</span>
            </div>
            </div>
        </footer>
      );
    }
}

export default Footer;