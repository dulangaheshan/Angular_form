import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }from'@angular/router';


import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SignInComponent } from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    LogInComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
     {path:"login",component:LogInComponent},
     {path:"signin",component:SignInComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
