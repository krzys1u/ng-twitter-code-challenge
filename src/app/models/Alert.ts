const ALERT_TIME = 5000;

export enum AlertType {
  ERROR = 'danger',
  SUCCESS = 'success'
}

export class Alert {
  private header: string;
  private description: string;
  private type: AlertType;

  constructor(type: AlertType, header: string, description: string) {
      this.header = header;
      this.description = description;
      this.type = type;
  }

  public getHeader(): string {
      return this.header;
  }
  public getDescription(): string {
      return this.description;
  }
  public getType(): AlertType {
      return this.type;
  }

}
