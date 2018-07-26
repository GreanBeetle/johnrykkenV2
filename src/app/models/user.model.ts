export class User {
  public isAdmin = false;
  constructor(
    public uid: string,
    public email: string,
    public displayName: string) {}
}
