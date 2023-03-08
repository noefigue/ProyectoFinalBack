const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const cars = new Schema ({
    marca:{
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    version:{
        type: Number,
        required: true
    },
    precio:{
        type: Number,
        required: true
    }

})

const Cars = mongoose.model('Car', cars);

module.exports={Cars};