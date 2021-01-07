import './PortfolioPage.css';
import React from 'react';
import { PortfolioItems } from './PortfolioItems';
import ProjectItem from '../../Components/ProjectItem/ProjectItem';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class PortfolioPage extends React.Component {
	renderProjects() {
		return PortfolioItems.map((el, idx) => {
			return <ProjectItem id={idx} item={el}/>
		})
	}

    render() {

      return (
        <div className="project-page">
        <h2>PORTFOLIO</h2>
        <div className="darkgreen">
			<article id="myprojects" className="wider smaller">
	
			  <div className="bottomspace">
				<div className="project">
				  <h3>nSpired</h3>
				  <p>
				  nSpired was created to offer a platform specifically to meeting goals independently, while connecting and sharing with others who want to achieve the same.
				  </p>
				  <p>For this page, I utilized HTML, CSS, React, Node.js, PostgreSQL, ExpressJS, KnexJS, Heroku, and Vercel.</p>
				  <a href='https://nspired-app.vercel.app/' target='_blank' rel='noreferrer'>Live App</a>
				  {' | '}
				  <a href='https://github.com/jenna-chestnut/nspired-client' target='_blank' rel='noreferrer'>GitHub Repo</a>
				</div>

				<Slide left>
				<div className="project">
				  <h3>Don't Space Out! Quiz</h3>
				  <p>
					Think you know enough about the cosmos? Test your space
					knowledge with this simple 6 question quiz!
				  </p>
				  <p>
					For this page, I utilized HTML, CSS and Javascript, as well as
					jQuery to render the DOM. For a comprehensive and easy-to-edit
					code, I utilized "mini functions" and callbacks to make the app
					run.
				  </p>
				  <a href="https://jenna-chestnut.github.io/quizapp-ei/"
					>Click here to try for yourself!</a
				  >
				  <a href="https://jenna-chestnut.github.io/quizapp-ei/">
					<img
					  src="./images/space-quiz-screenshot.jpg"
					  alt="space quiz screenshot"
				  /></a>
				</div>
				</Slide>
	
				<Fade>
				<div className="project">
				  <h3>Cater Naturals Website</h3>
				  <p>
					Wish you could remember the author of that story? You can search for books available in the Google Books API!
				  </p>
				  <p>
					For this page, I utilized HTML, CSS, and JavaScript as well as React. 
					A simple API GET request is used to render the results, and conditional rendering is utilized or an "expanded" view.
				  </p>
				  <a href="https://t.co/fVB7g99Jy9?amp=1"
					>Click here to try for yourself!</a
				  >
				  <a href="https://t.co/fVB7g99Jy9?amp=1">
					<img
					  src="./images/book-search-screenshot.jpg"
					  alt="space quiz screenshot"
				  /></a>
				</div>
				</Fade>
			  </div>
			</article>
		  </div>
        </div>
      );
    }
}

export default PortfolioPage;