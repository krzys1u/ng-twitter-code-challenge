import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { TweetDetailsComponent } from './tweet-details/tweet-details.component';
import { TweetService } from './tweet.service';
import { AppRoutingModule } from './/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TweetsComponent,
    TweetComponent,
    AlertsComponent,
    AlertComponent,
    LogoutComponent,
    TweetDetailsComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MessageBusService, UserService, TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
