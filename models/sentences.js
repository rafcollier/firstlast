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
	comments: [{
      	username: String,
      	body: String
	}],
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

//Search by searchTitle for all books and return in alphabetical order
module.exports.findAllSort = function(callback) {
	Sentences.find({}, null, {sort: {searchTitle: 1}}, callback);
}

module.exports.getSentencesByBookTitle = function(searchTitle, callback) {
	const query = {searchTitle: searchTitle}
	Sentences.findOne(query, callback);
}

module.exports.addSentences = function(newSentences, callback) {
	newSentences.save(callback);
}

//module.exports.incrementLikes = function(sentence, callback) {
 // console.log("In Sentences model...to increment likes...")
 // const query = {_id:sentence._id};
 // //console.log(query);
 // console.log(sentence.likes);
 // console.log(sentence.likedBy)
 // sentence.likes++;
 // const likesPlus = sentence.likes;
 // const likesUserArray = sentence.likedBy;
 // console.log(likesPlus);
 // console.log(likesUserArray);
 // const newLikeUser = likesUserArray[likesUserArray.length - 1];
  //query by id, pass incremented like count, set new to true to pass updated doc to callback
 // Sentences.findOneAndUpdate(query, {likes: likesPlus, $push:{likedBy: newLikeUser}}, {new: true}, callback);
//}

module.exports.incrementLikes = function(updateLikes, callback) {
  console.log("In Sentences model...to increment likes...")
  const query = {_id:updateLikes.likeID};
  const newLikeUser = updateLikes.likeUsername;
  console.log(query);
  console.log(newLikeUser);
  //query by id, pass incremented like count, set new to true to pass updated doc to callback
  Sentences.findOneAndUpdate(query, {$inc: {likes: 1}, $push: {likedBy: newLikeUser}}, {new: true}, callback);
}


module.exports.addComment = function(comment, callback) {
  console.log("In Sentences model...to add comment...")
  const query = {_id:comment.id};
  console.log(query);
  console.log(comment.body);  
  console.log(comment.username);  
  const body = comment.body;
  const username = comment.username;
  const newComment = {"username": username, "body": body};
  console.log(newComment);
  //query by id, pass incremented like count, set new to true to pass updated doc to callback
  Sentences.findOneAndUpdate(query, {$push:{comments: {"username": username, "body": body}}}, {new: true}, callback);
}


