import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ParksContainer from '../containers/ParksContainer'
import EventsContainer from '../containers/EventsContainer'

const Dashboard = (props) => (
  <div className="container">
    <h1>Dashboard</h1>
    {props.loading ? <div className="loader"></div> : 
    <Container>
      <Row><EventsContainer token={props.token} /></Row>
      <Row><ParksContainer token={props.token} /></Row>
    </Container> }
  </div>
)
export default Dashboard