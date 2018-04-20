import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams } from 'ionic-angular';

import { ContactPage } from '../contact/contact';
import { WpProvider } from './../../providers/wp/wp';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  posts;
  users;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private WpProvider: WpProvider) {

    this.WpProvider.getPost().subscribe( data => {
      console.log(data);
      this.posts = data;
    });

    this.WpProvider.getUser().subscribe(data =>{
      console.log(data);
      this.users = data;
    });

  }

  tappedPost(post){
    this.navCtrl.push( ContactPage, {
      post : post
    })
  }

}