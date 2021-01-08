import './PortfolioPage.css';
import React from 'react';
import { PortfolioItems } from './PortfolioItems';
import ProjectItem from '../../Components/ProjectItem/ProjectItem';

class PortfolioPage extends React.Component {
	renderProjects() {
		return PortfolioItems.map((el, idx) => {
			return <ProjectItem key={idx} id={idx} item={el}/>
		})
	}

    render() {

      return (
        <div className="portfolio-page">
          <h2 className='p-h'>PORTFOLIO</h2>
			  {this.renderProjects()}
        </div>
      );
    }
}

export default PortfolioPage;