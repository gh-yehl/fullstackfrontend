import { Injectable } from '@angular/core';
import { Login } from "./login";

import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public status: string;
  public technologyList: any[];

  readonly signupURL = "http://localhost:8080/signIn";

  constructor(private _http: HttpClient) { }

  public login(loginForm: Login) {
    return this._http.post<any>(this.signupURL, loginForm);
  }

}
