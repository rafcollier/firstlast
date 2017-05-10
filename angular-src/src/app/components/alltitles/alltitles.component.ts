import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
  selector: 'app-alltitles',
  templateUrl: './alltitles.component.html',
  styleUrls: ['./alltitles.component.css']
})
export class AlltitlesComponent implements OnInit {
  sentences: [Object]; //getting an array of objects from the database
  bookName: String;
  likes: Number;
  sentenceIndex: Number;
  title: String;
  username: String;
  showSentences: Boolean;
  authToken: any;


  constructor(
      private validateService: ValidateService, 
      private flashMessage: FlashMessagesService,
      private authService: AuthService,
      private router: Router
  ) { }

  ngOnInit() {

    this.showSentences = false;
    
    console.log("Calling sevice to get sentences");
	  this.authService.getAllTitles().subscribe(entries => {
	    this.sentences = entries; //the database entries are an array of objects//now available for *ngFor on home.html
      this.bookName = entries[0].bookTitle;
      console.log(this.bookName);
      console.log(entries[0]._id);
	  },
	  err => {
		  console.log(err);
 		  return false;
 	  });

  }


  onTitleClick(sentence, index) {
    console.log("clicked title name");
    console.log("sentence: " + sentence);
    console.log("index: " + index);
    this.showSentences = true;
    this.sentenceIndex = index;
    console.log(this.showSentences);

  }

  onLikeClick(sentence, index) {
    if(this.authService.loggedIn()) {
      const isInArray = sentence.likedBy.includes(this.username); //this user already liked this sentence-pair 
      if(!isInArray) {
        const updateLikes = {
          likeID: sentence._id,
          likeUsername: this.username
        }
        console.log(updateLikes);
        this.authService.incrementLikes(updateLikes).subscribe(data => {
          this.sentences[index] = data;
          console.log(data);
        },
        err => {
          console.log(err);
          return false;
        });
      } else {
        window.scroll(0, 0);
        this.flashMessage.show('Hey ' + this.username + ', you already liked this one.', {cssClass: 'alert-danger', timeout: 2000}); 
        return false; 
      }
    } else {
        window.scroll(0, 0);
        this.flashMessage.show('You must log in to like sentences', {cssClass: 'alert-danger', timeout: 2000}); 
    }

  } 


  onCommentClick(sentence) {
    console.log("User clicked on comments icon for:");
    const commentSentence = sentence;
    console.log(commentSentence);
    this.router.navigate(['/comment', commentSentence]);
  }
  

}



