import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){
    console.log("Validating registration form");
    if(user.name == undefined || user.email == undefined || user.name == undefined || user.password == undefined) {
      return false;
    } else {
      return true;
    }
  }

   validateSentences(sentences){
    console.log("Validating sentence submission form");
    if(sentences.bookTitle == undefined || sentences.authorName == undefined || sentences.firstSentence == undefined || sentences.lastSentence == undefined) {
      return false;
    } else {
      return true;
    }
  }

  validateEmail(email){
    console.log("Validating email address in registration form");
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

}
