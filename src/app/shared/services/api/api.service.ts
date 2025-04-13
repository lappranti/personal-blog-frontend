import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../../models/article';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://personal-blog-backend-7vjc.onrender.com/api/blog';
  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get<Article[]>(`${this.baseUrl}`);
  }

  getLatestArticles() {
    return this.http.get<Article[]>(`${this.baseUrl}/latest`);
  }

  getOnePost(slug: string) {
    return this.http.get<Article>(`${this.baseUrl}/${slug}`);
  }
}
