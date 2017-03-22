const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const Sentences = require('../models/sentences');

router.post('/sentences', (req, res, next) => {
	let newSentences = new Sentences({
		likes: req.body.likes,
		enteredBy: req.body.enteredBy,
		bookTitle:  req.body.bookTitle,
		authorName: req.body.authorName,
		firstSentence: req.body.firstSentence,
		lastSentence: req.body.lastSentence
	});

	console.log("Entering sentences for user: " + newSentences.enteredBy);

	Sentences.addSentences(newSentences, (err, sentences) => {
		if(err) {
			res.json({success: false, msg: 'Failed to add sentences'});
		} else {
			res.json({success: true, msg: 'Sentences added'});
		}
	});	
});

//Get sentences to display on the homepage
router.get('/getAllSentences', (req, res, next) => {
	console.log("In the backend router to get sentences");
	//Below would find ALL sentences, not a random sample
	//Sentences.find({}, function (err, docs) {  
	//Find random sample of sentences
	Sentences.aggregate({ $sample: {size: 3}}, function (err, docs) {
		console.log("Query the database for all sentences");
		if(!err) {
			console.log("Here are the sentences:" + docs);	
			res.json(docs);
		} else {throw err;}
	});
});

//Get number of books in the collection
router.get('/collectionLength', (req, res, next) => {
	console.log("In the backend router to get collection length");
	Sentences.count({}, function (err, docs) {
		console.log("Query database for number of books in collection");
		if(!err) {
			console.log("Here is collection length:" + docs);	
			res.json(docs);
		} else {throw err;}
	});
});

//Search for book by title
//router.get('/searchBook', (req, res, next) => {
	//console.log(req.body);
	//let title = req.body;
	//console.log("In the backend router to search book by title");
    //Sentences.getSentencesByBookName(title, (err, book) => {
	//	console.log("returned from database request to search for book by title");
	//	if(err) throw err;
	//	if(!book) {
	//		return res.json({success: false, msg: 'That book is not in the collection'});
	//	}
//
//		res.json(book);
//
//	});
//});



module.exports = router;