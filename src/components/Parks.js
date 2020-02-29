import React from 'react';
import Park from './Park';

const Parks = props => {
  console.log("Parks")
  console.log(props)

  const parks = props.parks.map(obj => <Park key={obj.id} park={obj} favoritePark={props.favoritePark} unFavoritePark={props.unFavoritePark} />)

  return (
    <div className="parks">
      <ul>
        {parks}
      </ul>
    </div>
  )
};

export default Parks;