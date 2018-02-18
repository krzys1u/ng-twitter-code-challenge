export interface TweetDataInterface {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export class Tweet {
  private id: number;
  private userId: number;
  private title: string;
  private body: string;

  constructor(id: number, title: string, userId: number, body: string){
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
  }

  public getId(): number {
      return this.id;
  }

  public getUserId(): number {
      return this.userId;
  }

  public getTitle(): string {
      return this.title;
  }

  public getBody(): string {
      return this.body;
  }

  public setId(id: number): void {
      this.id = id;
  }
  public setUserId(userId: number): void {
      this.userId = userId;
  }
  public setTitle(title: string): void {
      this.title = title;
  }
  public setBody(body: string): void {
      this.body = body;
  }

  public matchToQuery(query): boolean{
    return this.title.indexOf(query) > -1 || this.body.indexOf(query) > -1;
  }
}
