export class User {
  constructor(
    public uid: string,
    public email: string,
    public displayName: string,
    public admin: boolean = false) {}
}
