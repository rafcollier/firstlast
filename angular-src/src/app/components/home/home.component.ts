import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	sentences: [Object];

  constructor(private authService: AuthService, private router: Router) { }

  	ngOnInit() {
      console.log("Calling sevice to get sentences");
  		this.authService.getSentences().subscribe(entries => {
  			console.log(entries[0]);
  			console.log(entries[2]);
  			console.log(entries);
  			this.sentences = entries;


  			console.log(entries[0]);

        //console.log("Sentences returned from server for: " + this.sentences);
  		},
  		err => {
  			console.log(err);
  			return false;
  		});
  	}

}
