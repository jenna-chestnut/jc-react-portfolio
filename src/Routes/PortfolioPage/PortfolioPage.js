import './PortfolioPage.css';
import React from 'react';
import { PortfolioItems } from './PortfolioItems';
import ProjectItem from '../../Components/ProjectItem/ProjectItem';
import { TechIcons } from './TechIcons';
import Fade from 'react-reveal/Fade';
class PortfolioPage extends React.Component {
	renderProjects() {
		return PortfolioItems.map((el, idx) => {
			return <ProjectItem key={idx} id={idx} item={el}/>
		})
  }
  
  renderTech(num) {
    const makeIcon = (el, idx) => {
      return <div key={idx} className='item'>
      <img src={el.imgSrc} alt={el.tech}/>
      <span>{el.tech}</span>
      </div>
    }

    const firstRow = 
    <div className='tech-icons'>
    {TechIcons.map((el, idx) => {
      if (idx < 7)
      return makeIcon(el, idx)
      else return ''
    } 
    )}</div>

    const secondRow = 
    <div className='tech-icons'>
    {TechIcons.map((el, idx) => {
      if (idx >= 7)
      return makeIcon(el, idx)
      else return ''
    }
    )}</div>

    return num === 1 
    ? firstRow : secondRow
  }

    render() {

      return (
        <div className="portfolio-page">
          <h2 className='p-h'>PORTFOLIO</h2>
			  {this.renderProjects()}

        
        <div className='tech-div'>
          <h2>TECHNOLOGY</h2>
          <Fade>{this.renderTech(1)}</Fade>
          <Fade>{this.renderTech(2)}</Fade>
        </div>
        

        </div>
      );
    }
}

export default PortfolioPage;