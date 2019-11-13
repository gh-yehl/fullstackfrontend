import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { FSConfigurations } from "../../global-config";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  
  public userId: string;
  public loginPageMessage: string;

  public guestSearchResult: any[];
  public technologyList: any[];

  readonly guestSearchUrl = FSConfigurations.serverURL+"guestSearch";
  readonly technologyListURL = FSConfigurations.serverURL+"listTechnologies";

  constructor(private _http: HttpClient) { }


  public getGuestSearchResult(technologyId: string, startTime: string, endTime: string) {
    const params = new HttpParams().set("technologyId",technologyId).set("startTime", startTime).set("endTime", endTime);
    this._http.get<any[]>(this.guestSearchUrl, {params}).subscribe(data => {
      console.log(data);
      this.guestSearchResult = data;
      }
    );
  }

  public loadTechnologies() {
    console.log(this.technologyList);
    if(this.technologyList == undefined) {
      this.getTechnologies();
    }
  }

  public getTechnologies() {
    this._http.get<any[]>(this.technologyListURL).subscribe(data => {
      console.log(data);
      this.technologyList = data;
      }
    );
  }

  public updateTechnologies() {
    this.getTechnologies();
  }
}
