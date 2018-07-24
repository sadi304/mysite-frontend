import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import CONFIG from "./config";

@Injectable({
  providedIn: "root"
})
export class PortfolioService {
  private url = `${CONFIG.url}/portfolio`;
  constructor(private http: HttpClient) {}

  getPortfolios(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
