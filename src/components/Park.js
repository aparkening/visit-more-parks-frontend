  
import React from 'react'

const Park = function({ park, handleChangeOfHeart }){
  let returnVal
  if (park) {
    returnVal = <div className="Park">
                  {park.fullName}
                </div>
  } else {
     returnVal = <div>
                   EMPTY or LOADING...
                </div>
  }
  return (
    returnVal
  )
}

export default Park