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
  
  renderTech() {
    const makeIcon = (el, idx) => {
      return <Fade key={el.tech + idx}>
      <div className='item'>
      <img src={el.imgSrc} alt={el.tech}/>
      <span>{el.tech}</span>
      </div></Fade>
    }

    let fi = []; let se = []; let th = [];

    TechIcons.forEach((el, idx) => {
      let arr;
      if (idx < 6) arr = fi;
      if (idx >= 6 && idx < 12) arr = se;
      if (idx >= 12) arr = th;

      arr.push(makeIcon(el, idx))
    })

    return (
      <>
        <div className='tech-icons'>{fi}</div>
        <div className='tech-icons'>{se}</div>
        <div className='tech-icons'>{th}</div>
      </> 
    )
  }

    render() {

      return (
        <div className="portfolio-page">
          <h2 className='p-h'>PORTFOLIO</h2>
			  {this.renderProjects()}
        
        <div className='tech-div'>
          <h2>TECHNOLOGY</h2>
          {this.renderTech()}
        </div>

        </div>
      );
    }
}

export default PortfolioPage;