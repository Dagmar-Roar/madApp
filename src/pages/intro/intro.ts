import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import{ HomePage } from '../home/home';
import{ TabsPage } from '../tabs/tabs';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  email;
  password;

  constructor(public navCtrl: NavController, public navParams: NavParams, private authProvider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }

  navHome() {
    this.navCtrl.setRoot(TabsPage);
  }

  onLogin(){
    console.log(this.email, this.password);

    this.authProvider.postLogin(this.email,this.password).subscribe( data =>{
      console.log(data)
    });
  }

}
