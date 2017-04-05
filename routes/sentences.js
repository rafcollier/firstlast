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
	searchTitle: req.body.searchTitle,
	authorName: req.body.authorName,
	firstSentence: req.body.firstSentence,
	lastSentence: req.body.lastSentence
	//likedBy: req.body.likedBy,
	//dateEntered: req.body.dateEntered,
	//comments: req.body.comments
  });

  console.log("Entering sentences for user: " + newSentences.enteredBy);

  Sentences.getSentencesByBookTitle(newSentences.searchTitle, (err, book) => {
    console.log("Returned from database with book");
    if(err) throw err;
    if(book) {
      return res.json({sucess: false, msg: 'This book is already in the collection'})
    }	

	Sentences.addSentences(newSentences, (err, sentences) => {
	  if(err) {
	    res.json({success: false, msg: 'Failed to add sentences'});
	  } else {
		res.json({success: true, msg: 'Sentences added'});
	  }
    });	
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
router.get('/searchBook', (req, res, next) => {
	console.log("In the backend router to search book by title");
	console.log(req.query);

	//const query = {bookTitle: bookTitle}
	Sentences.findOne(req.query, function(err, docs) {
		if(!err) {
			res.json(docs);
		} else {throw err;}
	});
});

//Increment likes for book found by ID
router.put('/incrementLikes', (req, res, next) => {
	console.log("In the backend router to increment likes");
	console.log(req.body);
	Sentences.incrementLikes(req.body, (err, docs) => {
      if(err) throw err;
	  else {
		console.log(docs);
		res.json(docs);
		}
	})
});

//Add comments to setence
router.put('/addComment', (req, res, next) => {
	console.log("In the backend router to add comment");
	console.log(req.body);
	Sentences.addComment(req.body, (err, docs) => {
      if(err) throw err;
	  else {
		console.log(docs);
		res.json(docs);
		}
	})
});


	


module.exports = router;