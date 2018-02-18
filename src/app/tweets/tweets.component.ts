import { Component, OnInit } from '@angular/core';

import { Tweet } from '../models';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.less']
})
export class TweetsComponent implements OnInit {
  public tweets: Array<Tweet> = [];
  public tweetsToShow: Array<Tweet> = [];
  public searchQuery: string;

  constructor(private tweetService: TweetService) {

  }

  public filterTweets(): void {
      let query = this.searchQuery;

      if (!query || !query.length) {
          this.tweetsToShow = this.tweets.slice();
      } else {
          this.tweetsToShow = this.tweets.filter(tweet => tweet.matchToQuery(query));
      }
  }

  loadTweets(): void {
      this.tweetService.fetchAllTweets().subscribe(tweets => {
          tweets.forEach((item, index) => {
              ((itm, idx) => {
                  setTimeout(() => {
                      this.tweets.push(item);
                      this.filterTweets();
                  }, idx * 1000);
              })(item, index);
          });
      });
  }

  ngOnInit() {
      this.loadTweets();
  }
}
