import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import {ValidateService} from '../../services/validate.service';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	title: String;
	searchTitle: Object;
	private sub: any;
	sentence: Object;
  likes: Number;
  numComments: Number;
  today: Date;
  username: String;
  authToken: any;

  constructor(
  	private route: ActivatedRoute,
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
   
   //Get the parameter passed in with the route (book title) 
  	console.log("In the search component...");
    this.sub = this.route.params.subscribe(params => {
  	  this.title = params['title'].toLowerCase();
      console.log("The title is: " + this.title);
    }); 
    this.searchBook(this.title);
  }

  searchBook(title) {

    this.authService.getSearchResult(title).subscribe(data => {
      console.log("Return from server after search request for book by title");
      console.log(data);
      this.title="";
      if(data != null) {
        this.sentence = data;
        this.numComments = data.comments.length; 
        console.log("found the title");
        window.scroll(0, 0);
      } else {
        this.flashMessage.show('Book not found', {cssClass: 'alert-danger', timeout: 3000});
        window.scroll(0, 0);
        return false; 
      }

      }, 
      err => {
        console.log(err);
        return false;
    });

  }

  onSearchBookSubmit(){
  	console.log("In search function on search page");
    const searchTitle = {
      title: this.title
    }

    console.log(searchTitle.title.length);

    if(searchTitle.title.length > 0) {
      this.searchBook(searchTitle.title.toLowerCase());
    }
  }

  onCommentClick() {
    console.log("User clicked on comments icon for:");
    const commentSentence = this.sentence;
    console.log(commentSentence);
    this.router.navigate(['/comment', commentSentence]);
  }


  onLikeClick(sentence) {
  console.log("Here are the likes" + sentence.likes);
    if(this.authService.loggedIn()) {
      console.log(this.username);
      console.log(sentence.likedBy);
      const isInArray = sentence.likedBy.includes(this.username); 

      if(!isInArray) {
      const updateLikes = {
          likeID: sentence._id,
          likeUsername: this.username
        }
        console.log(updateLikes);
        this.authService.incrementLikes(updateLikes).subscribe(data => {
          console.log(data);
          this.sentence = data;
          console.log(this.sentence);
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

//onLikeClick(sentence) {
  //console.log("Here are the likes" + sentence.likes);
   // if(this.authService.loggedIn()) {
   //   console.log(this.username);
   //   console.log(sentence.likedBy);
   //   const isInArray = sentence.likedBy.includes(this.username); 
//
//      if(!isInArray) {
//      sentence.likedBy.push(this.username); 
//        console.log("Push to likes array so same user can't like twice: " + sentence.likedBy);
//        this.authService.incrementLikes(sentence).subscribe(data => {
//          console.log(data);
//          this.sentence = data;
//          console.log(this.sentence);
//        },
//        err => {
//          console.log(err);
//          return false;
//        });
//      } else {
//         window.scroll(0, 0);
//         this.flashMessage.show('Hey ' + this.username + ', you already liked this one.', {cssClass: 'alert-danger', timeout: 2000}); 
//         return false; 
//      }
//    } else {
//        window.scroll(0, 0);
//        this.flashMessage.show('You must log in to like sentences', {cssClass: 'alert-danger', timeout: 2000}); 
//    }
//  } 

  

}
