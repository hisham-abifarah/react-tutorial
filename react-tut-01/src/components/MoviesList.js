import React from 'react';

// this component recieves props
// app.js is the parent, this presentational component is the child
const MoviesList = (props) => {
    console.log(props);

     // cut from app.js
    const renderMovies = (movies) => (
        // if movies is not empty return list else return null
        movies ?
            movies.map((item,i) => (
                <div key ={i}>
                    {item.name}
                </div>
            )) : null
    )

    return (
        <div>
              {renderMovies(props.data.movies)}
        </div>
    );
};

export default MoviesList;