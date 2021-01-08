import './ProjectItem.css';
import React from 'react';
import ProjectSlider from '../ProjectSlider/ProjectSlider';
import Fade from 'react-reveal/Fade';

class ProjectItem extends React.Component {
  renderTech(tech) {
    if (tech)
    return tech.map((el, idx) => {
      return <li key={idx}>{el}</li>
    })
  }
  
  render() {
    const { id, item } = this.props;
    const {title, images, description, liveLink, repo, tech} = item;
    const projectClassName = id % 2 === 1 ? 'project rev-row' : 'project';
    const linksClassName = id % 2 === 1 ? 'links rev-links' : 'links';

      return (
        <Fade duration={2000}>
        <div className='project-holder'>
        <div className={projectClassName}>
      
        <div className='v item'>
        <h2>{title}</h2>
        <ProjectSlider id={id} title={title} images={images} />
        </div>
        
       
        <div className='item project-desc'>
        <p>{description}</p>
        <h3>Tech {':'}</h3>
        <ul>{this.renderTech(tech)}</ul>
        </div></div>

        <div className={linksClassName}>
        <a href={liveLink} target='_blank' rel="noreferrer">Live Link</a>{repo && ' | '}
        {repo && <a href={repo} target='_blank' rel="noreferrer">Repo</a>}
        </div></div>
        </Fade>
      );
    }
}

export default ProjectItem;