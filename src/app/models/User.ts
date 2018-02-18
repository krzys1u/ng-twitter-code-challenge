export class User {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
  }

  public getId(): number {
      return this.id;
  }

  public getName(): string {
      return this.name;
  }

  public static checkUserLogin(login: string): boolean {
      return login.length > 4;
  }

  public static checkUserPassword(password: string): boolean {
      //i assume "password contains 8 characters", means at least 8 characters :)
      return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/.test(password);
  }

}
