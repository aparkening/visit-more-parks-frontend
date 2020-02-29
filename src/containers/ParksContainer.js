import React, { Component } from 'react'
import { connect } from 'react-redux'
import Parks from '../components/Parks'

import { fetchParks, favoritePark, unFavoritePark } from '../actions/parkActions'

class ParksContainer extends Component {
  componentDidMount() {
    this.props.fetchParks(this.props.token)
  }

  render() {
    // Investigate when loading occurs
    // console.log(this.props.loading)

    return ( 
      <div className="ParksContainer container">
        <h1>Parks</h1>
        <Parks 
          parks={this.props.parks}
          favoritePark={this.props.favoritePark}
          unFavoritePark={this.props.unFavoritePark}
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
  favoritePark: (token, id) => dispatch(favoritePark(token, id)),
  unFavoritePark: (token, id) => dispatch(unFavoritePark(token, id))  
})

export default connect(mapStateToProps, mapDispatchToProps)(ParksContainer)