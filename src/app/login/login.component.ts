import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Login} from './login'
import {SharedService} from '../utils/shared.service';
import {LoginService} from './login.service';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel = new Login('','');

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private loginService: LoginService
  ) { }

  ngOnInit() {

  }

  submitted = false;
  onSubmit() {
    //reset login page message
    this.sharedService.loginPageMessage = "";

    this.submitted = true;
    
    this.loginService.login(this.loginModel).subscribe(data => {
      this.redirect(data);
    });
  }


  //direct to different page according to user type(role)
  redirect(data: any) {
    if(data == null) {
      this.sharedService.loginPageMessage = "Please confirm your email and password!";
      return;
    }

    this.sharedService.userId = data.id;
    
    if("Mentor" == data.role) {
      console.log(data.role);
      console.log(data.id);
      this.router.navigateByUrl('/mentormenu');
    }
    else if ("User" == data.role) {
      
      console.log(data.role);
      console.log(data.id);
      this.router.navigateByUrl('/usermenu');
    }

    else if ("Admin" == data.role) {
      
      console.log(data.role);
      console.log(data.id);
      this.router.navigateByUrl('/adminmenu');
    }
  }


}
