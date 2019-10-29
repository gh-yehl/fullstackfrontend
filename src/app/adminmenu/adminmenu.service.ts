import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminmenuService {


  readonly userListURL = "http://localhost:8080/findUsers";
  readonly changeUserStatusURL = "http://localhost:8080/changeUserStatus";
  readonly editTechnologyURL = "http://localhost:8080/editTechnology";
  readonly addTechnologyURL = "http://localhost:8080/addTechnology";
  readonly removeTechnologyURL = "http://localhost:8080/deleteTechnology";


  
  constructor(private _http: HttpClient) { }


  public findUsers(userName: string) {
    const params = new HttpParams().set("userName", userName);
    return this._http.get<any[]>(this.userListURL, {params});
  }

  public changeUserStatus(user: any) {
    return this._http.post<any>(this.changeUserStatusURL, user);
  }

  public editTechnology(technology: any) {
    return this._http.post<any>(this.editTechnologyURL, technology);
  }

  public addTechnology(technology: any) {
    return this._http.post<any>(this.addTechnologyURL, technology);
  }

  public removeTechnology(technologyId: string) {
    const params = new HttpParams().set("technologyId", technologyId);
    return this._http.get<any[]>(this.removeTechnologyURL, {params});
  }

}
