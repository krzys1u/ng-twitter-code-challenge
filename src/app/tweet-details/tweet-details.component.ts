import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/Tweet';
import { ActivatedRoute } from '@angular/router';
import { TweetService } from '../tweet.service';

@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.less']
})
export class TweetDetailsComponent implements OnInit {
  public tweet: Tweet;
  constructor(private route: ActivatedRoute, private tweetService: TweetService) { }

  ngOnInit() {
      this.fetchTweet();
  }

  public fetchTweet(): void {
    let id = this.route.snapshot.paramMap.get('id');

    this.tweetService.fetchTweet(id).subscribe(tweetData => {
        this.tweet = new Tweet(tweetData.id, tweetData.title, tweetData.userId, tweetData.body);
    });
  }

}
