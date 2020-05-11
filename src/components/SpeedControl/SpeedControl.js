import React, { Component } from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY

class SpeedControl extends Component {
  state = { 
    speed: ''
  }

  componentDidMount(){
    console.log('CDM speedcontrol');
  }

  handleChange = (event) => {
    this.setState({
      speed: event.target.value
    })
  }

  handleClick = () => {
    if (this.state.speed === '') {
      alert(`please enter speed`);
      return;
    }
    else {
      this.props.dispatch({
        type: 'speed', payload: this.state
      });
      this.props.history.push('/Passengers');
    }
  }
  render() {
    return (
      <div>
        <h2>Speed Control</h2>

        <button option="number">Increase Speed</button>
        <p>SPEED: GOES HERE</p>
        <button input="number">Decrease Speed</button>
      </div>
    )
  }
}

export default SpeedControl;