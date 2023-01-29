const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const id = (req.query.id)
  console.log(id)
  const query = `
  SELECT * FROM "movies" 
  WHERE "id" = $1;
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