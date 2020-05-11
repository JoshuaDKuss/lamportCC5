import React, { Component } from 'react';
import {connect} from 'react-redux';

// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD

class Dashboard extends Component {

  // componentDidMount(){
  //   console.log('CDM dash');
  // }

  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        
        <p>SPEED: {this.props.reduxState.speed}</p>
        <p>PASSENGER COUNT: {this.props.reduxState.passengers.length}</p>
      </div>
    )
  }
}

//export default Dashboard;

const stateOnProps = (reduxState) => ({ reduxState });

export default connect(stateOnProps)(Dashboard);