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
    console.log("clicked title name")

  }

}



