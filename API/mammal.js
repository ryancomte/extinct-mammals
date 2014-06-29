
    var mongoose = require('mongoose');
    var schema = mongoose.Schema;

    var mammalSchema = new schema({
        name: String,
        type: String,
        year_extinct: Number
    });



module.exports = mongoose.model('Mammal', mammalSchema);