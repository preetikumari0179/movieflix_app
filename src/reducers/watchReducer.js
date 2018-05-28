const watchReducer = (state = [], action) => {
  switch (action.type) {
    case 'WATCHED_DATA':
      // let index =  state.filter((post) => post.name !== action.watchedMovie.name)
      let index = state.findIndex(el => el.name == action.watchedMovie.name);
      if (index === -1) {
        return state.concat([action.watchedMovie]);
      }
    case 'REMOVE_WATCHED_DATA':
      return state.filter(element => element.name !== action.moviename);
    default:
      return state;
  }
}
export default watchReducer;