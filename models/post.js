const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    describe:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Posts',Schema)