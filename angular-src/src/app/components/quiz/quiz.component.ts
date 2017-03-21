import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  sentences: [Object]; //getting an array of objects from the database
  index0: number;
  index1: number;
  index2: number;
  sentenceIndex: number;
  streak: number;

  constructor(
      private flashMessage: FlashMessagesService,
      private authService: AuthService,
      private router: Router
      ) { }

  	ngOnInit() {

      if(this.streak === NaN || this.streak === undefined){
        this.streak = 0;
      }
      console.log("this streak is " + this.streak);

      console.log("Calling sevice to get sentences");
  		this.authService.getSentences().subscribe(entries => {
  			this.sentences = entries; //the database entries are an array of objects//now available for *ngFor on home.html
  		},
  		err => {
  			console.log(err);
  			return false;
  		});

      this.sentenceIndex=0;
      this.index0 = Math.floor(Math.random()*3);
      this.index1 = null;
      this.index2 = null;
      while(this.index1 === null || this.index1 === this.index0) {
        this.index1 = Math.floor(Math.random()*3);
      }
      var arr = [0,1,2];
      arr.splice(arr.indexOf(this.index0),1);
      arr.splice(arr.indexOf(this.index1),1);
      this.index2 = arr[0];
  	}

    onClickOne() {
      if(this.index0 === this.sentenceIndex) {
        this.flashMessage.show('Correct! Try another', {cssClass: 'alert-success', timeout: 1000});
        this.streak++;
        this.ngOnInit();
      } else {
        this.flashMessage.show('Sorry, guess again', {cssClass: 'alert-danger', timeout: 1000});
        this.streak=0;
        return false; 
      } 
    }

    onClickTwo() {
      if(this.index1 === this.sentenceIndex) {
        this.flashMessage.show('Correct! Try another', {cssClass: 'alert-success', timeout: 1000});
        this.streak++;
        this.ngOnInit();
      } else {
        this.streak=0;
        this.flashMessage.show('Sorry, guess again', {cssClass: 'alert-danger', timeout: 1000});
        return false; 
      } 
    }

    onClickThree() {
      if(this.index2 === this.sentenceIndex) {
        this.flashMessage.show('Correct! Try another', {cssClass: 'alert-success', timeout: 1000});
        this.streak++;
        this.ngOnInit();
      } else {
        this.streak=0;
        this.flashMessage.show('Sorry, guess again', {cssClass: 'alert-danger', timeout: 1000});
        return false; 
      } 
    }

    onResetQuiz() {
      this.streak=0;
      this.ngOnInit();
    }

  	onRandomSubmit() {
      console.log("Calling sevice to get sentences");
      this.authService.getSentences().subscribe(entries => {
        this.sentences = entries; //the database entries are an array of objects//now available for *ngFor on home.html
        window.scroll(0, 0);
      },
      err => {
        console.log(err);
        return false;
      });

    }

    
}