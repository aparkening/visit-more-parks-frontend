import React, { Component } from 'react';
import uuid from 'react-uuid';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DateTimePicker from 'react-datetime-picker';

// import TimezonePicker from 'react-timezone';

// import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

class EventInput extends Component {
  state = {
    // id: uuid(),
    title: "Visit This Park", 
    location: "123 Main Street", 
    description: "Explore park!\n\n----\n\nAbout the Park:\n#Park Description",
    // start_time: "2020-02-28T17:00:00", 
    start_time: new Date(),
    end_time: new Date(), 
    timezone: "America/Los_Angeles", 
    park_id: 1
  }

  // Update state on input change
  handleOnChange = event => {
    console.log("Event Changed...")
    console.log(event)

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Send text to addRestaurant on submit
  handleOnSubmit = event => {
    event.preventDefault();
    console.log("Submitting event...")
    const newEvent = {...this.state}
    this.props.addEvent(newEvent, this.props.token );
    // this.setState({
    //   text: '',
    // });
  }

  /*
    # Set test event hash
    # e_params = {
    #   title: "Visit #{park.fullName}", 
    #   location: park.address, 
    #   description: "Explore park!\n\n----\n\nAbout the Park:\n#{park.description}",
    #   start_time: "2020-02-28T17:00:00", 
    #   end_time: "2020-02-28T21:00:00", 
    #   timezone: "America/Los_Angeles", 
    #   park_id: park.id
    # }
  */

  render() {
    // console.log("EventInput props:")
    // console.log(this.props)
    return (
      <Form className="new-event" onSubmit={this.handleOnSubmit}>

        <Form.Group as={Row} controlId="eventTitle">
          <Form.Label column sm={2}>Event Title</Form.Label>
          <Col sm={10}>
            <Form.Control 
              type="text" 
              name="title"
              value={this.state.title}
              onChange={this.handleOnChange} 
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="eventLocation">
          <Form.Label column sm={2}>Location</Form.Label>
          <Col sm={10}>
            <Form.Control plaintext readOnly defaultValue={this.state.location} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="eventDescription">
          <Form.Label column sm={2}>Description</Form.Label>
          <Col sm={10}>
            <Form.Control 
              name="description"
              as="textarea" 
              rows="5"
              value={this.state.description}
              onChange={(event) => this.handleOnChange(event)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="eventStart">
          <Form.Label column sm={2}>Start Time</Form.Label>
          <Col sm={10}>
            <DateTimePicker
              className="form-control"
              disableClock={true}
              clearIcon={null}
              calendarIcon={null}
              value={this.state.start_time}
              name="start_time"
              onChange={time => this.handleOnChange({target: {name: 'start_time', value: time}})}           
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="eventEnd">
          <Form.Label column sm={2}>End Time</Form.Label>
          <Col sm={10}>
            <DateTimePicker
              className="form-control"
              disableClock={true}
              clearIcon={null}
              calendarIcon={null}
              value={this.state.end_time}
              name="end_time"
              onChange={time => this.handleOnChange({target: {name: 'end_time', value: time}})}           
            />
          </Col>
        </Form.Group>

        {/* <Form.Group controlId="eventTimezone">
          <Form.Label>Timezone</Form.Label>
          <TimezonePicker
            value={this.state.timezone}
            // onChange={(event) => this.handleOnChange(event)}
            onChange={timezone => this.handleOnChange({target: {name: 'timezone', value: timezone}})}
            inputProps={{
              placeholder: 'Select Timezone...',
              name: 'timezone',
            }}
          />
        </Form.Group> */}

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="primary" type="submit">Create Event</Button>
          </Col>
        </Form.Group>
      </Form>
    );
  }
};

export default EventInput;