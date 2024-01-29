import './ServicesPage.css';
import React from 'react';
import { Link } from 'react-router-dom';

class ServicesPage extends React.Component {
	render() {
		return (
			<div className="services-page">
				<div className="wrapper">
					<p className="topspace center">
						<a href="#services">Jump to Services Breakdown</a>
					</p>
					<h1 className="topspace center">Why hire a consultant?</h1>
					<hr />
					<article className="bottomspace">
						<h2>&#128565;&zwj;&#128171; You're overwhelmed.</h2>
						<p>
							You took the leap and started your own business - and things are
							finally taking off! You’re seeing more clients, making more sales,
							and expanding your reach.
						</p>
						<p>
							You know there is more to be done… but now that you’re busier,
							you’re so bogged down by the day to day. You’re stretched as thin
							as possible.
						</p>
						<p>
							So you keep pushing things off, turning opportunities down, saying
							“no” when you want to say “yes” - and saying “yes” when you want
							to say “no”.
						</p>
						<p>
							<b>
								With the right structure in place, your creative genius could
								thrive and continue to propel your business.
							</b>{' '}
							(You know that it’s totally possible because you’ve seen other
							small businesses do the same!){' '}
						</p>
						<p>
							But your expertise is in the vision, and the thought of learning
							and organizing and building systems, and writing SOPs, and hiring
							an assistant, and… you get it. It’s a lot of small details, and
							you’re on a mission to change lives.{' '}
						</p>
						<p>
							<b>
								You need someone detail oriented, organized and strategic to
								help structure/optimize what you already have in place - and
								help implement what you're envisioning for the future of your
								company.
							</b>
						</p>
					</article>
					<article className="topspace bottomspace">
						<h2>&#128012; You're stuck.</h2>
						<p>
							You are passionate about what you do, and you KNOW you can make a
							huge difference in people's lives.. you've seen it happen in real
							time. Your clients love you!
						</p>
						<p>
							<i>
								Despite this, your business isn't moving the way you want it to.
							</i>{' '}
							You're not helping as many people as you know you're capable of.
						</p>
						<p>
							<b>
								You need someone with an outside perspective that can breathe
								new life into your business, and offer new insight on what may
								be missing (or unecessary) when it comes to your goals.
							</b>
						</p>
					</article>
					<article className="bottomspace">
						<h2 className="topspace">&#128200; You're ready to level up.</h2>
						<p>
							You are a solo entrepreneur and things are going pretty well, but
							you're getting pretty tired of having to do everything by
							yourself.
						</p>
						<p>
							It isn't overwhelming (yet) and you want to make the space to keep
							growing in a sustainable way. This means hiring a team, and
							systemetizing your operations - so you can enjoy some time off
							while your business continues to run.
						</p>
						<p>
							<b>
								You need someone with experience in supporting the journey from
								solo entrepreneurship to CEO, so you can get your ducks in a row
								in a low-risk way before expanding your team.
							</b>
						</p>
					</article>
					<article className="bottomspace">
						<h2 className="topspace">&#128064; You have other priorities.</h2>
						<p>
							Simply put, you don't want to do a particular project (like
							creating a sales funnel or setting up automations) and would like
							to outsource it.
						</p>
						<p>
							<b>
								You need someone autonomous, dependable and efficient to
								understand your vision and make it tangible.
							</b>
						</p>
					</article>
					<article className="topspace bottomspace">
						<h2 className="center">This is where I come in!</h2>
						<p>
							I have over 10 years of experience working customer facing,
							technical and leadership positions in a fast-paced environment.
							Since 2017, I have developed a unique skill set that enables me to
							strengthen small businesses through automations, systems, SOPs,
							templates, and other business processes.{' '}
						</p>
						<p>
							My skills are honed in time management, communication,
							organization and problem solving.
						</p>
						<p>
							<b>
								My goal is to establish the space and stability you need to do
								what only YOU can do.
							</b>
						</p>
						<p>
							The real magic happens when you’re able to live in your zone of
							genius, without swimming knee deep in email replies or searching
							for data in a stack of unorganized files.
						</p>
						<p>
							My experience as Operations Manager and Web Developer gives me a
							leg up for this goal. In this digital landscape, so much of what
							you do can be automated or organized digitally, whether your
							business is virtual or brick-and-mortar! As a technically
							proficient Operations Manager, I not only have the must-have
							business skills such as strategic planning, hiring, creating
							Standard Operating Procedures, data tracking, and communication -
							I can also find and share ways to leverage tech to meet your
							needs.
						</p>
						<h3>
							Everyone is different, your business is unique, and the
							possibilities are endless. I will never take a one-size-fits-all
							approach. Take a look at my services &{' '}
							<a
								href="https://form.jotform.com/jennachestnut/restructsure"
								rel="noreferrer"
								target="_blank"
							>
								let’s chat
							</a>
							!
						</h3>
					</article>
				</div>
				<div className="purply-tint" id="services">
					<article>
						<h1 className="topspace center">Services</h1>
						<hr />
					</article>
					<div className="open-to-work topspace center">
						<a
							className="message-button"
							href="https://form.jotform.com/jennachestnut/restructsure"
							rel="noreferrer"
							target="_blank"
						>
							Inquire Cost & Availability
						</a>
						<br />
						<p className="offers">
							Systems Consulting and Redesign | Business Consulting | Automation
							Strategist
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ServicesPage;
