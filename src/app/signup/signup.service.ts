import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Signup } from './signup';
import { FSConfigurations } from "../../global-config";

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  public status: string;
  public technologyList: any[];

  readonly signupURL = FSConfigurations.serverURL + "signUp";

  constructor(private _http: HttpClient) { }

  public signup(signupForm: Signup) {
    return this._http.post<any>(this.signupURL, signupForm);
  }

}
