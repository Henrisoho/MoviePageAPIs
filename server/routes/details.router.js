const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const id = (req.query.id)
  console.log(id)
  const query = `
    SELECT "movies"."title", "movies"."poster", "movies"."description",
  ARRAY_AGG("genres"."name") AS "genres"
  FROM "movies"
  JOIN "movies_genres" ON "movies"."id" = "movies_genres"."movie_id"
  JOIN "genres" ON "movies_genres"."genre_id" = "genres"."id"
  WHERE "movies"."id" = $1
  GROUP BY "movies"."title", "movies"."description", "movies"."poster";
  `
  let sqlValues = [id]
  pool.query(query, sqlValues)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

module.exports = router;