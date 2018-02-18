import { Pipe, PipeTransform } from '@angular/core';
import { Tweet } from './models/Tweet';

@Pipe({
  name: 'searchFilter',
  pure: false // pipe have to be unpure to update view after change array, its not efficient but i want to use custom pipe
})
export class SearchPipe implements PipeTransform {

  transform(tweets: Array<Tweet>, query: string): any {
      if (!query || !query.length){
          return tweets;
      }
      return tweets.filter(tweet => tweet.matchToQuery(query));
  }

}
