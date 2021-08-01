import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ElepioApp } from '../models/elepio-app.model';

const baseUrl = 'http://localhost:8080/api/elepioApp';

@Injectable({
  providedIn: 'root'
})
export class ElepioAppService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<ElepioApp[]> {
    return this.http.get<ElepioApp[]>(baseUrl);
  }

  get(id: any): Observable<ElepioApp> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<ElepioApp[]> {
    return this.http.get<ElepioApp[]>(`${baseUrl}?title=${title}`);
  }
}
