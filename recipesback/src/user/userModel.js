var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    favoritefood: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('foods', userSchema);