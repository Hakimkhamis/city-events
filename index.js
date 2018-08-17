const express = require('express')
const app = express()
var mongojs = require('mongojs');

app.use(express.static('event'))
 const bodyParser = require('body-parser');
// var EventTable = require('./model/event');
// const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var db = mongojs('localhost:27017/event', ['events'])

app.use(express.static(__dirname+'/public'));

app.get('/event', function (req , res){
    db.events.find(function (err, docs){
        res.json(docs)

        });
    });

app.post("/events", function(req, res) {
    db.events.save(req.body, function(error, records) {
        if (error) {
            res.status(400).send("Event was not added.")
        }
        res.send("Event succesfully added.");
    });
})

app.get('/users', function (req , res){
    db.users.find(function (err, docs){
        res.json(docs)

        });
    });
app.post('/users', function(req,res){
    db.users.insert(req.body,function(err,docs){
        res.send();
    })
})

// router.post('/event/createorupdate', (req, res) => {
//     req.body._id = req.body._id || new mongojs.mongo.ObjectID();
//     EventTable.findOneAndUpdate({_id: req.body._id}, req.body, {new: true, upsert: true}, (err, data) => {
//       if (err)
//         return console.log(err);
//       res.status(200).json({
//         'message':'Event Create Sucessfully',
//         'code':'ERR200'
//       });
//     });});
  
// app.use('/api', router);
app.listen(3000, () => console.log('Example app listening on port 3000!'))