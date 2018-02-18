import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TweetsComponent } from './tweets/tweets.component';
import { TweetComponent } from './tweet/tweet.component';

import { FormsModule } from '@angular/forms';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertComponent } from './alert/alert.component';
import { MessageBusService } from './message-bus.service';
import { UserService } from './user.service';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TweetsComponent,
    TweetComponent,
    AlertsComponent,
    AlertComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [MessageBusService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
