// to perform database operations on the user data
const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.post('/add', (req, res) => {
    console.log(req.body);

    // storing the data in the database
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
})

router.get('/getall', (req, res) => {
    // reading the data from the database
    Model.find({})
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

// : denotes url paramter
router.get('/getbyemail/:email', (req, res) => {

    Model.find({email : req.params.email })
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
})

module.exports = router;