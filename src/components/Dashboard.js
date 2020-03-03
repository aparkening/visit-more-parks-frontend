import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import EventsContainer from '../containers/EventsContainer'

const Dashboard = (props) => (
  <div className="container">
    <h1>Dashboard</h1>
    {props.loading ? <div className="loader"></div> : 
    <Container>
      <Row><EventsContainer token={props.token} /></Row>
    </Container> }
  </div>
)
export default Dashboard