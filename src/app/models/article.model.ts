export class Article {
  public date: Date = new Date();
  constructor(
    public id: string,
    public title: string,
    public subtitle: string,
    public content: string,
    public keywords: string
    ) {}
}
