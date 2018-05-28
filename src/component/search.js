import React, { Component } from 'react';
import { connect } from 'react-redux';


class Search extends Component {
    response = {};
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "", searchUrl: ""
        };
        this.getMovieList('?t=batman');
    }
    handleKeyUp = (e) => {
        if (e.key === 'Enter' && this.state.searchTerm !== '') {
            var searchUrl = "?t=" + this.state.searchTerm;
            this.getMovieList(searchUrl);
        }
    }

    getMovieList = (searchUrl) => {
        const apiKey = 'aabca0d';
        const url = 'http://www.omdbapi.com/';
        var requestUrl = url + searchUrl + '&apikey=' + apiKey;
        fetch(requestUrl).then((response) => {
            return response.json();
        }).then((data) => {
            let index = this.props.Watched.findIndex(el => el.name == data.Title);
            if (index !== -1) {
               alert('movie already watched');
            } else {
                this.props.dispatch({
                    type: 'SEARCH_DATA',
                    data
                });
            }
        }).catch((err) => {
            console.log("There has been an error");
        });
    }

    handleChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    }

    render() {
        return (
            <header className="Header">
                <div id="search" class="Search">
                    <input
                        onKeyUp={this.handleKeyUp}
                        onChange={this.handleChange}
                        type="search"
                        placeholder="Search for a title..."
                        value={this.state.searchTerm} />
                </div>
            </header>
        );
    }
}
const mapStateToProps = (state) => {
    if (state) {
        return {
            Watched: state.watchReducer ? state.watchReducer : [],
        }
    }
}
export default connect(mapStateToProps)(Search);