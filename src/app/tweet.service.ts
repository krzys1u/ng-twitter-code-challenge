import { Injectable } from '@angular/core';
import { Tweet } from "./models";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, flatMap, } from 'rxjs/operators'
import { MessageBusService } from './message-bus.service';
import { Alert, AlertType } from './models/Alert';
import { TweetDataInterface } from './models/Tweet';

@Injectable()
export class TweetService {
  public static TWEETSSURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient, private messageBus: MessageBusService) { }

  public fetchAllTweets(): Observable<Tweet[]> {
      return this.httpClient.get<Array<TweetDataInterface>>(TweetService.TWEETSSURL).pipe(
          map(
              res => {
                  return res.map(
                    item => new Tweet(item.id, item.title, item.userId, item.body)
                  ).sort((x, y) => x.getId() > y.getId() ? -1 : 1)
              }
          ),
          catchError(this.handleError('Fetch tweets failed', []))
      );
  }

  public fetchTweet(id: string): Observable<any | TweetDataInterface> {
      return this.httpClient.get<TweetDataInterface>(`${TweetService.TWEETSSURL}/${id}`).pipe(
          catchError(this.handleError('Error while fetching tweet data', []))
      );
  }

  private handleError<T> (operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      if (error.status === 404){
          this.messageBus.sendMessage('/404', 'redirect');
      }
      this.messageBus.sendMessage(new Alert(
          AlertType.ERROR,
          operation,
          error.message
      ));

      return of(result as T);
    };
  }
}
