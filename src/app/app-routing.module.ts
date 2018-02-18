import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { TweetDetailsComponent } from './tweet-details/tweet-details.component';
import { LoginComponent } from './login/login.component';
import { TweetsComponent } from './tweets/tweets.component';

const routes: Routes = [
  { path: 'tweets', component: TweetsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'tweet/:id', component: TweetDetailsComponent },
  { path: 'login', component: LoginComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
