var firstRoute  = require('./db.json');
var secondRoute = require('./addToCart/index.post.json');
// var thirdRoute  = require('./jsonfile3.json');
// var fourthRoute = require('./jsonfile4.json');
// and so on

module.exports = function() {
return {
firstRoute  : firstRoute,
secondRoute : secondRoute,
// thirdRoute  : thirdRoute, 
// fourthRoute : fourthRoute
// and so on
}
}