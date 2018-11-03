import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

form = new FormGroup({
  firstName: new FormControl('',[
    Validators.required
  ]),
  lastName: new FormControl('',[
    Validators.required
  ]),
  email: new FormControl('',[
    Validators.required,
    Validators.email
  ]),
  password: new FormControl('',[
    Validators.required
  ]),
  repassword: new FormControl('',[
    Validators.required,

  ])

})



}
