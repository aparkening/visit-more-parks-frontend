import React, { Component } from 'react';

class Park extends Component {
  render() {
    const { park } = this.props;
    return (
      <div>
        <li>
          {park}
          <button onClick={() => this.props.favoritePark(park.id)}> Favorite </button>
          <button onClick={() => this.props.unFavoritePark(park.id)}> Unfavorite </button>
        </li>
      </div>
    );
  }
};

export default Park;
