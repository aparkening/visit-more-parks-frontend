import React from 'react';

const Dashboard = (props) => (
  <div>
    <p>Dashboard</p>
    Active: {props.active? "Yes" : "No"}
  </div>
)
export default Dashboard