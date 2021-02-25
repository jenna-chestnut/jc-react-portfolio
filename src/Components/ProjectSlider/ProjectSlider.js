import './ProjectSlider.css';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

class ProjectSlider extends React.Component {

  state = {mounted: false}

  componentDidMount() {
    this.setState({mounted:true})
  }

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
         heightRatio: 0.5,
         autoplay: autoPlay,
         interval: 4000,
         speed: 600,
         rewind : true
       }}>
         {this.state.mounted && slides}
       </Splide>
     </div>
      );
    }
}

export default ProjectSlider;