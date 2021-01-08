import './MilestonesWidget.css';
import React from 'react';
import * as d3 from 'd3';

class MilestonesWidget extends React.Component {
  state = {
    showText: false,
    width: 0,
    height: 0,
    timer: null
  }

  updateDimensions = () => {
    const rect = parseInt(window.innerWidth / 7);
    this.setState({width: rect});
  };

  componentDidMount() {
    const rect = parseInt(window.innerWidth / 7);
    this.setState({width: rect});
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);  
    clearTimeout(this.state.timer);
  }

  rectGrow(id) {
    const width = this.state.width;
    const selector = `#m-${id}`;
    d3.select(selector)
      .transition()
      .duration(2000)
      .attr("width", width)
      .style("background-color", this.props.mS.fill);

    this.setState({timer: setTimeout(() => this.setState({showText: true}), 1400)});
  }

  rectShrink(id) {
    const selector = `#m-${id}`;
    d3.select(selector)
      .transition()
      .duration(2000)
      .attr("width", "80")
      .style("background-color", 'slate-grey')

    clearTimeout(this.state.timer);
    this.setState({showText: false})
  }


  render() {
    const {year, text} = this.props.mS;
    const { id } = this.props;
    const content = !this.state.showText 
    ? year : text;

      return (
        <div className='ap-m' onMouseEnter={() => this.rectGrow(id)} onMouseLeave={() => this.rectShrink(id)}>

         <p className='ap-m-text'>{content}</p>

        <svg id={`m-${id}`} fill='#00000090' width={80} height={90}>
          
        </svg>

        </div>
      );
    }
}

export default MilestonesWidget;