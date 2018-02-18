import { Injectable } from '@angular/core';
import {User} from './models';

@Injectable()
export class UserService {
  public static USERKEY = 'TWITTER_CLONE_USER';

  constructor() { }

  public saveUser(user: User): void {
      sessionStorage.setItem(UserService.USERKEY, JSON.stringify(user));
  }

  public getUser(): User {
      let userData: string = sessionStorage.getItem(UserService.USERKEY);

      if(!userData) return null;

      return JSON.parse(userData);
  }

  logoutUser(): void {
    sessionStorage.removeItem(UserService.USERKEY);
  }
}
