import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	title: String;
	searchTitle: Object;
	private sub: any;
	sentence: Object;
    likes: Number;
    today: Date;

  constructor(
  	private route: ActivatedRoute,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
   
   window.scrollTo(0,0);
  
  	console.log("In the search component...");
    this.sub = this.route.params.subscribe(params => {
  	  this.title = params['title'].toLowerCase();
      console.log("The title is: " + this.title);
    }); 
    this.searchBook(this.title);
  }

  searchBook(title) {

    this.authService.getSearchResult(title).subscribe(data => {
      console.log("Return from server after search request for book by title");
      console.log(data);
      this.title="";
      if(data != null) {
        this.sentence = data;
        console.log("found the title");
      } else {
        this.flashMessage.show('Book not found', {cssClass: 'alert-danger', timeout: 3000});
      }

      }, 
      err => {
        console.log(err);
        return false;
    });

  }

  onSearchBookSubmit(){
  	console.log("In search function on search page");
    const searchTitle = {
      title: this.title.toLowerCase()
    }
    this.searchBook(searchTitle.title);
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
  

}
