import { Component } from '@angular/core';

import { User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public isLogged: boolean = this.checkLogged();

  constructor() {
      if (!this.checkLogged()){
          //redirect to login
      }
  }

  public checkLogged(): boolean{
      return this.getUser() !== null;
  }

  public getUser(): User{
      return null;
  }
}
