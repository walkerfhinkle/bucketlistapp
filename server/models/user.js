var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
	email: {
		type: String,
		unique: true,
		lowercase: true
	},
	password: String
});

var model = mongoose.model('user', userSchema);

userSchema.pre('save', function(next){
var user = this;
	bcrypt.genSalt(10, function(err, salt){
		if(err) { return next(err); }

		bcrypt.hash(user.password, salt, null, function(err, hash){
			if (err) { return next(err); }

			user.password = hash;
			next();
		});
	});
});

module.exports = model;