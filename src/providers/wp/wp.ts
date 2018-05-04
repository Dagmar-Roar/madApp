import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WpProvider {

  api_url_post = 'http://howmadareyou.com/wp-json/wp/v2/post_type/ignition_product';

  api_url_user = 'http://howmadareyou.com/wp-json/wp/v2/users/mader';

  api_url_article = 'http://to-be-a-freelance.com/wp-json/wp/v2/post_type/post';

  constructor(public http: HttpClient) {
    console.log('Hello WpProvider Provider');
  }

  getPost(){
    return this.http.get(this.api_url_post);
  }

  getUser(){
    return this.http.get(this.api_url_user);
  }

  getArticle(){
    return this.http.get(this.api_url_article);
  }

}
