import React, { Component } from 'react';
import { connect } from 'react-redux';


import './content.css';
class Watched extends Component {
    removeFromWatched = (moviename) => {
          this.props.dispatch({
              type: 'REMOVE_WATCHED_DATA',
              moviename
          });
      }

    render() {
        let titles = '';
        if (this.props.Watched) {
          let that = this;
           titles = this.props.Watched.map(function (title, i) {
                return (
                <div className="Item" onClick={() => that.removeFromWatched(title.name)} key={i} style={{ backgroundImage: 'url(' + title.Poster + ')' }} >
                    <div className="overlay">
                        <div className="title">{title.name}</div>
                        <div className="rating">{title.vote_average} / 10</div>
                        <div className="plot">{title.overview}</div>
                    </div>
                </div>
                );
            });
        }
        return (
            <div className="TitleList" data-loaded="true">
                <div className="Title">
                    <h1>Watched Movies List</h1>
                    <div className="titles-wrapper">
                        {titles}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    if (state) {
        return {
            Watched: state.watchReducer ? state.watchReducer : [],
        }
    }
}
export default connect(mapStateToProps)(Watched);
