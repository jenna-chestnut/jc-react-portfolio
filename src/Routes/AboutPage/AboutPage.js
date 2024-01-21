import './AboutPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import headShotImg from '../../images/jenna-sitting-cropped-popout.png';
import jennaSalemHike from '../../images/jenna-and-salem-on-mountain-square.jpg';
import MilestonesWidget from '../../Components/MilestonesWidget/MilestonesWidget';
import { Milestones } from './Milestones';

class AboutPage extends React.Component {
	renderMilestoneWidget() {
		return Milestones.map((el, idx) => {
			return <MilestonesWidget key={idx} id={idx} mS={el} />;
		});
	}

	render() {
		return (
			<article id="aboutme" className="about-page">
				<div className="toppadding bottompadding green-circle-bg">
					<div className="wrapper">
						<Fade duration={2000}>
							<div className="group">
								<h2 className="mobile-h2">ABOUT ME</h2>

								<div className="item about-photo">
									<h2 className="desktop-h2">ABOUT ME</h2>
									<img src={headShotImg} alt="Jenna smiling" />
								</div>

								<div className="item about-text-group">
									<p>
										Since my first login, I've always had a penchant for
										navigating computer systems. The purposeful shift from
										restaurant industry to an administrative role in 2017 gave
										me the opportunity to further explore my tech skills, and
										fulfill my drive to improve the lives of others.
									</p>

									<p>
										As the go-to person for error messages, website tweaks and
										needed fixes when IT wasn't around, I knew that I wanted to
										accomplish much more.
									</p>
								</div>
							</div>

							<p className="toppadding">
								Since early 2021, I have obtained an immersive{' '}
								<Link to="/portfolio">
									<b>web development</b>
								</Link>{' '}
								certificate, built my first paid website, and stepped into
								multiple senior administrative roles to make this dream a
								reality.
							</p>

							<p>
								<b>
									Now, I am a consultant and systems designer for small
									businesses, solo entrepreneurs and other organizations.
								</b>
							</p>

							<p>
								My creative mind, eye for design and analytical nature shine
								through the organizational, systems and automation work I
								produce. My experience as Operations Manager gives me the
								opportunity to flex my business, organizational, interpersonal
								and leadership skills. My tech savvy nature gives me additional
								perspective, and with it an advantage in facilitating successful
								automated marketing events, data collection and workflow
								processes.
							</p>

							<p>
								My experience and passion for tech, combined with my history in
								the service industry gives me additional perspective — and with
								it an advantage in facilitating successful automated marketing
								events, data collection and workflow processes.
							</p>

							<h3 className="topspace bottompadding">
								My true passion is making a positive impact by adding structure
								to systems, strategy to goals, organization to disarray, and
								form to ideas.{' '}
								<b>
									I honor the place between chaos and order that facilitates
									creation and innovation.
								</b>
							</h3>
						</Fade>
					</div>

					<Fade duration={2000}>
						<section className="lightblue">
							<div className="wrapper group">
								<div className="item outside-of-tech">
									<div className="to-center">
										<h4 className="center">OUTSIDE OF TECH</h4>
										<p>
											During my down time, I love exploring in nature and hiking
											with my dog Salem! I love taking pictures and have a Nikon
											D3300. I've always enjoyed video games as well - Outer
											Wilds is a personal favorite. I also enjoy singing,
											playing the flute & guitar, painting, and trying/making
											new foods.
										</p>
									</div>
								</div>

								<div className="item">
									<img src={jennaSalemHike} alt="Jenna and Salem hiking" />
								</div>
							</div>
						</section>
					</Fade>
				</div>

				<h2>MILESTONES</h2>
				<div className="milestones-widget">{this.renderMilestoneWidget()}</div>

				<div className="milestones-list">
					<ul>
						<Fade duration={2000} cascade>
							<li>2006: Edited first code</li>
							<li>2010: Obtained GED</li>
							<li>2016: Restaurant management role</li>
							<li>2018: Senior role at a small business</li>
							<li>2021: Immersive web development certificatation</li>
							<li>2021: Web development role</li>
							<li>2021: Operations manager role</li>
							<li>2021: CRM/Systems consultant role</li>
							<li>2022: Self employment</li>
						</Fade>
					</ul>
				</div>
			</article>
		);
	}
}

export default AboutPage;
