import './ContactPage.css';
import React from 'react';

class ContactPage extends React.Component {
  render() {

      return (
          <>
        <div className="contact-page">
        <h2>CONTACT</h2>
        <div class="bubble">
			<div class="wide">
			  <h4 class="center topspace">LET'S CONNECT</h4>
			  <p>
				My past work history has always involved working with a closely knit
				team. While I have been able to manage and complete tasks in
				solitude, cooperation and collaboration can be paramount in
				successfully achieving goals. As someone new and enthusiastic to the
				field I would love to meet and work with others that have the same
				passion... whether that be teammates to embrace growth and learning
				with, or a mentor for guidance.
			  </p>
	
			  <p class="center">
				If you are looking for a study buddy, a mentee or a future web
				developer - <a href="#contactme">let's connect</a>!
			  </p>
	
			  <div class="center bottomspace">
				<h4 class="topspace">SERVICES PROVIDED</h4>
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
        <div class="lightgreen">
        <article id="contactme">
          <div class="center wrapper">
            <h3>CONTACT</h3>
            <p>Ideas, advice, recruitment and new friends are welcome!</p>
            <p class="contactme">
              <a href="https://linktr.ee/jenna.chestnut" target="_blank"
                rel="noreferrer" >[Click here for my Linktree]</a
              >
            </p>
          </div>
        </article>
      <div class="center wrapper buttons">
        <div class="item">
          <a href="https://www.linkedin.com/in/jenna-chestnut/" target="_blank" rel="noreferrer"
            ><img src="./images/linkedin-icon.png" alt="LinkedIn"
          /></a>
        </div>
        <div class="item">
          <a href="https://github.com/jenna-chestnut" target="_blank"
            rel="noreferrer"><img src="./images/githublogo.png" alt="GitHub"
          /></a>
        </div>
        <div class="item">
          <a href="mailto:jennabot5000@gmail.com"
            ><img src="./images/email-icon-orange.jpg" alt="Send an Email"
          /></a>
        </div>
      </div>

      </div>

      <div class="wide">
        <form action="https://formspree.io/f/xdopldyp" method="post">
          <fieldset>
            <legend>SEND A MESSAGE</legend>

            <label class="topspace" for="name">NAME:</label>
            <input type="text" id="name" name="name" />

            <label class="email" for="emailaddress">EMAIL:</label>
            <input type="email" name="_replyto" id="emailaddress" />

            <label class="email" for="email">MESSAGE:</label>
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