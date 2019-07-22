import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class SignupService {
  constructor(private http: HttpClient) {}

  path = "/accounts/";

  signup(userData: {}) {
    return this.http.post(`${environment.api_url}${this.path}`, userData);
  }
}
