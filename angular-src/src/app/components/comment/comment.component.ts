import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
	inputComment: Object;
  comments: [Object];
	username: String;
  getID: String;
  searchInputTitle: String;
  commentTitle: String;
  getTitle: String;
	sentence: Object;
  newCommentSentence: Object;
  private sub: any;

 constructor(
      private validateService: ValidateService, 
      private flashMessage: FlashMessagesService,
      private authService: AuthService,
      private router: Router,
      private route: ActivatedRoute
      ) { }

  ngOnInit() {


    //Get the paramaters passed in to this route to identify which entry these comments are for.
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.getTitle = params["bookTitle"].toLowerCase();
      this.getID = params["_id"];
    });


    //Fetch this entry from database
    this.authService.getSearchResult(this.getTitle).subscribe(data => {
      console.log("Return from server after search request for book by title");
      console.log(data);
      if(data != null) {
        this.sentence = data;
        this.comments = data.comments;
        console.log(this.comments); 
        window.scroll(0, 0);
      } else {
        this.flashMessage.show('Problem fetching this sentence', {cssClass: 'alert-danger', timeout: 3000});
        window.scroll(0, 0);
        return false; 
      }

      }, 
      err => {
        console.log(err);
        return false;
    });


    //Check if user is logged in and grab the user name. Only users can comment. 
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
  }

  //Check if user is logged on submit. Grab new comment body from form. 
  //Create new comment object to send to database with username, comment body, and db entry id 
  //Send update request to server. When data comes back successfully, create a local comments array to display on page.
  onCommentSubmit(){
  	if(this.authService.loggedIn()) {
      console.log(this.username);
      const comment = {
        username: this.username,
        body: this.inputComment,
        id: this.getID 
      }

      console.log(comment);

      this.authService.addComment(comment).subscribe(data => {
        console.log(data);
        this.comments = data.comments;
        console.log(this.comments);
        this.inputComment=""; //reset input field
        window.scrollTo(0,0);
        this.ngOnInit(); //go back to intialize
      },
      err => {
        console.log(err);
        return false;
      });

    } else {
      window.scroll(0, 0);
      this.flashMessage.show('You must log in to comment', {cssClass: 'alert-danger', timeout: 2000}); 
    }

  }
  
  onSearchBookSubmit(){

    const searchTitle = {
      title: this.searchInputTitle
    }

    if(searchTitle.title != undefined || searchTitle.title != null) {

      this.router.navigate(['/search', searchTitle.title.toLowerCase()]);

    }  

  } 


}

