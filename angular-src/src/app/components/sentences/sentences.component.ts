import { Component, OnInit } from '@angular/core';
//NOTE this was imported manually
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.css']
})
export class SentencesComponent implements OnInit {
  likes: Number;
  enteredBy: String;
  bookTitle: String;
  authorName: String;
  firstSentence: String;
  lastSentence: String;
  



  constructor(
      private validateService: ValidateService, 
      private flashMessage: FlashMessagesService,
      private authService: AuthService,
      private router: Router
  	) { }

  ngOnInit() {

    console.log("Calling service to fetch profile");
    this.authService.getProfile().subscribe(profile => {
      this.enteredBy = profile.user.username;
      console.log("Profile returned from server for: " + this.enteredBy);
    },
    err => {
      console.log(err);
      return false;
    });
  }

onSentencesSubmit(){

    this.likes = 0;

    const sentences = {
      likes: this.likes,
      enteredBy: this.enteredBy,
      bookTitle: this.bookTitle,
      searchTitle: this.bookTitle.toLowerCase(),
      authorName: this.authorName,
      firstSentence: this.firstSentence,
      lastSentence: this.lastSentence
    }

    console.log("In sentence submit with user :" + this.enteredBy + "with likes of:");

    //Required fields
    if(!this.validateService.validateSentences(sentences)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //Check success of write to database
    this.authService.submitSentences(sentences).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Thanks for contributing ', {cssClass: 'alert-success', timeout: 3000});
        //clear the input fields
        this.bookTitle = "";
        this.authorName = "";
        this.firstSentence = "";
        this.lastSentence = "";
        //route back to input more sentences
        this.router.navigate(['/sentences']); 
      } else {
        this.flashMessage.show('Sorry, something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/sentences']); 
        return false;
      }
    });

  }
}
