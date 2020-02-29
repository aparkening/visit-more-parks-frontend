export const parksErrored = (state = false, action) => {
  switch (action.type) {
    case 'PARKS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}

export const parksLoading = (state = false, action) => {
  switch(action.type) {
    case 'PARKS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}

export const parks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PARKS':
      return action.parks;
    default:
      return state;
  }
}


// export const parksReducer = (state = [], action) => {
//   switch(action.type) {
//     // case 'LOADING_PARKS':
//     //   return {
//     //     ...state,
//     //     parks: [...state.parks],
//     //     loading: true
//     //   }
//     case 'ADD_PARKS':
//       return action.parks;

//     // case 'ADD_FAVORITE':
//     //   return {
//     //     ...state,
//     //     parks: action.parks,
//     //     loading: false
//     //   }
//     // case 'REMOVE_FAVORITE':
//     //   return {
//     //     ...state,
//     //     parks: action.parks,
//     //     loading: false
//     //   }      
//     default:
//       return state;
//   }
// }
 
// export default parksReducer;