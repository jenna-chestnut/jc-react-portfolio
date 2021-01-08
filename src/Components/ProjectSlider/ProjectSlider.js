import './ProjectSlider.css';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

class ProjectSlider extends React.Component {

  renderSlides() {
    const {images, title} = this.props;
    return images.map((el, idx) => {
      return <SplideSlide key={idx}>
              <img src={el} alt={`${title}-${idx}`}/>
            </SplideSlide>
    })
  }
  
  render() {
    const slides = this.renderSlides();
    const autoPlay = this.props.id === 0;
      return (
        <div className='project-slider'>
        <Splide options={{
          perPage: 1,
          perMove: 1,
          cover: true,
          width: '100%',
          height: '50%',
          autoplay: autoPlay,
          interval: 4000,
          speed: 600,
          rewind : true
        }}>
          {slides}
        </Splide>
      </div>
      );
    }
}

export default ProjectSlider;