import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviesList , directorsList }  from './actions';
import { bindActionCreators } from 'redux';

class App extends Component {

    componentWillMount() {
        this.props.moviesList();
        this.props.directorsList();
    }

    renderMovies = (movies) => (
        // if movies is not empty return list else return null
        movies ?
            movies.map(item => (
                <div>
                    {item.name}
                </div>
            )) : null
    )

    render() {
        console.log(this.props);
        return (
            <div>
                {this.renderMovies(this.props.data.movies)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.movies
    }
}

// returns action
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        moviesList,
        directorsList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);