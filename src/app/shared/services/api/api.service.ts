import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../../models/article';
import { environment } from '../../../../environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = environment.API_BASE_URL;
  constructor(private http: HttpClient) {}

  // getAllPosts() {
  //   return this.http.get<any>(`${this.baseUrl}`);
  // }

  getAllPosts(page: number, limit: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?page=${page}&limit=${limit}`);
  }

  getLatestArticles() {
    return this.http.get<Article[]>(`${this.baseUrl}/latest`);
  }

  getOnePost(slug: string) {
    return this.http.get<Article>(`${this.baseUrl}/${slug}`);
  }
}
