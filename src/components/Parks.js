  
import React from 'react'
import Park from './Park'

const Parks = ({ parks, handleChangeOfHeart }) => {
  const parkCards = parks.map(park =>
    <Park
      handleChangeOfHeart={handleChangeOfHeart}
      key={park.npsId}
      park={park}
    />)

    return (
      <div>
      {/* 
      <div className={favorited ? "FavoriteParks" : ""}>
      <h2>{favorited ? "Favorited Parks" : "Remaining Parks"}</h2> 
      */}

        { parkCards }
      </div>
    )
}

export default Parks