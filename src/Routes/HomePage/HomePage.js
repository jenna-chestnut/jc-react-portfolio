import './HomePage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/salemthedog-smiling.jpg';
import headshotImg from '../../images/jenna-smile-woodsbackground-square.jpg';
import portfolioImg from '../../images/portfolio-window.png';
import HomePageWindow from '../../Components/HomePageWindow/HomePageWindow';
import Fade from 'react-reveal/Fade';


const windowLinks = [
	{link: '/about', img: headshotImg, text: 'About'},
	{link: '/portfolio', img: portfolioImg, text: 'Portfolio'},
	{link: '/contact', img, text: 'Contact'},
]

class HomePage extends React.Component {

	HomePageWindows() {
		return windowLinks.map((el, idx) => {
			return <HomePageWindow key={idx} id={idx} wLink={el} />
		});
	}


  render() {

      return (
        <div className="home-page">
		<div className='hp-w-container'>
		{this.HomePageWindows()}

		<Fade top duration={2000}>
		<h2 className="hero-text">CREATIVE CALCULATIONS</h2>
		</Fade>

		</div>

		<img className='hp-headshot' src={headshotImg} alt='headshot'/>
		
			<div className="wrapper">
			  <article id="intro" className="center">
				  <h2 className="topspace hello">Hi there! I'm Jenna and I'm a JavaScript developer 
					living in Nashville, Tennessee.</h2>
					<hr/>
				<p>
				  I have a genuine love for technology and how it helps to better
				  the world through connection and innovation - and I'm beyond
				  excited to meet, collaborate and learn with others who feel the
				  same way.
				</p>
				<p>I hope you enjoy my website, and please don't hesitate to send a
				message. Don't forget to 
                <Link to="/contact"> connect</Link>!</p>
			  </article>
		  </div>
        </div>
      );
    }
}

export default HomePage;