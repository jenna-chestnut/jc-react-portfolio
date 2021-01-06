import './HomePageWindow.css';
import React from 'react';
import * as d3 from 'd3';
import { Link } from 'react-router-dom';

class HomePageWindow extends React.Component {
  state = {
    showLink: false,
    width: 0,
    height: 0
  }

  updateDimensions = () => {
    const square = parseInt(window.innerWidth / 3.12);
    this.setState({width: square, height: square});
  };

  componentDidMount() {
    const square = parseInt(window.innerWidth / 3.12);
    this.setState({width: square, height: square});
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  squareGrow(id) {
    let {height} = this.state;
    const selector = `#w-${id}`;
    d3.select(selector)
      .transition()
      .duration(2000)
      .attr("height", height)
    
    this.setState({showLink: true})
  }

  squareShrink(id) {
    const selector = `#w-${id}`;
    d3.select(selector)
      .transition()
      .duration(2000)
      .attr("height", "50")

    this.setState({showLink: false})
  }

  render() {
    const { link, text, img } = this.props.wLink;
    const { id } = this.props;

      return (
        <div className='hp-w' onMouseEnter={() => this.squareGrow(id)} onMouseLeave={() => this.squareShrink(id)}>

         {this.state.showLink && <Link className='hp-w-text' to={link} 
         style={{width: this.state.width}}>{text}</Link>}

        <svg id={`w-${id}`} width={this.state.width} height={50}>
          <a href={link}><image width={this.state.width} href={img} alt={text}/></a>
        </svg>

        </div>
      );
    }
}

export default HomePageWindow;