// ### Details Page

// This should show all details **including ALL genres** for the selected movie, including title, description, and the image, too! Use Sagas and Redux to handle these requests and data.

// - TODO: The details page should have a `Back to List` button, which should bring the user to the Home/List Page

// > Base functionality does not require the movie details to load correctly after refresh of the browser.


//  > Hint : You can make a GET request for a specific movie. Remember `req.params` and `:id`?
// ---

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import { useHistory } from 'react-router-dom';

export default function MovieItem({ movie }) {
const history = useHistory();
const dispatch = useDispatch()

const onDetails = (event) =>{
  dispatch({
        type: 'SAGA/GET_MOVIE_DETAILS',
        payload: {
          id: movie.id,
        }
      })
      history.push('/details')
}


console.log(movie)
    return (
                <div>
                    <h3>{movie.title}</h3>
                    <img onClick={() => {onDetails()}} src={movie.poster} alt={movie.title} />
                </div>
    )
}