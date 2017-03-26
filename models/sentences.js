const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const SentenceSchema = mongoose.Schema({
	
	likes: {
		type: Number, default: 0
	},
	enteredBy: {
		type: String
	},
	dateEntered: {
		type: Date, default: Date.now
	},
	likedBy: {
		type: [String]
	},
	comments: {
		type: [Object]
	},
	bookTitle: {
		type: String
	},
	searchTitle: {
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

module.exports.incrementLikes = function(sentence, callback) {
  console.log("In Sentences model...to increment likes...")
  const query = {_id:sentence._id};
  //console.log(query);
  console.log(sentence.likes);
  console.log(sentence.likedBy)
  sentence.likes++;
  const likesPlus = sentence.likes;
  const likesUserArray = sentence.likedBy;
  console.log(likesPlus);
  console.log(likesUserArray);
  const newLikeUser = likesUserArray[likesUserArray.length - 1];
  //query by id, pass incremented like count, set new to true to pass updated doc to callback
  Sentences.findOneAndUpdate(query, {likes: likesPlus, $push:{likedBy: newLikeUser}}, {new: true}, callback);
}


