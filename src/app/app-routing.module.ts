import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutComponent } from './logout/logout.component';
import { TweetDetailsComponent } from './tweet-details/tweet-details.component';
import { LoginComponent } from './login/login.component';
import { TweetsComponent } from './tweets/tweets.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'tweet/:id', component: TweetDetailsComponent },
  { path: '', component: TweetsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
  { path: '404', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
