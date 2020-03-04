import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import FormControl from 'react-bootstrap/FormControl';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

class EventInput extends Component {
  state = {
    summary: this.props.park.fullName, 
    location: this.props.park.address, 
    description: this.props.park.description,
    start_time: new Date(this.props.date),
    end_time: new Date(this.props.date),
    timezone: '', 
    park_id: this.props.park.id
  }

  // Update state on input change
  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // Send text to addRestaurant on submit
  handleOnSubmit = event => {
    event.preventDefault();
    const newEvent = {...this.state}
    this.props.addEvent(this.props.token, newEvent);
  }

  render() {
    // console.log("EventInput props:")
    // console.log(this.props)

    return (
      <Form className="new-event" onSubmit={this.handleOnSubmit}>
        <Form.Group controlId="eventTitle">
          <Form.Label>Event Title</Form.Label>
            <Form.Control 
              type="text" 
              name="summary"
              value={this.state.summary}
              onChange={this.handleOnChange} 
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
            <DateTimePicker
              className="form-control"
              disableClock={true}
              clearIcon={null}
              calendarIcon={null}
              value={this.state.start_time}
              name="start_time"
              onChange={time => this.handleOnChange({target: {name: 'start_time', value: time}})}           
            />
        </Form.Group>

        <Form.Group controlId="eventEnd">
          <Form.Label>End Time</Form.Label>
            <DateTimePicker
              className="form-control"
              disableClock={true}
              clearIcon={null}
              calendarIcon={null}
              value={this.state.end_time}
              name="end_time"
              onChange={time => this.handleOnChange({target: {name: 'end_time', value: time}})}           
            />
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

        <Form.Group>
            <Button size="sm" type="submit">Create Event</Button>
        </Form.Group>
      </Form>
    );
  }
};

export default EventInput;