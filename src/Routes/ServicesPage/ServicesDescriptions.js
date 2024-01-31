import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class ServicesDescription extends React.Component {
	render() {
		return (
			<div
				className="toppadding purply-tint bottompadding services-list"
				id="services"
			>
				<h1 className="topspace center">Services</h1>
				<p className="services-links center">
					<a href="#consulting">Consulting</a> | <a href="#action">Action</a> |{' '}
					<a href="#support">Support</a>
				</p>
				<hr />
				<div className="wrapper bottomspace">
					<article id="consulting">
						{/* CONSULTING SECTION */}
						<h2 className="first-service">Consulting, Analysis & Coaching</h2>
						<p className="center">
							<i>For when you need an outside perspective.</i>
						</p>
						<h3>Business Audit</h3>
						<p>
							We will virtually meet to chat about your goals and where you're
							struggling, stuck, or just want more out of your business/team. I
							will then explore your platforms based on our conversation, and
							offer my insights + specific action steps that myself or your team
							can implement.
						</p>
						<h3>Systems Audit</h3>
						<p>
							<b>
								Are your systems working for you, or are you working for your
								systems?
							</b>
						</p>
						<p>
							In this system audit, we will review the current platforms you’re
							using and discuss the following:
						</p>
						<p>
							A) Are you using the right systems, in the right ways?
							<br />
							B) Can you better leverage your existing systems?
							<br />
							C) Are there other apps or platforms to consider investing in?
							<br />
						</p>
						<h3>Website Audit</h3>
						<p>
							I will review your website and share my insights with you
							regarding user flow, promotional strategies and other ways to
							strengthen your website.
						</p>
						<h3>Email Correspondence Audit</h3>
						<p>
							I will hop into your inbox to review your current email
							correspondence, and offer insights on how to write a more
							impactful email - whether the goal is to inform, persude or
							redirect your clients/leads.
						</p>
						<h3>Additional Consulting Services</h3>
						<p>
							Audits: Automation, Offerings - Strategy Session -
							Organization & Operation Insights - Calendar Analysis - Lead →
							Client Pipeline Strategies
						</p>
					</article>
					{/* TACTICAL STEPS SECTION */}
					<article id="action">
						<h2>Tactical Action Steps</h2>
						<p className="center">
							<i>For when you're ready to make things happen.</i>
						</p>
						<h3>System Set Up & Documentation</h3>
						<p>
							If you’re happy with your systems, but know you want to do more
							with them, I will take your requests and work on the back end to
							make them happen!
						</p>
						<p>
							For every successful shift, I will create documentation for you
							and your team.
						</p>
						<p>
							For any unmet requests, we will brainstorm on how to make it
							happen another way.
						</p>
						<h3>Automation Set Up & Documentation</h3>
						<p>
							If you find you are doing repetitive work, it’s very possible that
							it can be automated. In this service, we are not trying to change
							any processes - instead we want to make things happen on their
							own. This can free up time for you and/or your team to do more of
							what CAN’T be automated.
						</p>
						<p>
							For every successful automation, I will create documentation for
							you and your team to easily locate and update if needed.
						</p>
						<h3>Templates & SOP Creation</h3>
						<p>
							I will find the patterns in the work you are doing, and create
							standardized templates and SOPs of that work for you and your
							team.
						</p>
						<h3>Inbox Organization</h3>
						<p>
							I will help to organize your inbox and reduce email overwhelm.
						</p>
						<h3>Newsletter Building</h3>
						<p>
							I will offer insights on how to get more subscribes, opens and
							clicks on your emails. This may include strengthening your
							existing newsletter or leveraging an opt-in to build an ideal
							audience.
						</p>
						<h3>Metric Tracking Set Up</h3>
						<p>
							<b>A metric observed is a metric improved!</b>{' '}
						</p>
						<p>
							If you’re not tracking any metrics right now, you may find this
							peek into the “numbers” from week to week & month to month
							extremely helpful. It is also a phenomenal way to hold your team
							accountable.
						</p>
						<p>
							{' '}
							I will dial in on the important metrics, create a tracking
							spreadsheet and create an SOP for you and your team. If access to
							the metrics can be automated in any way (depending on your
							systems) I will assist with that as well.
						</p>
						<h3>Website Edits</h3>
						<p>
							I have experience working with{' '}
							<Link to="/portfolio">website development & design.</Link> If you
							need help with editing your website, I will be happy to discuss
							this with you. If there are portions of the website that should be
							regularly updated, I will create an SOP for you and your team.
						</p>
						<h3>Additional Action Step Services</h3>
						<p>
							Task Management Optimization - Documentation & Document Review/Edits - File & Resource
							Organization - Process Optimization - Lead → Client Pipeline Set
							Up
						</p>
					</article>
					{/* SUPPORTIVE ACTIVITIES SECTION */}
					<article id="support">
						<h2>Supportive Activities</h2>
						<p className="center">
							<i>For stability and foundational resources.</i>
						</p>
						<h3>Hiring & Training</h3>
						<p>
							Hiring can be daunting if you're not sure what to look for or how
							to find the right fit - and sadly, hiring the wrong fit can leave
							you worse off than before.
						</p>
						<p>
							I will help you to find the right administrative employee to
							continue supporting your vision beyond our working relationship,
							using a proven multi-step hiring process to dial in on multiple
							strong candidates.{' '}
						</p>
						<p>
							I will also help to train them in the new systems and operations
							that we have developed. (If applicable.)
						</p>
						<h3>Sales Strategies</h3>
						<p>
							We will discuss how to leverage a conversation to better nurture a
							lead or lock in a sale. Once agreed, I will create a written
							script for you and your team to use and update as needed.
						</p>
						<h3>Schedule Structure & Organization</h3>
						<p>
							<b>
								Let's protect the absolute most valuable thing you have - your
								time.
							</b>
						</p>
						<p>
							I will take a look at your weekly schedule, discuss any issues you
							may have, and help you to dial in on a rhythm that works for you.
						</p>
						<p>
							We can also zoom out and lay out a quarterly or annual calendar.
						</p>
						<p>
							I will create a calendar framework for you and your team to work
							from and/or change if needed.
						</p>
						<h3>Team Delineation & Strengthening</h3>
						<p>
							I will help you leverage your team in a way that makes you feel
							GOOD about taking time off - knowing your business will still be
							running.
						</p>
					</article>
				</div>
			</div>
		);
	}
}

export default ServicesDescription;
