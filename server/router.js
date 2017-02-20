var Auth = require('./controllers/auth');
var passportService = require('./services/passport');
var passport = require('passport');
var User = require('./models/user');

var requireAuth = passport.authenticate('jwt', {session: false});

module.exports = function(app){

	app.get('/', requireAuth, function(req, res){
		res.send('Hello Homepage');
		//res.send({hi:'there'});
	});
	
	app.post('/signup', Auth.signup);
}