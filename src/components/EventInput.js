import React, { Component } from 'react';
import uuid from 'react-uuid';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import TimezonePicker from 'react-timezone';

// import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';

class EventInput extends Component {
  state = {
    id: uuid(),
    title: "Visit This Park", 
    location: "123 Main Street", 
    description: "Explore park!\n\n----\n\nAbout the Park:\n#Park Description",
    start_time: "2020-02-28T17:00:00", 
    end_time: "2020-02-28T21:00:00", 
    timezone: "America/Los_Angeles", 
    park_id: 1
  }

  // Update state on input change
  handleOnChange = event => {
debugger
    // this.setState({
    //   [event.target.name]: event.target.value
    // })
  }

  // Send text to addRestaurant on submit
  handleOnSubmit = event => {
    event.preventDefault();
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
    console.log("EventInput props:")
    console.log(this.props)
    return (
      <Form>
        <Form.Group controlId="eventTitle">
          <Form.Label>Event Title</Form.Label>
          <Form.Control 
            type="text" 
            name="title"
            value={this.state.title}
            onChange={(event) => this.handleOnChange(event)} 
          />
        </Form.Group>

        <Form.Group controlId="eventLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control plaintext readOnly defaultValue={this.state.location} />
        </Form.Group>

        <Form.Group controlId="eventDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            name="description"
            as="textarea" 
            rows="5"
            value={this.state.description}
            onChange={(event) => this.handleOnChange(event)}
          />
        </Form.Group>

        <Form.Group controlId="eventStart">
          <Form.Label>Start Time</Form.Label>
          <Form.Control 
            name="start_time"
            type="text" 
            value={this.state.start_time}
            onChange={(event) => this.handleOnChange(event)} 
          />
        </Form.Group>

        <Form.Group controlId="eventEnd">
          <Form.Label>End Time</Form.Label>
          <Form.Control 
            name="end_time"
            type="text" 
            value={this.state.end_time}
            onChange={(event) => this.handleOnChange(event)} 
          />
        </Form.Group>

        <Form.Group controlId="eventTimezone">
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
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
};

export default EventInput;