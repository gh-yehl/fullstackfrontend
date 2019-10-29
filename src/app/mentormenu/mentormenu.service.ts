import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MentormenuService {

  readonly currentTrainingURL = "http://localhost:8080/mentorCurrentTraining";
  readonly completedTrainingURL = "http://localhost:8080/mentorCompletedTraining";


  constructor(private _http: HttpClient) { }

  public getCurrentTraingList(userId: string) {
    const params = new HttpParams().set("userId",userId);
    return this._http.get<any[]>(this.currentTrainingURL, {params});
  }

  public getCompletedTraingList(userId: string) {
    const params = new HttpParams().set("userId",userId);
    return this._http.get<any[]>(this.completedTrainingURL, {params});
  }
}
