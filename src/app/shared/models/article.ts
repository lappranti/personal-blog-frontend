export interface Article {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  addBy: string;
  createdAt: Date;
  updatedAt: Date;
}
