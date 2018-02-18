import { Component } from '@angular/core';

import { User } from './models';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor( private userService: UserService) {
      if (!this.checkLogged()){
          //redirect to login
      }
  }

  public checkLogged(): boolean{
      console.log('user', this.getUser());
      return this.getUser() !== null;
  }

  public getUser(): User{
      return this.userService.getUser();
  }
}
