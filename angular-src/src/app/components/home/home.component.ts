import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	sentences: [Object]; //getting an array of objects from the database

  constructor(private authService: AuthService, private router: Router) { }

  	ngOnInit() {
      console.log("Calling sevice to get sentences");
  		this.authService.getSentences().subscribe(entries => {
  			this.sentences = entries; //the database entries are an array of objects//now available for *ngFor on home.html
  		},
  		err => {
  			console.log(err);
  			return false;
  		});
  	}

}
