import React, { Component } from 'react';
import Parks from './components/Parks'

class App extends Component {
  constructor(){
    super()
    this.state = {
      parks: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/parks")
      .then(r=>r.json())
      .then(parks => this.setState({parks: parks}))
  }

  handleLikeClick = (event) => {
    let newStatus
    if (event.target.tagName === "IMG") {newStatus = "undecided"}
    else {newStatus =  event.target.className === "fav-button" ? "favorited" : ""}
    const parks = this.state.parks.map(park => {
      if (parseInt(parks.id) === parseInt(event.target.id) || park.id == event.target.className) {
        const newPark = Object.assign({}, park)
        newPark.status = newStatus
        return newPark
      } else {
        return park
      }
    })
    this.setState({
      parks: parks
    })
  }

  render() {

    return (
      <div className="App">
        <Parks
          handleChangeOfHeart={this.handleFavClick}
          parks={this.state.parks.filter(park => park.status === "favorited")}
        />
        <Parks
          handleChangeOfHeart={this.handleFavClick}
          parks={this.state.parks.filter(park => park.status === "undecided")}
        />
      </div>
    );
  }
}

export default App;