import './ContactPage.css';
import gitHubLogo from '../../images/githublogo.png';
import linkedInLogo from '../../images/linkedin-icon.png';
import linkTreeLogo from '../../images/linktree-icon.png';
import emailIcon from '../../images/email-icon-orange.jpg';
import React from 'react';

class ContactPage extends React.Component {
  render() {

      return (
          <>
        <div className="contact-page">
        <h2>CONTACT</h2>
        <div className="bubble">
			<div className="wide">
			  <h4 className="center topspace">LET'S CONNECT</h4>
			  <p>
				My past work history has always involved working with a closely knit
				team. While I have been able to manage and complete tasks in
				solitude, cooperation and collaboration can be paramount in
				successfully achieving goals. As someone new and enthusiastic to the
				field I would love to meet and work with others that have the same
				passion... whether that be teammates to embrace growth and learning
				with, or a mentor for guidance.
			  </p>
	
			  <p className="center">
				If you are looking for a study buddy, a mentee or a future web
				developer - <a href="#contactme">let's connect</a>!
			  </p>
	
			  <div className="center bottomspace">
				<h4 className="topspace">SERVICES PROVIDED</h4>
				<p>Static and Dynamic Web Development</p>
				<p>Responsive Design</p>
				<p>Website Redesign</p>
				<p>Website Management</p>
				<p>Server Side Programming</p>
				<p>Web Based Applications</p>
				<p>Membership Services</p>
			  </div>
			</div>
		  </div>
        </div>
        <div className="lightgreen">
        <article id="contactme">
          <div className="center wrapper">
            <h3>CONTACT</h3>
            <p>Ideas, advice, recruitment and new friends are welcome!</p>
            <p className="linktree">
              <a href="https://linktr.ee/jenna.chestnut" target="_blank"
                rel="noreferrer" ><img src={linkTreeLogo} alt="LinkTree"/></a
              >
            </p>
          </div>
        </article>
      <div className="center wrapper buttons">
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
          <a href="mailto:jennabot5000@gmail.com"
            ><img src={emailIcon} alt="Send an Email"
          /></a>
        </div>
      </div>

      </div>

      <div className="wide">
        <form action="https://formspree.io/f/xdopldyp" method="post">
          <fieldset>
            <legend>SEND A MESSAGE</legend>

            <label className="topspace" for="name">NAME:</label>
            <input type="text" id="name" name="name" />

            <label className="email" for="emailaddress">EMAIL:</label>
            <input type="email" name="_replyto" id="emailaddress" />

            <label className="email" for="email">MESSAGE:</label>
            <textarea id="email" name="message"></textarea>

            <button type="submit">SEND</button>
          </fieldset>
        </form>
      </div>
      </>
      );
    }
}

export default ContactPage;