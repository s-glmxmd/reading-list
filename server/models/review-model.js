const mongose = require('mongoose');

const reviewSchema = new mongose.Schema(
    {
        author: {type: String, required: true},
        title: {type: String, required: true, unique: true},
        thoughts: {type: String}
    },
);

module.exports = mongose.model("Review", reviewSchema);