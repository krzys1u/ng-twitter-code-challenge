import { Component, OnInit } from '@angular/core';

import { User } from '../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public login: string = '';
  public password: string = '';

  constructor() { }

  ngOnInit() {
  }

  public saveUserToSessionStorage(user: User): void {
      console.log('save user', user);
  }

  public onClickLogin(): void {
      if(this.checkLoginData()){
          let user: User = {
              id: Math.floor((Math.random() * 100) + 1),
              name: this.login
          };

          this.saveUserToSessionStorage(user);

          // redirect to /
      }
  }

  public checkPassword(): boolean {
      return true; //password contains 8 characters, at least one small letter, at least one capital letter, at least one number
  }

  public checkLoginData(): boolean {
      return this.login.length > 5 && this.checkPassword();
  }

}
