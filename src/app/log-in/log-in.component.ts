import { AuthService } from './../services/auth.service';
import { Component, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from './contatct';

//import { SHARED_FORM_DIRECTIVES } from '@angular/forms/src/directives';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent  {

  invalidLogin: boolean;
  validLogin: boolean;

  constructor( private authService: AuthService ){}

form = new FormGroup({
  email: new FormControl('',[
    Validators.required,
    Validators.email
  ]),
  password: new FormControl('',[
    Validators.required])
})

createContact(){

    let contact: Contact  = {
    Email:  "d2@gmaigcl.com",
    Password: "asdfdsg"

  };

  console.log(contact);
  this.authService.login(contact).subscribe(
    (response) => console.log(response)
  )
  };

  logIn(credentials){
    this.authService.login(credentials)
    .subscribe(result => {

      if(result)
        this.validLogin=true;
      else
        this.invalidLogin= true;
    })

    }
  }



