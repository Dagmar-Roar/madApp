import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { WpProvider } from './../../providers/wp/wp';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  articles;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private WpProvider: WpProvider) {

    this.WpProvider.getArticle().subscribe(data =>{
      console.log(data);
      this.articles = data;
    });

  }

}
