import React, { Component } from 'react';

export default class DisplayWindowSize extends Component {

  constructor() {
    //  access parent class functions & initialize this
    super();
    // set initial width & height values
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  /**
   * Query the new window dimensions & update state properties
   */
  updateWindowSize() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  /**
   * Add event listener after the component is mounted
   */
  componentDidMount() {
    this.updateWindowSize();
    window.addEventListener('resize', this.updateWindowSize.bind(this));
  }

  /**
   * Remove event listener before the component is unmounted & destroyed
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize.bind(this));
  }

  render() {
    return(
      <div>
        <div>Width: {this.state.width}px</div>
        <div>Height: {this.state.height}px</div>
      </div>
    );
  }
}