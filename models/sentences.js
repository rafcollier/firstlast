const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const SentenceSchema = mongoose.Schema({
	
	likes: {
		type: Number
	},
	enteredBy: {
		type: String
	},
	bookTitle: {
		type: String
	},
	authorName: {
		type: String,
		required: true
	},
	firstSentence: {
		type: String,
		required: true
	},
	lastSentence: {
		type: String,
		required: true
	}
});

const Sentences = module.exports = mongoose.model('Sentences', SentenceSchema)

module.exports.getSentencesById = function(id, callback) {
	Sentences.findById(id, callback);
}

module.exports.getSentencesByBookTitle = function(bookTitle, callback) {
	const query = {bookTitle: bookTitle}
	Sentences.findOne(query, callback);
}

module.exports.addSentences = function(newSentences, callback) {
	newSentences.save(callback);
}


