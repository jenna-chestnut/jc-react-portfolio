import './ContactPage.css';
import gitHubLogo from '../../images/githublogo.png';
import linkedInLogo from '../../images/linkedin-icon.png';
import linkTreeLogo from '../../images/linktree-icon.png';
import emailIcon from '../../images/email-icon-orange.jpg';
import resumeImg from '../../images/resume-screenshot.jpg';
import React from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Fade from 'react-reveal/Fade';

class ContactPage extends React.Component {
  render() {

      return (
          <>
        <div className="contact-page">
        <h2>CONTACT</h2>

        <Fade>
        <div className="lets-connect">
			  <div className="wrapper">
			  <h4 className="center">INQUIRIES WELCOME</h4>
			  <p>
				My true passion is making a positive impact in small businesses by adding structure to systems, and form to ideas.</p>
        <p>In addition to that, I recognize that optimized systems and automations help to decrease human error, improve consistency/efficiency, and ultimately save the thing we all value the most - our time!
			  </p>
	
			  <p className="center">
				If you are looking to build a website, or find yourself bogged down with the backend work in your small business - 
         <a href="https://linktr.ee/jenna.chestnut" target="_blank"
                rel="noreferrer" > let's connect</a> !
			  </p>
        </div></div>
        </Fade>
        
        <Fade cascade>
        <div className='group'>

        <div className='item group'>
			  <div className="r-d">
				<h4>SERVICES PROVIDED</h4>
				<p><b>Static and Dynamic Web Development</b></p>
        <p>Responsive Design - Website Redesign - Website Management - Server Side Programming 
          - Web Based Applications - Membership Services</p>

        <p><b>Systems Consulting</b></p>
        <p>CRM - Integration - Automation - File Organization and Access 
          - Task Applications - Process Optimization</p>

        <p><b>Virtual Assistant</b></p>
        <p>Schedule Management - Project Management - Email Correspondence 
          - Data Entry - Business Metric Tracking - Marketing Assistant - Executive Assistant</p>
			  </div>
			  </div>

      <div className='item resume center'>
        <div className='r-d'>

        <img src={resumeImg} alt='resume'/>

        <a className='resume-button' href='https://drive.google.com/file/d/1WdKVTFeqqK7vMTJYhWtU4rV_lqnBo0GE/view?usp=sharing' target='_blank' rel='noreferrer'>View Resume</a>
        </div></div></div>
        </Fade>

        </div>
        

        <article id="contactme">
          <div className="center wrapper">
            <h3 className='topspace'>CONTACT</h3>
          </div>
        </article>
      <div className="center wrapper buttons bottomspace">
        <div className="item">
          <a href="https://www.linkedin.com/in/jenna-chestnut/" target="_blank" rel="noreferrer"
            ><img src={linkedInLogo} alt="LinkedIn"
          /></a>
        </div>
        <div className="item">
          <a href="https://github.com/jenna-chestnut" target="_blank"
            rel="noreferrer"><img src={gitHubLogo} alt="GitHub"
          /></a>
        </div>
        <div className="item">
          <a href="mailto:jennabot5000@gmail.com" target='_blank'
            rel="noreferrer"><img src={emailIcon} alt="Send an Email"
          /></a>
        </div>
        <div className="item">
        <a href="https://linktr.ee/jenna.chestnut" target="_blank"
                rel="noreferrer" ><img src={linkTreeLogo} alt="LinkTree"/>
        </a>
        </div>
      </div>

      <Fade>
      <div className='contact-form' id='contact-form'>
      <ContactForm />
      </div>
      </Fade>
      </>
      );
    }
}

export default ContactPage;