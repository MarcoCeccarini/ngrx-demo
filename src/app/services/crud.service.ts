import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {

  constructor(private http: HttpClient) { }

  getAll(url: string): Observable<T[]> {
    return this.http.get<T[]>(url);
  }

  get(url: string, id: number | string): Observable<T> {
    return this.http.get<T>(`${url}/${id}`);
  }

  create(url: string, item: T): Observable<T> {
    return this.http.post<T>(url, item);
  }

  update(url: string, id: number | string, item: T): Observable<T> {
    return this.http.put<T>(`${url}/${id}`, item);
  }

  delete(url: string, id: number | string): Observable<void> {
    return this.http.delete<void>(`${url}/${id}`);
  }
}
