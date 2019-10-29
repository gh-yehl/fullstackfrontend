import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Signup} from './signup';
import {SharedService} from '../utils/shared.service';
import {SignupService} from './signup.service';

declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  testString: string = "1231321321"

  usertypes: string[]=['User','Mentor']

  signupModle = new Signup (this.usertypes, '','', '','', [],'','','','','',[],'','');


  constructor(
    private router: Router,
    public sharedService: SharedService,
    public signupService: SignupService
  ) { }

  ngOnInit() {
    this.signupModle.role = "User";

    this.signupModle.signup_startTime = "00:00";
    this.signupModle.signup_endTime = "23:59";

    this.signupModle.yearsList =  ["1","2","3","4","5","6","7","8","9","10",
                                  "11","12","13","14","15","16","17","18","19","20",
                                  "21","22","23","24","25","26","27","28","29","30"];
    //initiate bootstrap4-datetimepicker module
    $(function () {
      $('.datetimepicker-signup').datetimepicker({
        //format: 'LT'
        format: 'HH:mm'
      });
    });


  }

  roleChange(msg:object){
    this.signupModle.role = $('#roles option:selected').val();
    //document.getElementById("special").style.display="";
    if("Mentor" == $('#roles option:selected').val()) {
      $("#special").show();
    }
    else {  
      $("#special").hide()
    }
  }


  //technoloies selected
  private tempSeleveted: Array<string> = [];
  selectCheckbox(check:boolean,value:string){
    var index:number = this.tempSeleveted.indexOf(value);
    if(check){
      if(index < 0){
        this.tempSeleveted.push(value);
      }
    }else{
      if(index > -1){
        this.tempSeleveted = this.tempSeleveted.filter((ele,index)=>{
          return ele != value;
        })
      }
    }
    this.signupModle.technologiesSelected = this.tempSeleveted.toString();
  }


  confirmWorkingYears(){
    this.signupModle.workingYears = $('#yearsOfWorking option:selected').val();
  }



  //form submit
  submitted = false;
  onSubmit() {
    this.submitted = true; 
    this.signupModle.role = $('#roles option:selected').val();
    this.signupModle.signup_startTime = $('#signup_startTime').val()+":00";
    this.signupModle.signup_endTime = $('#signup_endTime').val()+":00";
    this.signupService.signup(this.signupModle).subscribe(data => {
        //this.sharedService.userId = data.id;
        this.sharedService.loginPageMessage = "SignUp Successful, Please use your Email ID to login";
      },
      error => {
        this.sharedService.loginPageMessage = "SignUp Failed, Please contact the application admin";
      }
    );
    this.router.navigateByUrl('/login');
  }

  
// TODO: Remove this when we're done
//  get diagnostic() { return JSON.stringify(this.signupModle); }
//  put {{diagnostic}}  in the template file to display value being changed 
}
