import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Signup } from './signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  public status: string;
  public technologyList: any[];

  readonly signupURL = "http://localhost:8080/signUp";

  constructor(private _http: HttpClient) { }

  public signup(signupForm: Signup) {
    return this._http.post<any>(this.signupURL, signupForm);
  }

}
