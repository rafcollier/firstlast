import { Component, OnInit } from '@angular/core';
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

  constructor(private authService: AuthService, private router: Router) { }

  	ngOnInit() {

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


    //onSearchBookSubmit(){

    //const title = this.title;
    //console.log("Searching database for: " + title);

    //this.authService.getSearchResult(title).subscribe(data => {
    //  console.log("searching for book by title");
    //  if (data.success) {
    //    this.flashMessage.show('You are logged in', {cssClass: 'alert-success', timeout: 5000});
    //    this.router.navigate(['/sentences']);

    //  } else {
    //    this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout: 5000});
    //    this.router.navigate(['/login']);

    //  }


    //});

  //}

}
