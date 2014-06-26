var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/test');

var schema = mongoose.Schema;

var mammalSchema = new schema({
    name: String,
    type: String,
    year_extinct: Number
});

var Mammal = mongoose.model('Mammal', mammalSchema);

app.get('/', function(req, res){
    Mammal.find({}, function(err, mammals){
        if(err){
            res.send('something didn\'t work');
        }
        res.send(mammals);
    })
});

app.post('/', function(req, res){
    var mammals = new Mammal(req.body);
    mammals.save(function(err, mammals){
        if(err){
            console.log('oh snap, broken.');
        }
        res.send(mammals);
    });
});

app.delete('/:id',function(req, res){
    var id = req.params.id;
   Mammal.findOne({_id:id}, function(err, id){
       if(id){
           id.remove();
           res.send(id + "removed");
       }else if(err){
           res.send('this didn\'t work');
       }
   })
});

app.listen(8888, function(){
    console.log('connected!');
});

