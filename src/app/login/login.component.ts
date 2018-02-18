import { Component, OnInit} from '@angular/core';
import { User, Alert, AlertType } from '../models';
import { MessageBusService } from '../message-bus.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  public login: string = '';
  public password: string = '';

  constructor(private messageBus: MessageBusService, private userService: UserService, private router: Router) {}

  ngOnInit() {
    if (this.userService.isUserLogged()) {
      this.router.navigate(['/']);
    }
  }

  public saveUserToSessionStorage(user: User): void {
      this.userService.saveUser(user);
  }

  public onClickLogin(): void {
      if(!User.checkUserLogin(this.login)) {
          this.messageBus.sendMessage(
            new Alert(
              AlertType.ERROR,
              'Login error',
              'Login should contain at least 5 characters'
            )
          );

          return;
      }

      if(!User.checkUserPassword(this.password)) {
        this.messageBus.sendMessage(
            new Alert(
              AlertType.ERROR,
              'Password error',
              'Password should contains 8 characters, at least one small letter, at least one capital letter, at least one number'
            )
          );

          return;
      }

      let user: User = new User(Math.floor((Math.random() * 100) + 1),this.login);

      this.saveUserToSessionStorage(user);

      this.messageBus.sendMessage(
          new Alert(
            AlertType.SUCCESS,
            'Login successful',
            'You will be redirecting to application'
          )
      );

      setTimeout(() => this.router.navigate(['/']),2000);
  }
}
