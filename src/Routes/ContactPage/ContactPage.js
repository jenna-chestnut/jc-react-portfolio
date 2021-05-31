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
			  <h4 className="center">LET'S CONNECT</h4>
			  <p>
				My past work history has always involved working with a closely knit
				team. While I have been able to manage and complete tasks in
				solitude, cooperation and collaboration can be paramount in
				successfully achieving goals. I would love to meet and work with others that have the same
				passion!
			  </p>
	
			  <p className="center">
				If you are looking for a coding buddy - 
         <a href="https://linktr.ee/jenna.chestnut" target="_blank"
                rel="noreferrer" >let's connect</a>!
			  </p>
        </div></div>
        </Fade>
        
        <Fade cascade>
        <div className='group'>

        <div className='item group'>
			  <div className="r-d">
				<h4>SERVICES PROVIDED</h4>
				<p>Static and Dynamic Web Development</p>
				<p>Responsive Design</p>
				<p>Website Redesign</p>
				<p>Website Management</p>
				<p>Server Side Programming</p>
				<p>Web Based Applications</p>
				<p>Membership Services</p>
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
            <p>Ideas, advice, and new friends are welcome!</p>
            <p className="linktree">
              <a href="https://linktr.ee/jenna.chestnut" target="_blank"
                rel="noreferrer" ><img src={linkTreeLogo} alt="LinkTree"/></a
              >
            </p>
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
      </div>

      <Fade>
      <div className='contact-form'>
      <ContactForm />
      </div>
      </Fade>
      </>
      );
    }
}

export default ContactPage;