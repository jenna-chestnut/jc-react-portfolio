import './AboutPage.css';
import React from 'react';

class AboutPage extends React.Component {
  render() {

      return (
        <div className="about-page">
        <div className="darkgreen">
			<article id="aboutme" className="wide">
            <h2>ABOUT</h2>
			  <p>
				Since my first login, I've always had a penchant for navigating
				computer systems. The purposeful shift from restaurant industry to
				the medical field in 2017 gave me an opportunity to further explore
				my tech skills, and fulfill my drive to improve the lives of others.
			  </p>
	
			  <p className="bottomspace">
				As the go-to person for error messages, website tweaks and needed
				fixes when IT isn't around, I know that I want to learn and
				accomplish much more. Now that I have signed up for the Thinkful
				Engineering Immersion program, I am taking important steps to making
				this goal a reality.
			  </p>
	
			  <section className="group spacebetween bottomspace">
				<div className="item">
				  <h4 className="center">OUTSIDE OF TECH</h4>
				  <p>
					During my down time, I love exploring in nature and hiking with
					my dog
					<a href="./images/salemthedog-smiling.jpg" target="_blank"
					  >Salem</a
					>! I love taking pictures and have a Nikon D3300. I've always
					enjoyed video games as well. I'm currently into first person
					survival style games that involve puzzles - Outer Wilds is a
					personal favorite. I also enjoy singing, painting, and
					trying/making new foods.
				  </p>
				</div>
	
				<div className="item bottomspace">
				  <h4 className="center">MILESTONES</h4>
				  <ul>
					<li>Born in Alabama</li>
					<li>
					  Edited first code in 2006 <br />
					  (think MySpace)
					</li>
					<li>Obtained GED</li>
					<li>Lived in TX, NH, and TN</li>
					<li>Senior role at a small business</li>
					<li>Passed first technical interview <br />with Thinkful</li>
				  </ul>
				</div>
			  </section>
			</article>
		  </div>
        </div>
      );
    }
}

export default AboutPage;