import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  mySelectedIndex: number;

  constructor( public navParams: NavParams ) {
    
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }
}
