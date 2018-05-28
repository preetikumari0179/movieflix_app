import React, { Component } from 'react';
import { connect } from 'react-redux';


import './content.css';
import watched from './watched';
class Content extends Component {

    addToWatched = (watchedData) => {
      const watchedMovie =  {
            name: watchedData.Title,
            Poster: watchedData.Poster,
            overview: '',
            vote_average: watchedData.imdbRating
        }
        console.log(watchedMovie);
        this.props.dispatch({
            type: 'WATCHED_DATA',
            watchedMovie
        });
    }
    render() {
        return (
            <div id="hero" className="Hero">
                <div className="content" >
                    <div className="ContentBox1">
                        <img className="logo" height="200" width="200" onClick={() => this.addToWatched(this.props.searchMovieData)} src={this.props.searchMovieData.Poster} alt="movie image" />
                    </div>
                    <div className="ContentBox2">
                        <h2>{this.props.searchMovieData.Title}</h2>
                        <h5>{this.props.searchMovieData.Released}</h5>
                        {/* {this.props.rating.map((rating, index) => (
                            <h5>IMDB Reating: {rating.Value}</h5>
                        ))} */}
                        <h5>IMDB Reating: {this.props.searchMovieData.imdbRating}</h5>
                        <p>{this.props.searchMovieData.Title} Won {this.props.searchMovieData.Awards} directed by {this.props.searchMovieData.Director}
                            {this.props.searchMovieData.Title} available in {this.props.searchMovieData.Language} </p>
                        <div className="button-wrapper">
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    if (state) {
        return {
            searchMovieData: state.movieReducer ? state.movieReducer : {},
            rating: state.movieReducer.Ratings
        }
    }
}
export default connect(mapStateToProps)(Content);