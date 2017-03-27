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
	comment: Object;
	username: String;
	sentence: Object;
  newSentence: Object;
  title: String;
  private sub: any;
  likes: Number;
  enteredBy: String;
  bookTitle: String;
  authorName: String;
  firstSentence: String;
  lastSentence: String;
  likedBy: [String];
  dateEntered: Date;
  comments: [Object];

 constructor(
      private validateService: ValidateService, 
      private flashMessage: FlashMessagesService,
      private authService: AuthService,
      private router: Router,
      private route: ActivatedRoute
      ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.sentence = params;
      console.log(this.sentence);
    });

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

  //Must recreate object on a submit?
  onCommentSubmit(sentence){
  	if(this.authService.loggedIn()) {
      console.log(this.username);
      const comment = {
        username: this.username,
        body: this.comment,
        id: sentence._id
      }

      console.log(comment);

      this.authService.addComment(comment).subscribe(data => {
        console.log(data);
        this.newSentence = data;
        console.log(this.newSentence);
        this.comment="";
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
      title: this.title
    }

    if(searchTitle.title != undefined || searchTitle.title != null) {

      this.router.navigate(['/search', searchTitle.title.toLowerCase()]);

    }  

  } 


}

