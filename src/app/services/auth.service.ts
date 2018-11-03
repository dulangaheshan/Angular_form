import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import  { Contact } from '../log-in/contatct';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }
  private headers = new Headers({'content-Type':'application/json'});
  private option = new RequestOptions({headers:this.headers});
 /*createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('Email:password'));
  }*/

  login(contact){
  let headers = new Headers();
    //this.createAuthorizationHeader(headers);
    return this.http.post('https://localhost:44355/api/values/login',contact,{
      headers:this.headers
    });
  }
}
