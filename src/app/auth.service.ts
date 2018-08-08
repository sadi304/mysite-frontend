import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { HttpClient } from "@angular/common/http";
import * as jwt_decode from "jwt-decode";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

export const TOKEN_NAME: string = "jwt_token";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private url: string = `${environment.url}`;
  redirectUrl: string;

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN_NAME, token);
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) return null;

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) token = this.getToken();
    if (!token) return true;

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  login(user): Observable<any> {
    return this.http.post(`${this.url}/user/login`, {
      username: user.username,
      password: user.password
    });
  }
}
