export interface Article {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  addBy: string;
  categorie: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
}
