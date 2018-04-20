import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
import { WpProvider } from './../../providers/wp/wp';

/**
 * Generated class for the ProjectDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project-detail',
  templateUrl: 'project-detail.html',
})
export class ProjectDetailPage {

  selectedPost;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedPost = this.navParams.get('post');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectDetailPage');
  }

}
