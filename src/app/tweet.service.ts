import { Injectable } from '@angular/core';
import {Tweet} from "./models/Tweet";

@Injectable()
export class TweetService {

  constructor() { }

  public fetchAllTweets(): Array<Tweet> {
      return [new Tweet(1,'','','')];
  }

  public fetchTweet(): Tweet {
      return new Tweet(1,'','','');
  }

}
