import './PortfolioPage.css';
import React from 'react';
import { Link } from 'react-router-dom';

class PortfolioPage extends React.Component {
  render() {

      return (
        <div className="project-page">
        <h2>PORTFOLIO</h2>
        <div class="darkgreen">
			<article id="myprojects" class="wider smaller">
			  <h3>MY PROJECTS</h3>
	
			  <div class="group bottomspace">
				<div class="item project">
				  <h4>PERSONAL 404</h4>
				  <p>
					Stephen King once said "There's no harm in hoping for the best
					as long as you're prepared for the worst." I ran with those
					words of wisdom and created my own 404 page as soon as I knew
					how. Hopefully you never have to see it outside of this
					presentation!
				  </p>
				  <p>For this page, I utilized HTML and CSS.</p>
				  <Link to="./404.html">Click here to check it out.</Link>
				  <Link to="./404.html">
					<img src="./images/404-page.jpg" alt="404 page screenshot"
				  /></Link>
				</div>
				<div class="item project">
				  <h4>DON'T SPACE OUT!</h4>
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
	
				<div class="item project">
				  <h4>BOOK SEARCH APP</h4>
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
			  </div>
			</article>
		  </div>
        </div>
      );
    }
}

export default PortfolioPage;