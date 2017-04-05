import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
  selector: 'app-displayall',
  templateUrl: './displayall.component.html',
  styleUrls: ['./displayall.component.css']
})
export class DisplayallComponent implements OnInit {
  sentences: [Object]; //getting an array of objects from the database
  bookName: String;
  likes: Number;
  title: String;
  username: String;
  authToken: any;


  constructor(
      private validateService: ValidateService, 
      private flashMessage: FlashMessagesService,
      private authService: AuthService,
      private router: Router
  ) { }

 	ngOnInit() {

    if (this.authService.loggedIn()) {
      this.authService.getProfile().subscribe(profile => {
        this.username = profile.user.username;
        console.log("Profile returned from server for: " + this.username);
      },
      err => {
        console.log(err);
        return false;
      });
    }

    window.scrollTo(0,0);

    console.log("Calling sevice to get sentences");
		this.authService.getSentences().subscribe(entries => {
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

 // onLikeClick(sentence, index) {
    //console.log("Here are the likes" + sentence.likes);

  //  if(this.authService.loggedIn()) {
  //    console.log(this.username);
  //    console.log(sentence.likedBy);
  //    const isInArray = sentence.likedBy.includes(this.username); //this user already liked this sentence-pair 
//
//      if(!isInArray) {
//        sentence.likedBy.push(this.username); 
//        console.log("Push to likes array so same user can't like twice: " + sentence.likedBy);
//        this.authService.incrementLikes(sentence).subscribe(data => {
//          console.log(data);
//          this.sentences[index] = data;
//          console.log(this.sentences[index]);
//        },
//        err => {
//          console.log(err);
//          return false;
//        });
//      } else {
//        window.scroll(0, 0);
//        this.flashMessage.show('Hey ' + this.username + ', you already liked this one.', {cssClass: 'alert-danger', timeout: 2000}); 
//        return false; 
//      }
//    } else {
//        window.scroll(0, 0);
//        this.flashMessage.show('You must log in to like sentences', {cssClass: 'alert-danger', timeout: 2000}); 
//    }
//
//  } 

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


  onSearchBookSubmit(){

    const searchTitle = {
      title: this.title
    }

    if(searchTitle.title != undefined || searchTitle.title != null) {

      this.router.navigate(['/search', searchTitle.title.toLowerCase()]);

    }  

  }
  
}
