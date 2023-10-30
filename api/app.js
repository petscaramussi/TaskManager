const express = require('express');
const app = express();

const { mongoose } = require('./DB/mongoose');

const bodyParses = require('body-parser');

// Load in the mongoose models
const { List, Task } = require('./DB/models');

// Load middleware
app.use(bodyParses.json());

// Route Handlers

// GET
app.get('/lists', (req, res) => {
    // return an array of all lists in database
    List.find().then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e)
    });
})


// POST
app.post('/lists', (req, res) => {
    // create a new list and return the new list document back to user (whitch includes the id)
    // The list information (fields) will be passed throught JSON request body
    let title = req.body.title;

    let newList = new List({
        title
    });
    newList.save().then((listDoc) => {
        // the full list document is returned (incl. id)
        res.send(listDoc);
    })
});

// PATCH
app.patch('/lists/:id', (req, res) => {
    // update the specified list (list document with id in the URL) with the new values specified in the JSON body of the request
})

// DELETE
app.delete('/lists/:id', (req, res) => {
    // delete the specified list (document with id in the URL)
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})