// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
//import * as jwt_decode from 'jsonwebtoken';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8005/auth'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, { email: username, password: password })
      .pipe(
        tap((response) => {
          if (response && response.token) {
            localStorage.setItem('jwt_token', response.token);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('jwt_token');
  }

  getToken(): string {
    return localStorage.getItem('jwt_token');
  }

  getDecodedToken(): any {
    const token = this.getToken();
    return "jwt_decode(token)";
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }
}