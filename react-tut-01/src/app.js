import React , { Component } from 'react';

//bind (connect) redux with actions and reducers..
import { connect } from 'react-redux';

import * as actions from './actions';

class App extends Component{

    componentWillMount(){
        this.props.moviesList();
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

    render(){
        // console.log(this.props);
        return(
            <div> 
                {this.renderMovies(this.props.data.movies)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data:state.movies
    }
}

export default connect (mapStateToProps,actions)(App);