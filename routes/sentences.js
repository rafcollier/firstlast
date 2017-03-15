const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Sentences = require('../models/sentences');

router.post('/sentences', (req, res, next) => {
	let newSentences = new Sentences({
		bookTitle:  req.body.bookTitle,
		authorName: req.body.authorName,
		firstSentence: req.body.firstSentence,
		lastSentence: req.body.lastSentence
	});

	Sentences.addSentences(newSentences, (err, sentences) => {
		if(err) {
			res.json({success: false, msg: 'Failed to add sentences'});
		} else {
			res.json({success: true, msg: 'Sentences added'});
		}
	});	
});


//router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
//	res.json({user: req.user});
//});

module.exports = router;