const express = require("express");
const recordsRoutes = express.Router();
const dbObj = require("../connection");
const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const ObjectId = require("mongodb").ObjectId;

const Review = require('../models/review-model');

recordsRoutes.route("/books").get((req, res) => {
    let db_connection = dbObj.getDb("test");
    db_connection.collection("books").find({}).toArray((err, result) => {
        if (err) {
            console.log(err);
        } 
        res.json(result);
    });
});

recordsRoutes.route("/:id").get((req, res) => {
    let db_connection = dbObj.getDb("test");
    let query = { '_id': ObjectId(req.params.id)};
    db_connection.collection("books").findOne(query, (err, result) => {
        if (err){
            console.log(err);
        } 
        res.json(result);
    });
});

recordsRoutes.route("/books/:author").get((req, res) => {
    let db_connection = dbObj.getDb("test");
    let query = {'author': req.params.author};
    db_connection.collection("books").findOne(query, (err, result) => {
        if (err){
            console.log(err);
        } 
        res.json(result);
    });
});


recordsRoutes.route("/create").post((req, res) => {
    let db_connection = dbObj.getDb("test");
    const newReview = new Review({
        author: req.body.author,
        title: req.body.title,
        thoughts: req.body.thoughts
    });
    
    db_connection.collection("books").insertOne(newReview, (err, result) => {
        if (err) console.log(err);
        res.json(result);
    })
});

module.exports = recordsRoutes;