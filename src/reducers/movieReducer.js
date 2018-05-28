const movieReducer = (state = [], action) => {
    switch(action.type) {
      case 'SEARCH_DATA':
        return state=action.data;
      default:
        return state;
    }
  }
  export default movieReducer;