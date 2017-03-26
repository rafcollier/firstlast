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
  title: String;


  constructor(private authService: AuthService, private router: Router) { }

  	ngOnInit() {

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

    onLikeClick(sentence, index) {
      console.log("Here are the likes" + sentence.likes);
      this.authService.incrementLikes(sentence).subscribe(data => {
        console.log(data);
        this.sentences[index] = data;
        console.log(this.sentences[index]);
      },
      err => {
        console.log(err);
        return false;
      });
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
