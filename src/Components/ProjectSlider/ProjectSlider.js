import './ProjectSlider.css';
import React from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide';

class ProjectSlider extends React.Component {
  componentDidMount() {
    new Splide( `.splide-${this.props.id}`, {
      perPage: 4,
      perMove: 1,
      cover: true,
      width: '100%',
      rewind : true,
      direction: 'ttb',
    } ).mount();
  }

  renderSlides() {
    const {images, title} = this.props;
    return images.map((el, idx) => {
      return <li class="splide__slide">
              <img src={el} alt={`${title}-${idx}`}/>
            </li>
    })
  }
  
  render() {
      return (
        <div className='project-slider'>
        <div class={ `.splide-${this.props.id}`}>
        <div class="splide__track">
        <ul class="splide__list">
          {this.renderSlides()}
        </ul>
        </div>
        </div>
        </div>
      );
    }
}

export default ProjectSlider;