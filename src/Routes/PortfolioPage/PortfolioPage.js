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
      <div className='grid-item'>
      <img src={el.imgSrc} alt={el.tech}/>
      <span>{el.tech}</span>
      </div></Fade>
    }

    let iconsArray = [];

    TechIcons.forEach((el, idx) => {
      iconsArray.push(makeIcon(el, idx));
    })

    // TechIcons.forEach((el, idx) => {
    //   let iconArrayIdx = Math.floor(idx/3); //*instead of 3, need logic to choose depending on window width!!

    //   if (!iconsArray[iconArrayIdx]) {
    //     iconsArray.push([makeIcon(el, idx)]);
    //   }

    //   else {
    //     let arr = iconsArray[iconArrayIdx];
    //     arr.push(makeIcon(el, idx));
    //   }

    // })

    // iconsArray = iconsArray.map(el => {
    //   return <div className='tech-icons'>{el}</div>
    // })

    return <div className="grid-container">{iconsArray}</div>;
  }

    render() {

      return (
        <div className="portfolio-page">
          <h2 className='p-h'>CODING PORTFOLIO</h2>
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