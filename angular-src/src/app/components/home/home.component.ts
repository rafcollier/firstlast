import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  size: Object;
  title: String; 
  showSearch: Boolean; 
  sentence: Object;
  likes: Number;

  constructor(
      private flashMessage: FlashMessagesService,
      private authService: AuthService,
      private router: Router
    ) { }

  	ngOnInit() {

      window.scrollTo(0,0);

      this.showSearch = false; 

      console.log("Calling sevice to get collection size");
      this.authService.getCollectionLength().subscribe(length => {
        this.size = length; //the database entries are an array of objects//now available for *ngFor on home.html
        console.log(this.size);
        console.log(length);
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
        this.sentence = data;
        console.log(this.sentence[index]);
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
