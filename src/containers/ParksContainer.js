import React, { Component } from 'react'
import { connect } from 'react-redux'
import Parks from '../components/Parks'

import Alert from 'react-bootstrap/Alert'

import { fetchParks } from '../actions/parkActions'

class ParksContainer extends Component {
  componentDidMount() {
    // if (this.props.token) {this.props.fetchParks(this.props.token)}
    this.props.fetchParks(this.props.token)
  }

  render() {
    console.log("Parks Container")
    console.log(this.props)

    if (this.props.hasErrored) {
      return <Alert variant="danger">There was an error loading parks. Please try again.</Alert>;
    }

    if (!this.props.token) {
      return <Alert variant="warning">You've been logged out. Please log in to see content.</Alert>;
    }

    return ( 
      <div className="ParksContainer container">
        <h1>Parks</h1>
        <Parks 
          parks={this.props.parks}
          // favoritePark={this.props.favoritePark}
          // unFavoritePark={this.props.unFavoritePark}
          loading={this.props.isLoading}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
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