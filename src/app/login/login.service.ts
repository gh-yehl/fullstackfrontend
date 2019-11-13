import { Injectable } from '@angular/core';
import { Login } from "./login";

import { HttpClient, HttpParams } from "@angular/common/http";
import { FSConfigurations } from "../../global-config";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public status: string;
  public technologyList: any[];

  readonly signupURL = FSConfigurations.serverURL + "signIn";

  constructor(private _http: HttpClient) { }

  public login(loginForm: Login) {
    return this._http.post<any>(this.signupURL, loginForm);
  }

}
