import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import {ProposedTraining} from './usermenu'

@Injectable({
  providedIn: 'root'
})
export class UsermenuService {
  public currentTrainingList: any[];

  readonly currentTrainingsURL = "http://localhost:8080/currentTrainings";
  readonly completedTrainingsURL = "http://localhost:8080/completedTrainings";
  readonly proposeTrainingURL = "http://localhost:8080/proposeTraining";

  constructor(private _http: HttpClient) { }

  public getCurrentTrainings(userId: string) {
    const params = new HttpParams().set("userId",userId);
    return this._http.get<any[]>(this.currentTrainingsURL, {params});
  }

  public getCompletedTrainings(userId: string) {
    const params = new HttpParams().set("userId",userId);
    return this._http.get<any[]>(this.completedTrainingsURL, {params});
  }

  public proposeTraining(trainingInfo: ProposedTraining) {
    return this._http.post<any>(this.proposeTrainingURL, trainingInfo);
    // const params = new HttpParams().set("userId",trainingInfo[0]).set("mentorId", trainingInfo[1]).
    // set("technologyId",trainingInfo[2]).set("startTime",trainingInfo[3]).set("endTime",trainingInfo[4]);
    // return this._http.get<any[]>(this.proposeTrainingURL, {params});
  }

}
