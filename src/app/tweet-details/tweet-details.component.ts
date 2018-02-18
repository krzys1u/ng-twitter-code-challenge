import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/Tweet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tweet-details',
  templateUrl: './tweet-details.component.html',
  styleUrls: ['./tweet-details.component.less']
})
export class TweetDetailsComponent implements OnInit {
  public tweet: Tweet = new Tweet(1,'asd', 2,' Lorem impsum dolor ...');
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
      console.log(this.fetchTweet());
  }

  public fetchTweet(): string {//Tweet {
    let id = this.route.snapshot.paramMap.get('id');
    return id;
  }

}
