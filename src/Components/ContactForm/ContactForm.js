import './ContactForm.css';
import React from 'react';

class ContactForm extends React.Component {
  render() {

      return (
        <div className="wrapper">
        <form action="https://formspree.io/f/mayrqnpv" method="post">
          <fieldset>
            <legend>SEND A MESSAGE</legend>
            <p>Inquiries | Recruitment | Networking | Feedback</p>

            <label htmlFor="name">NAME:</label>
            <input type="text" id="name" name="name" />

            <label className="email" htmlFor="emailaddress">EMAIL:</label>
            <input type="email" name="_replyto" id="emailaddress" />

            <label className="email" htmlFor="email">MESSAGE:</label>
            <textarea id="email" name="message"></textarea>

            <button type="submit">SEND</button>
          </fieldset>
        </form>
      </div>
      );
    }
}

export default ContactForm;