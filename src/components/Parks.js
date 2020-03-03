import React from 'react';
import Park from './Park';

const Parks = props => {
  // console.log("Parks")
  // console.log(props)

  const parks = props.parks.map(obj => <Park key={obj.id} park={obj} loading={props.loading} />)

  // const parks = props.parks.map(obj => <Park key={obj.id} park={obj} favoritePark={props.favoritePark} unFavoritePark={props.unFavoritePark} loading={props.loading} />)

  return (
    <div className="parks">
      {parks}
    </div>
  )
};

export default Parks;