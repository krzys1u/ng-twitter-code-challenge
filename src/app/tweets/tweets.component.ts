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
  public searchQuery: string;

  constructor(private tweetService: TweetService) {

  }

  loadTweets(): void {
      this.tweetService.fetchAllTweets().subscribe(tweets => {
          tweets.forEach((item, index) => {
              ((itm, idx) => {
                  setTimeout(() => {
                      this.tweets.push(item);
                  }, idx * 1000);
              })(item, index);
          });
      });
  }

  ngOnInit() {
      this.loadTweets();
  }
}
