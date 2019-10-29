import { Injectable, wtfStartTimeRange } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AppComponentService {

  public searchResult: any[];
  

  readonly url = "http://localhost:8080/listTechnologies";

  constructor(private _http: HttpClient) { }

  public getTechnologyList() {
    return this._http.get<any[]>(this.url);
  }

}
