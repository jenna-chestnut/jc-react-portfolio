import './HomePage.css';
import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {
  render() {

      return (
        <div className="home-page">
        <div className="hero">
        <h2>CREATIVE CALCULATIONS</h2>
        </div>
        <div class="lightgreen">
			<div class="wrapper">
			  <article id="intro" class="center bottomspace">
				<p class="topspace">
				  <b
					>Hi there! I'm Jenna and I'm a web developer (in the making)
					living in Nashville, Tennessee.</b
				  >
				</p>
				<p>
				  I have a genuine love for technology and how it helps to better
				  the world through connection and innovation - and I'm beyond
				  excited to meet, collaborate and learn with others who feel the
				  same way.
				</p>
				I hope you enjoy my website, and please don't hesitate to send a
				message. Don't forget to{' '} 
                <Link to="/contact">follow me</Link>
                !
			  </article>
			</div>
		  </div>
        </div>
      );
    }
}

export default HomePage;