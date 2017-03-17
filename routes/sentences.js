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

//Get sentences to display on the homepage
router.get('/sentences', (req, res, next) => {
	console.log("In the backend router to get sentences");
	Sentences.find({}, function (err, docs) {
		console.log("Query the database for all sentences");
		if(!err) {
			console.log("Here are the sentences:" + docs);	
			res.json(docs);
		} else {throw err;}
	});
});



module.exports = router;