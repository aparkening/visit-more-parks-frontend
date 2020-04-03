import React from 'react';
import Park from './Park';

import Accordion from 'react-bootstrap/Accordion';

const Parks = props => {
  const parks = props.parks.map(obj => <Park key={obj.id} park={obj} loading={props.loading} />)

  // const parks = props.parks.map(obj => <Park key={obj.id} park={obj} favoritePark={props.favoritePark} unFavoritePark={props.unFavoritePark} loading={props.loading} />)
  
  return (
    <div className="parks">   
      <Accordion>
        {parks}
      </Accordion>
    </div>
  )
};

export default Parks;