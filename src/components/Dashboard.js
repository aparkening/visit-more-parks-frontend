import React from 'react';
import ParksContainer from '../containers/ParksContainer'
// import EventsContainer from '../containers/EventContainer'

const Dashboard = (props) => (
  <div className="container">
    <h1>Dashboard</h1>
    {props.loading ? <div className="loader"></div> : 
    <ParksContainer token={props.token} />}

    {/* <EventsContainer token={this.props.token} /> */}

  </div>
)
export default Dashboard