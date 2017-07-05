[{
     name: '512 IPA',
      style: 'IPA',
       image_url: 'http://bit.ly/1XtmB4d',
        abv: 5 },
{ name: '512 Pecan Porter', style: 'Porter', image_url: 'http://bit.ly/1Vk5xj4', abv: 4 }]

var mongoose = require('mongoose');

// creating schema fot beer

var beerSchema = new mongoose.Schema({
    name:String,
    style:String,
    image_url:String,
    abv:Number,
    ratings:[]
})

var Beer = mongoose.model('Beer', beerSchema);

module.exports = Beer;