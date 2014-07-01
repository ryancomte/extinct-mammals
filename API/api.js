var Mammal = require('../API/mammal.js');

exports.get = function(req, res) {
    Mammal.find({}, function (err, mammals) {
        if (err) {
            res.send('something didn\'t work');
        }
        res.send(mammals);
    });
};

exports.post = function(req, res) {
    if(req.body){
        var mammals = new Mammal(req.body);

        mammals.save(function (err, mammals) {
            if (err) {
                res.send('oh snap, broken.');
            }
            res.send(mammals);
        });
    }
};

exports.delete = function(req, res){
    var name = req.params.name;

    Mammal.remove({name:name},function(err, mammal){
        res.send(mammal + 'removed mammal successfully');
        if(err) {
            res.send('this didn\'t work');
        }
    });


};