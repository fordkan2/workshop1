import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Users } from '../../models/users'
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  logout(user: Users) {
    console.log(user);
    this.navCtrl.push(LoginPage);
  }

}
