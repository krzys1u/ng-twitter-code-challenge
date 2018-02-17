import { Component, OnInit } from '@angular/core';

import { Tweet } from '../models';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.less']
})
export class TweetsComponent implements OnInit {
  public tweets: Array<Tweet> = [];
  public tweetsToShow: Array<Tweet> = [];
  public searchQuery: string;

  constructor() {
    ['a','b','c','d','e','f','g','h','i','j','k'].forEach(
      (item, index) => this.tweets.push(
        new Tweet(index, item, index, 'body of ' + item)
      )
    );

    this.filterTweets();
  }

  public filterTweets(): void {
      let query = this.searchQuery;

      if (!query || !query.length) {
          this.tweetsToShow = this.tweets.slice();
      } else {
          this.tweetsToShow = this.tweets.filter(tweet => tweet.matchToQuery(query));
      }
  }

  public routeToLogout(): void {
      console.log('logout');
  }

  ngOnInit() {
  }

  fetchTweets() {

  }

}
