import { Component, OnInit } from '@angular/core';
//NOTE this was imported manually
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sentences',
  templateUrl: './sentences.component.html',
  styleUrls: ['./sentences.component.css']
})
export class SentencesComponent implements OnInit {
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
  }

onSentencesSubmit(){
    const sentences = {
      bookTitle: this.bookTitle,
      authorName: this.authorName,
      firstSentence: this.firstSentence,
      lastSentence: this.lastSentence
    }

    //Required fields
    if(!this.validateService.validateSentences(sentences)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    //Check success of write to database
    this.authService.submitSentences(sentences).subscribe(data => {
      if(data.success){
        this.flashMessage.show('Thank you for contributing', {cssClass: 'alert-success', timeout: 3000});
        this.router.navigate(['/sentences']); 
      } else {
        this.flashMessage.show('Sorry, something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/sentences']); 
      }
    });

  }
}
