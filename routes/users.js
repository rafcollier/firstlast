const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const User = require('../models/user');

router.post('/register', (req, res, next) => {

	let newUser = new User({
		name:  req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password
	});

	console.log("Entering user register route in Node with user :" + newUser);

	User.addUser(newUser, (err, user) => {
		if(err) {
			res.json({success: false, msg: 'Failed to register user'});
		} else {
			res.json({success: true, msg: 'User registered'});
			console.log("Sucess...New user added. Returning: ");
		}
	});	
});

router.post('/authenticate', (req, res, next) => {
	const username = req.body.username;
	const password = req.body.password;

	console.log("Authenticating login in Node for:" + username);

	User.getUserByUsername(username, (err, user) => {
		console.log("Returned from database request to look up user by name");
		if(err) throw err;
		if(!user) {
			return res.json({success: false, msg: 'User not found'});
		}
		
		User.comparePassword(password, user.password, (err, isMatch) => { 

			console.log("Returning from password check...prepare response to angular");
			
			if (err) throw err;
			
			if(isMatch) {
				console.log('Entering isMatch');
				const token = jwt.sign(user, config.secret, {
					expiresIn: 604800 //1 week
				});

				res.json({
					success: true,
					token: 'JWT ' + token,
					user: {
						id: user._id,
						name: user.name,
						username: user.username,
						email: user.email
					}

					
				});

				console.log("Password match...returning");

			} else {
				return res.json({success: false, msg: 'Wrong password'});
			}
		});
	});
});

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
	console.log("Returning profile to client");
	res.json({user: req.user});
});

module.exports = router;