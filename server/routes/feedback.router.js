const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');


// post user feedback to database
router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log(`Adding feedback - router/server side:`, newFeedback);

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") 
                          VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then(result => {
            res.sendStatus(200);
        }).catch(error => {
            console.log(`Error adding new task`, error);
            res.sendStatus(500);
        });
});

router.get('/', (req, res) => {
    res.send(pool);
});


module.exports = router;