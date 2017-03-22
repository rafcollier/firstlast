import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-displayall',
  templateUrl: './displayall.component.html',
  styleUrls: ['./displayall.component.css']
})
export class DisplayallComponent implements OnInit {
  sentences: [Object]; //getting an array of objects from the database
  bookName: String;
  likes: Number;

  constructor(private authService: AuthService, private router: Router) { }

  	ngOnInit() {

      console.log("Calling sevice to get sentences");
  		this.authService.getSentences().subscribe(entries => {
  			this.sentences = entries; //the database entries are an array of objects//now available for *ngFor on home.html
        this.bookName = entries[0].bookTitle;
        console.log(this.bookName);
        console.log(entries[0].bookTitle);
  		},
  		err => {
  			console.log(err);
  			return false;
  		});

  	}

    onLikeClick(sentence) {
      sentence.likes++;
      console.log("Here are the likes" + sentence.likes);

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
