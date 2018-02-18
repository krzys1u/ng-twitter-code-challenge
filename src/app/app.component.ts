import { Component } from '@angular/core';
import { User } from './models';
import { UserService } from './user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor( private userService: UserService, private router: Router) {
    let route: string = '/login';
    console.log('check');
    if (this.checkLogged()){
          route = '/tweets';
    }
    this.router.navigate([route]);
  }

  public checkLogged(): boolean{
      return this.getUser() !== null;
  }


  public getUser(): User{
      return this.userService.getUser();
  }
}
