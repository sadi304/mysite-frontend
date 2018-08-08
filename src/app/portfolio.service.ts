import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "../environments/environment";
import { AuthService } from "./auth.service";
@Injectable({
  providedIn: "root"
})
export class PortfolioService {
  private url = `${environment.url}/portfolio`;
  private postUrl = `${environment.url}/posts`;
  private getPostsUrl = `${environment.url}/posts`;
  private getPostUrl = `${environment.url}/posts`;
  constructor(private http: HttpClient, private _service: AuthService) {}

  getPortfolios(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  postPost(data): Observable<any> {
    let headers = new HttpHeaders({
      authorization: `Bearer ${this._service.getToken()}`
    });

    console.log(this._service.getToken());

    let options = { headers: headers };
    return this.http.post<any>(this.postUrl, data, options);
  }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.getPostsUrl);
  }

  getPost(id: Number): Observable<any> {
    return this.http.get<any>(`${this.getPostUrl}/${id}`);
  }
}
