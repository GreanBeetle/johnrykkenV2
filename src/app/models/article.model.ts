export class Article {
  constructor(
    public id: string,
    public title: string,
    public subtitle: string,
    public date: string,
    public category: string,
    public content: string,
    public keywords: string,
    public isFeature: boolean
  ) { }
}
