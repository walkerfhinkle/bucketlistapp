module.exports = function(app){
	app.get('/', function(req, res, next){
		res.send("Hello Homepage");
	});
	app.get('/signup', function(req, res, next){
		res.send("Hey folks, Thanks for signing up!");
	});
}