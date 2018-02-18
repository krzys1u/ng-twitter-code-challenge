import { Component } from '@angular/core';
import { User } from './models';
import { UserService } from './user.service'
import { Router } from '@angular/router';
import { MessageBusService } from './message-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(
      private router: Router,
      private messageBus: MessageBusService
  ) {
      this.messageBus.addListener('redirect', this.redirectTo.bind(this));
  }

  redirectTo(route: string){
      this.router.navigate([route]);
  }
}
