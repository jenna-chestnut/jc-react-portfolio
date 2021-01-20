import './AboutPage.css';
import React from 'react';
import {Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import jennaDeskShot from '../../images/jenna-at-desk.jpg';
import jennaSalemHike from '../../images/jenna-and-salem-on-mountain - square.jpg';
import MilestonesWidget from '../../Components/MilestonesWidget/MilestonesWidget';
import { Milestones } from './Milestones';

class AboutPage extends React.Component {

	renderMilestoneWidget() {
		return Milestones.map((el, idx) => {
			return <MilestonesWidget
			key={idx}
			id={idx}
			mS={el}
			/>
		})
	}

  render() {

      return (
        <div className="about-page">
			<div className='about-hero'>
			<h2>ABOUT ME</h2>
			<img src={jennaDeskShot} alt='Jenna at desk'/>
			</div>
			<article id="aboutme" className="toppadding bottompadding">
			<div className="wrapper">
			<Fade duration={2000}>
			  <p>
				Since my first login, I've always had a penchant for navigating
				computer systems. The purposeful shift from restaurant industry to
				the medical field in 2017 gave me an opportunity to further explore
				my tech skills, and fulfill my drive to improve the lives of others.
			  </p>
	
			  <p className="bottompadding">
				As the go-to person for error messages, website tweaks and needed
				fixes when IT isn't around, I knew that I wanted to learn and
				accomplish much more. Since joining the Thinkful Engineering Immersion program - 
				I have developed my first website, currently work as a systems consultant, 
				and have made this goal a reality.
			  </p>
			  </Fade>
			  </div>

			<Fade duration={2000}>
			  <section className="lightblue">
				  <div className="wrapper group">
			  <div className="item">
			  <img src={jennaSalemHike} alt='Jenna and Salem hiking'/>
				 </div>
				 
				<div className="item outside-of-tech">
					<div className="to-center">
				  <h4 className="center">OUTSIDE OF TECH</h4>
				  <p>
					During my down time, I love exploring in nature and hiking with
					my dog Salem! I love taking pictures and have a Nikon D3300. I've always
					enjoyed video games as well. I'm currently into first person
					survival style games that involve puzzles - Outer Wilds is a
					personal favorite. I also enjoy singing, painting, and
					trying/making new foods.
				  </p>
				</div></div>
				</div>
			  </section>
			  </Fade>
			</article>

			<h2>MILESTONES</h2>
			<div className='milestones-widget'>
			{this.renderMilestoneWidget()}
			</div>

			
			  <div className='milestones-list'>
				  <ul>
				  <Fade duration={2000} cascade>
					<li>Born in Alabama</li>
					<li>
					  Edited first code in 2006 <br />
					  (think MySpace)
					</li>
					<li>Obtained GED</li>
					<li>Restaurant management role</li>
					<li>Senior role at a small business</li>
					<li>Passed all technical interviews <br />with Thinkful w/ perfect scores</li>
					<li>Web development role</li>
					<li>CRM consultant role</li>
					<li>Built first full stack application</li>
					</Fade>
				  </ul>
				  </div>

			<div className='portfolio-link'>
			<Link to='/portfolio'>View Portfolio</Link>
			</div>
		  </div>
      );
    }
}

export default AboutPage;