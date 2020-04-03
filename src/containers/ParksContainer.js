import React, { Component } from 'react'
import { connect } from 'react-redux'
import Parks from '../components/Parks'

import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'

import { fetchParks } from '../actions/parkActions'

class ParksContainer extends Component {
  componentDidMount() {
    if (!this.props.parks.length) {
      this.props.fetchParks(this.props.token)
    }
  }

  render() {
    // console.log("Parks Container")
    // console.log(this.props)

    if (this.props.hasErrored) {
      return <Alert variant="danger">There was an error loading parks. Please try again.</Alert>;
    }

    if (!this.props.token) {
      return <Alert variant="warning">You've been logged out. Please log in to see content.</Alert>;
    }

    return ( 
      <Container className="ParksContainer container">
        <h1>Parks</h1>

        {this.props.isLoading? <>
          <Alert variant="info">Grabbing the latest parks info...</Alert>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          </> : 
          <>
          {this.props.parks.length ? 
          <Parks 
            parks={this.props.parks}
            // favoritePark={this.props.favoritePark}
            // unFavoritePark={this.props.unFavoritePark}
          /> : <div>Oh no, the parks haven't loaded. Please refresh the page to try again.</div>
          }
          </>
        }
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.csrf,
    parks: state.parks,
    hasErrored: state.parksErrored,
    isLoading: state.parksLoading
  }  
}

const mapDispatchToProps = dispatch => ({
  fetchParks: (token) => dispatch(fetchParks(token)),
  // favoritePark: (token, id) => dispatch(favoritePark(token, id)),
  // unFavoritePark: (token, id) => dispatch(unFavoritePark(token, id))  
})

export default connect(mapStateToProps, mapDispatchToProps)(ParksContainer)