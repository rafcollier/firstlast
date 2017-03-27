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
	comment: String;
	username: String;
	sentence: Object;

 constructor(
      private validateService: ValidateService, 
      private flashMessage: FlashMessagesService,
      private authService: AuthService,
      private router: Router
      ) { }

  ngOnInit() {
  }

  OnCommentSubmit(){
  	if(this.authService.loggedIn()) {
      console.log(this.username);
    } else {
      window.scroll(0, 0);
      this.flashMessage.show('You must log in to comment', {cssClass: 'alert-danger', timeout: 2000}); 
    }

  }




}
