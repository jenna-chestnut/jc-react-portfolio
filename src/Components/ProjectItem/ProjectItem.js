import './ProjectItem.css';
import React from 'react';
import ProjectSlider from '../ProjectSlider/ProjectSlider';

class ProjectItem extends React.Component {
  renderTech(tech) {
    if (tech)
    return tech.map((el, idx) => {
      return <li>{el}</li>
    })
  }
  
  render() {
    const { id, item } = this.props;
    const {title, images, description, liveLink, repo, tech} = item;

      return (
        <div className='project-item'>
          <h2>{title}</h2>
        <ProjectSlider id={id} title={title} images={images} />
        <p>{description}</p>
        <h3>Tech {':'}</h3>
        <ul>{this.renderTech(tech)}</ul>
        <a href={liveLink}>Live Link</a>
        {repo && <a href={liveLink}>Live Link</a>}
        </div>
      );
    }
}

export default ProjectItem;