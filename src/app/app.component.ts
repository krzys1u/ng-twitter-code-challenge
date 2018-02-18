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
    if (!this.userService.isUserLogged()){
        this.router.navigate(['/login']);
    }
  }
}
