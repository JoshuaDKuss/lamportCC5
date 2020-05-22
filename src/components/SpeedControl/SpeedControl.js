import React, { Component } from 'react';
import {connect} from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {
  // state = { 
  //   speed: ''
  // }

  // componentDidMount(){
  //   console.log('CDM speedcontrol');
  // }

  // handleChange = (event) => {
  //   this.setState({
  //     speed: event.target.value
  //   })
  // }

  handleClickUp = () => {
    console.log('speed up');
    this.props.dispatch({ type: 'speedUp', payload: 1 })
  }

  handleClickDown = () => {
    console.log('speed down');
    this.props.dispatch({ type: 'speedDown', payload: 1 })
  }
    
  
  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={this.handleClickUp}>Increase Speed</button>
        <p>Speed: {this.props.reduxState.speed}</p>
        <button onClick={this.handleClickDown}>Decrease Speed</button>
      </div>
    )
  }
}

const stateOnProps = (reduxState) => ({ reduxState });

export default connect(stateOnProps)(SpeedControl);
