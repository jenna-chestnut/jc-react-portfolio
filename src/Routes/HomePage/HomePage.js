import './HomePage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/salemthedog-smiling.jpg';
import headshotImg from '../../images/selfie-square.jpg';
import servicesImg from '../../images/services-square.png';
import HomePageWindow from '../../Components/HomePageWindow/HomePageWindow';

const windowLinks = [
	{ link: '/about', img: headshotImg, text: 'About' },
	{ link: '/services', img: servicesImg, text: 'Services' },
	{ link: '/contact', img, text: 'Contact' },
];

class HomePage extends React.Component {
	HomePageWindows() {
		return windowLinks.map((el, idx) => {
			return <HomePageWindow key={idx} id={idx} wLink={el} />;
		});
	}

	render() {
		return (
			<div className="home-page">
				<div className="hp-w-container">{this.HomePageWindows()}</div>

				<img className="hp-headshot" src={headshotImg} alt="headshot" />

				<div className="wrapper">
					<article id="intro" className="center bottomspace">
						<h2 className="topspace hello">
							I'm <span className="my-name">Jenna</span>. <br /> I'm an
							operations manager and systems consultant.
						</h2>
						<hr />
						<p>
							I have a genuine love for technology and how it helps to better
							the world through connection, innovation and creation.
						</p>
						<p>
							I have also worked for small businesses since 2017, contributing
							to their success by improving systems, offering strategic insights
							and strengthening organization.
						</p>
						<p>
							<b>
								I'm passionate about utilizing my skills to help solo
								entrepreneurs and small businesses meet their goals.
							</b>
						</p>
						<p>
							I hope you enjoy my website. If you like what you see, let's
							<Link to="/contact">
								{' '}
								<b>connect</b>
							</Link>
							!
						</p>
					</article>
					<div className="open-to-work center">
						<a
							className="message-button"
							href="https://form.jotform.com/jennachestnut/restructsure"
							rel="noreferrer"
							target="_blank"
						>
							INQUIRE COST & AVAILABILITY
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

export default HomePage;
