const express = require('express')
const app = express()
var mongoose = require('mongoose');
app.use(express.static('event'))
const bodyParser = require('body-parser');
var EventTable = require('./model/event');
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost/event');
router.get('/event/get', (req, res) => {
    EventTable.find().exec((err, data) => {
      res.status(200).json({
        'message':'Fetch Successfully',
        'code':'ERR200',
        'content':data
      });
    });
});
router.post('/event/createorupdate', (req, res) => {
    req.body._id = req.body._id || new mongoose.mongo.ObjectID();
    EventTable.findOneAndUpdate({_id: req.body._id}, req.body, {new: true, upsert: true}, (err, data) => {
      if (err)
        return console.log(err);
      res.status(200).json({
        'message':'Event Create Sucessfully',
        'code':'ERR200'
      });
    });
});
  
app.use('/api', router);
app.listen(3000, () => console.log('Example app listening on port 3000!'))