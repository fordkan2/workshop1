import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder,Validators } from '@angular/forms';
import { Users } from '../../models/users'
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login_type ="login";
  login_form : any;
  register_form : any;
  password_max_legth =6;
  user = {} as Users;

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private formbuilder : FormBuilder ) {
  this.login_form = this.formbuilder.group({
                  email : ['' , [Validators.email, Validators.required]],
                  password : ['', [Validators.minLength(this.password_max_legth),
                                  Validators.required]
                                ],
          });

  this.register_form = this.formbuilder.group({
            email : ['' , [Validators.email, Validators.required]],
            password : ['', [Validators.minLength(this.password_max_legth),
                            Validators.required]],
            tel : ['' , [Validators.required]]
          });
  }

  login(user: Users) {
    console.log(user.email);
    this.navCtrl.push(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
