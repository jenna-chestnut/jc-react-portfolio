import './ContactPage.css';
import gitHubLogo from '../../images/githublogo.png';
import linkedInLogo from '../../images/linkedin-icon.png';
import linkTreeLogo from '../../images/linktree-icon.png';
import emailIcon from '../../images/email-icon-orange.jpg';
import resumeImg from '../../images/resume-screenshot.jpeg';
import React from 'react';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

class ContactPage extends React.Component {
	render() {
		return (
			<>
				<div className="contact-page">
					<h2>WORK WITH ME</h2>

					<Fade>
						<div className="lets-connect">
							<div className="wrapper">
								<p className="topspace">
									My true passion is making a positive impact in small
									businesses by adding structure to systems, strategy to goals,
									organization to disarray, and form to ideas.
								</p>
								<p className="CTA">
									I have worked with multiple 6 figure businesses on their
									journey to 7 figures, with the highest (& most effective)
									priority of{' '}
									<i>
										supporting and facilitating the creative genius of the CEO.
									</i>
								</p>
								<p>
									I also recognize that optimized systems and automation helps
									to decrease human error, improve consistency/efficiency, and
									ultimately save the thing we all value the most - our time!
								</p>

								<h3 className="topspace bottomspace">
									If you find yourself bogged down with the backend work in your
									small business, drowning in details, or in need of a fresh set
									of eyes on your systems and strategies..
									<a
										href="https://form.jotform.com/jennachestnut/restructsure"
										target="_blank"
										rel="noreferrer"
									>
										{' '}
										let's connect
									</a>
									!
								</h3>
							</div>
						</div>
					</Fade>

					<Fade cascade>
						<div className="group">
							<div className="item group">
								<div className="r-d">
									<h3>SERVICES PROVIDED</h3>
									<p>
										<b>Consulting, Analysis & Coaching</b>
									</p>
									<p>
										Audits: Business, System, Automation, Website, Offerings -
										Strategy Session - Organization & Operation Insights -
										Calendar Analysis - Correspondence Insights - Lead &rarr;
										Client Pipeline Strategies
									</p>

									<p>
										<b>Tactical Action Steps</b>
									</p>
									<p>
										System Redesign - Integration Set Up - Automation Set Up -
										SOP Creation - Documentation - File & Resource Organization
										- Process Optimization - Metric Tracking Set Up - Website
										Updates - Schedule Creation & Execution - Lead &rarr; Client
										Pipeline Set Up - Inbox Organization
									</p>

									<p>
										<b>Supportive Activities</b>
									</p>
									<p>
										Project Management - Newsletter Building - Phone Script
										Creation - Team Delineation - Hiring & Training
									</p>
									<p>
										<Link to="/services">
											SERVICES BREAKDOWN & DESCRIPTIONS
										</Link>
									</p>
								</div>
							</div>

							<div className="item resume center">
								<div className="r-d">
									<img src={resumeImg} alt="resume" />

									<a
										className="resume-button"
										href="https://docs.google.com/document/d/1QtRc8BWAza9ZbMzCldLDIyplxnC3cdpD4l856SogEpk/edit?usp=sharing"
										target="_blank"
										rel="noreferrer"
									>
										View Resume
									</a>
								</div>
							</div>
						</div>
					</Fade>
				</div>

				<article id="contactme">
					<div className="center wrapper">
						<h3 className="topspace">CONTACT</h3>
					</div>
				</article>
				<div className="center wrapper buttons bottomspace">
					<div className="item">
						<a
							href="https://www.linkedin.com/in/jenna-chestnut/"
							target="_blank"
							rel="noreferrer"
						>
							<img src={linkedInLogo} alt="LinkedIn" />
						</a>
					</div>
					<div className="item">
						<a
							href="https://github.com/jenna-chestnut"
							target="_blank"
							rel="noreferrer"
						>
							<img src={gitHubLogo} alt="GitHub" />
						</a>
					</div>
					<div className="item">
						<a
							href="mailto:restructsure@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<img src={emailIcon} alt="Send an Email" />
						</a>
					</div>
					<div className="item">
						<a
							href="https://linktr.ee/jenna.chestnut"
							target="_blank"
							rel="noreferrer"
						>
							<img src={linkTreeLogo} alt="LinkTree" />
						</a>
					</div>
				</div>
				<div className="open-to-work topspace center bottomspace">
					<a
						className="message-button"
						href="https://form.jotform.com/jennachestnut/restructsure"
						rel="noreferrer"
						target="_blank"
					>
						Inquire Cost & Availability
					</a>
				</div>

				<Fade>
					<div className="contact-form" id="contact-form">
						<ContactForm />
					</div>
				</Fade>
			</>
		);
	}
}

export default ContactPage;
