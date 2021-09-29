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

//attempting GET route for fun
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "feedback" ORDER BY "id" LIMIT 200;`;
    pool.query(queryText).then(result => {
        res.send(result.rows)
    })
        .catch(error => {
            console.log('error getting feedback:', error)
            res.sendStatus(500);
        })
});

//put side to clean up...
router.put('/:id', (req, res) => {
    console.log('in PUT router side:', req.params);
    const flagID = req.params.id;
    const queryText = `UPDATE "feedback" SET "flagged" = NOT flagged WHERE "id" = $1;`; //I'm proud of figuring this one out!
    pool.query(queryText, [flagID]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in router-side PUT:', error);
        res.sendStatus(500);
    });
});

//attempting delete as well
router.delete('/:id', (req, res) => {
    console.log('in DELETE router-side:', req.params);
    const deleteID = req.params.id;
    const queryText = `DELETE FROM "feedback" WHERE "id" = $1;`;
    pool.query(queryText, [deleteID]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in DELETE router/server side:', error)
        res.sendStatus(500);
    });
});

module.exports = router;