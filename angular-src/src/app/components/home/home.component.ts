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

  constructor(
      private flashMessage: FlashMessagesService,
      private authService: AuthService,
      private router: Router
    ) { }

  	ngOnInit() {

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


  onSearchBookSubmit(){

    const searchTitle = {
      title: this.title
    }
    console.log("Searching database for: " + searchTitle.title);

    this.authService.getSearchResult(searchTitle.title).subscribe(data => {
      console.log("Return from server after search request for book by title");
      console.log(data);
      this.title="";
      if(data != null) {
        this.showSearch = true;
        this.sentence = data;
        console.log("found the title");
      } else {
        this.flashMessage.show('Book not found', {cssClass: 'alert-danger', timeout: 3000});
      }
      //this.router.navigate(['/searchResult']);

      }, 
      err => {
        console.log(err);
        return false;
    });

  }

}
