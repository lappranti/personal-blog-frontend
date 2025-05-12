export interface Article {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  addBy: string;
  categorie: string;
  image: {
    url: string;
    publicId: string;
  };
  createdAt: Date;
  updatedAt: Date;
  views: number;
}
