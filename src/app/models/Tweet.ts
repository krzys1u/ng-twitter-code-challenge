export class Tweet {
  private id: number;
  private user: string;
  private title: string;
  private body: string;

  constructor(id, title, user, body){
    this.id = id;
    this.user = user;
    this.title = title;
    this.body = body;
  }

  public getId(): number {
      return this.id;
  }

  public getUser(): string {
      return this.user;
  }

  public getTitle(): string {
      return this.title;
  }

  public getBody(): string {
      return this.body;
  }

  public matchToQuery(query): boolean{
    return this.title.indexOf(query) > -1 || this.body.indexOf(query) > -1;
  }
}
