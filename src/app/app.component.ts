import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {SharedService} from './utils/shared.service';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private technologyId: string;
  private startTime: string;
  private endTime: string;
  private searchResult: any[];
  private technologyList: any[];
  constructor(
    private router: Router,
    public sharedService: SharedService

  ) { }

  ngOnInit() {

    this.startTime = "00:00";
    this.endTime = "23:59";
    //initiate bootstrap4-datetimepicker module
    $(function () {
      $('.datetimepicker-input').datetimepicker({
        //format: 'LT'
        format: 'HH:mm'
      });
    });

    this.sharedService.loadTechnologies();
  }



  guestSearch() {

      //those two lines actually is NOT supposed to be added,  
      //two lines will be removed later once the datetimepicker module binding issue(not able to trigger input change event) gets solved
      this.startTime = $('#startTime').val();
      this.endTime = $('#endTime').val();
      this.technologyId = $('#technologies option:selected').val();

      this.sharedService.getGuestSearchResult(this.technologyId, this.startTime+":00", this.endTime+":00");
  }



}
