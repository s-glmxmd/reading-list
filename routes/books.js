const express = require("express");
const recordsRoutes = express.Router();
const dbObj = require("../connection");

const ObjectId = require("mongodb").ObjectId;

recordsRoutes.route("/").get((req, res) => {
    let db_connection = dbObj.getDb("test");
    db_connection.collection("books").find({}).forEach((result) => {
        console.log(result.author);
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

module.exports = recordsRoutes;