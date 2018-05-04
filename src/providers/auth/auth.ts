import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  api_url = 'http://to-be-a-freelance.com/wp-json/wp/v2/users/mader';

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  postLogin(email,password){

    let data = {
      email:email,
      password:password
    }

    let headers = new HttpHeaders();
    headers.set('Content-Type','application/json');

    return this.http.post(this.api_url, data );
  }

}
