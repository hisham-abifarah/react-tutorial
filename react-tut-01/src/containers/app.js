import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moviesList , directorsList }  from '../actions';
import { bindActionCreators } from 'redux';
import MoviesList from '../components/MoviesList';

class App extends Component {

    componentWillMount() {
        this.props.moviesList();
        this.props.directorsList();
    }

    render() {
        return (
            <div>
                 {/* renders data, don't do that here
                  this.renderMovies(this.props.data.movies)} */}
                {/* pass props to component which renders data */}
                <MoviesList {...this.props}/> 
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