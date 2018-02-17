import { Input, Component, OnInit } from '@angular/core';

import { Tweet } from "../models";

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.less']
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet;

  constructor() {

  }

  ngOnInit() {

  }

  redirectToTweet(tweet: Tweet): void {
      console.log(tweet);
  }
}
