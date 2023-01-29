import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Details from '../Details/MovieItem';
import { useHistory } from 'react-router-dom';

function MovieDetails() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movieDetails = useSelector(store => store.details);
    console.log(movieDetails)
    
    const goBack = (event) =>{
        event.preventDefault()
        history.push('/')
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <button onClick={goBack}>Back</button>
            <section className="movies">
                {movieDetails.map(movie => {
                    return (
                        <div key={movie.id} >
                            <div key={movie.id}>
                                <h3>{movie.title}</h3>
                                {movie.genres.map(genre => {
                                    return(
                                        <div>{genre}</div>
                                    )})}
                                <img src={movie.poster} alt={movie.title} />
                                <div>
                                    {movie.description}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default MovieDetails;