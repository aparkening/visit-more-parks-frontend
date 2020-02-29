import React from 'react';
import ParksContainer from '../containers/ParksContainer'
// import EventsContainer from '../containers/EventContainer'

const Dashboard = (props) => (
  <div className="container">
    Active: {props.active? "Yes" : "No"}


    <h1>Dashboard</h1>
    {props.loading ? <div className="loader"></div> : ""}
    <ParksContainer token={this.props.token} />
    {/* <EventsContainer token={this.props.token} /> */}

  </div>
)
export default Dashboard