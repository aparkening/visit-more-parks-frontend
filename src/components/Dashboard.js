import React from 'react';

const Dashboard = (props) => (
  <div className="container">
    <h1>Dashboard</h1>
    {props.loading ? <div className="loader"></div> : ""}

    Active: {props.active? "Yes" : "No"}
  </div>
)
export default Dashboard