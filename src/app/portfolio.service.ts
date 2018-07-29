import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: "root"
})
export class PortfolioService {
  private url = `${environment.url}/portfolio`;
  private postUrl = `${environment.url}/posts`;
  constructor(private http: HttpClient) {}

  getPortfolios(): Observable<any> {
    return this.http.get<any>(this.url);
  }
  postPost(data): Observable<any> {
    console.log("inservice", data);
    return this.http.post<any>(this.postUrl, {
      title: data.name,
      body: data.editor
    });
  }
}
