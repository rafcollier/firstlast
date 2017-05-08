import { Injectable } from '@angular/core';

//NOTE -- imported manually
import{Http, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  sentences: any;
  title: any;

  //inject http into constructor
  constructor(private http: Http) { }

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //return this.http.post('http://localhost:3000/users/register', user, {headers: headers}) //for local development
    return this.http.post('users/register', user, {headers: headers})
      .map(res => res.json());
  }

  submitSentences(sentences) {
    this.loadToken();
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    //return this.http.post('http://localhost:3000/sentences/sentences', sentences, {headers: headers}) //for local development
    return this.http.post('sentences/sentences', sentences, {headers: headers}) //for local development
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', user, {headers: headers}) //add this for local dev: http://localhost:3000/
    //return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers}) //add this for local dev: http://localhost:3000/
      .map(res => res.json());
  }

  getProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/profile', {headers: headers}) //add this for local dev: http://localhost:3000/
    //return this.http.get('http://localhost:3000/users/profile', {headers: headers}) //add this for local dev: http://localhost:3000/
      .map(res => res.json());
  } 

  getSearchResult(title) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let params = new URLSearchParams();
    params.set('searchTitle', title);
    let options = new RequestOptions();
    options.headers = headers;
    options.search = params;
    return this.http.get('sentences/searchBook', options) //add this for local dev: http://localhost:3000/
    //return this.http.get('http://localhost:3000/sentences/searchBook', options) //add this for local dev: http://localhost:3000/
      .map(res => res.json());
  } 

  //incrementLikes(sentence) {
  //  let body = JSON.stringify(sentence);
 //   let headers = new Headers();
 //   headers.append('Content-Type', 'application/json');
 //   let options = new RequestOptions();
 //   options.headers = headers;
    //return this.http.put('sentences/incrementLikes', body, options) //add this for local dev: http://localhost:3000/
 //   return this.http.put('http://localhost:3000/sentences/incrementLikes', body, options) //add this for local dev: http://localhost:3000/
 //     .map(res => res.json());
 // } 

  incrementLikes(updateLikes) {
    let body = JSON.stringify(updateLikes);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions();
    options.headers = headers;
    return this.http.put('sentences/incrementLikes', body, options) //add this for local dev: http://localhost:3000/
    //return this.http.put('http://localhost:3000/sentences/incrementLikes', body, options) //add this for local dev: http://localhost:3000/
      .map(res => res.json());
  } 

  addComment(comment) {
    let body = JSON.stringify(comment);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions();
    options.headers = headers;
    return this.http.put('sentences/addComment', body, options) //add this for local dev: http://localhost:3000/
    //return this.http.put('http://localhost:3000/sentences/addComment', body, options) //add this for local dev: http://localhost:3000/
      .map(res => res.json());
  } 

  getCollectionLength() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('sentences/collectionLength', {headers: headers}) //add this for local dev: http://localhost:3000/
    //return this.http.get('http://localhost:3000/sentences/collectionLength', {headers: headers}) //add this for local dev: http://localhost:3000/
      .map(res => res.json());
  } 

  getSentences() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('sentences/getAllSentences', {headers: headers}) //add this for local dev: http://localhost:3000/
    //return this.http.get('http://localhost:3000/sentences/getAllSentences', {headers: headers}) //add this for local dev: http://localhost:3000/
      .map(res => res.json());
  } 

  getAllTitles() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('sentences/getAllSentences', {headers: headers}) //add this for local dev: http://localhost:3000/
    //return this.http.get('http://localhost:3000/sentences/getAllTitles', {headers: headers}) //add this for local dev: http://localhost:3000/
      .map(res => res.json());
  } 

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user)); //local storage can only store strings, not objects
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  loggedIn() {
    return tokenNotExpired();
}


}
