import React, { Component } from 'react';
import {connect} from 'react-redux';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN  // YOU SHOULD DISPLAY THE CURRENT PASSENGERS  // INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

class Passengers extends Component {
  state = { 
    passengers: ''
  }

  // componentDidMount(){
  //   console.log('CDM passengers');
  // }

  handleChange = (event) => {
    this.setState({
      passengers: event.target.value
    })
  }

  handleClick = () => {
    if (this.state.passenger === '') {
      //alert(`please enter passenger name`);
      return;
    }
    else {
      this.props.dispatch({
        type: 'passengers', payload: this.state.passengers
      });
      //this.props.history.push('/dashboard');
    }
  }

  render() {
    let myPassengers = this.props.reduxState.passengers.map(passenger => {
      return (
      <li>{passenger}</li>
      )
    })

    return (
      <div>
        <h2>Passengers</h2>

        <input type="text" name="name" placeholder="Enter Name" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add Passenger</button>

        <ul>Passengers: 
        <li>{myPassengers}</li>
        </ul>
      
      </div>
    )
  }
}

const stateOnProps = (reduxState) => ({ reduxState });

export default connect(stateOnProps)(Passengers);
