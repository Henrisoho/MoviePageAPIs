import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Details from '../Details/MovieItem';

function MovieDetails() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.details);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <Details movie={movie}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieDetails;